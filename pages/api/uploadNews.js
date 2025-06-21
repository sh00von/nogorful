// pages/api/uploadNews.js
import { supabase } from '../../lib/supabase';

export async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { date, title, content, author, image } = req.body;

      // Validate required fields
      if (!image) {
        return res.status(400).json({ error: 'No image uploaded' });
      }
      
      // Ensure the image is in FormData and get the file data
      const file = image[0];  // Get the file from the FormData

      // Upload image to Supabase storage
      const { data, error: uploadError } = await supabase.storage
        .from('images') // Ensure 'images' bucket exists
        .upload(`news-images/${Date.now()}_${file.name}`, file);

      if (uploadError) {
        return res.status(500).json({ error: uploadError.message });
      }

      // Get the public URL for the uploaded image
      const imageUrl = supabase.storage.from('images').getPublicUrl(data.path).publicURL;

      // Insert news data into the 'news' table
      const { data: newsData, error: insertError } = await supabase
        .from('news')
        .insert([
          {
            date,
            title,
            content,
            author,
            image_url: imageUrl,  // Store the image URL in the database
          },
        ]);

      if (insertError) {
        return res.status(500).json({ error: insertError.message });
      }

      // Successfully inserted the news data
      return res.status(200).json({ success: true, data: newsData });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default handler;
