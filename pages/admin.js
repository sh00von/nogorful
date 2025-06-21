// pages/admin/add-content.js
import Head from 'next/head'
import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { supabase } from '../lib/supabase'

export default function AddContent() {
  const [title, setTitle]               = useState('')
  const [description, setDescription]   = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl]     = useState('')
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState('')
  const [success, setSuccess]           = useState(false)

  const inputRef = useRef(null)

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0] ?? null
    setSelectedFile(file)
    setPreviewUrl(file ? URL.createObjectURL(file) : '')
  }

  const handleSubmit = async () => {
    if (!title || !description || !publishedDate || !selectedFile) {
      setError('All fields including image are required.')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // 1️⃣ Upload file with nanoid filename
      const ext = selectedFile.name.split('.').pop()
      const id  = nanoid()
      const fileName = `${id}.${ext}`

      const { data: uploadData, error: uploadErr } = await supabase
        .storage
        .from('images')
        .upload(fileName, selectedFile)

      if (uploadErr) throw uploadErr

      // 2️⃣ Get its public URL
      const { data: urlData, error: urlErr } = supabase
        .storage
        .from('images')
        .getPublicUrl(uploadData.path)

      if (urlErr) throw urlErr
      const publicURL = urlData.publicUrl
      if (!publicURL) throw new Error('Empty public URL')

      // 3️⃣ Insert metadata into 'contents'
      const { error: insertErr } = await supabase
        .from('contents')
        .insert({
          title,
          description,
          image_url: publicURL,
          published_date: publishedDate,
        })

      if (insertErr) throw insertErr

      // success!
      setSuccess(true)
      setTitle('')
      setDescription('')
      setPublishedDate('')
      setSelectedFile(null)
      setPreviewUrl('')
      if (inputRef.current) inputRef.current.value = ''
    } catch (err) {
      console.error(err)
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Admin: Add Content</title>
      </Head>

      <div className="container mx-auto mt-8 max-w-lg p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Add New Content</h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Published Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={publishedDate}
              onChange={e => setPublishedDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleFileSelect}
              className="w-full"
              required
            />
          </div>

          {previewUrl && (
            <div className="mt-4">
              <p className="mb-2 font-medium">Preview:</p>
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full max-w-xs rounded border"
              />
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full mt-6 py-2 rounded text-white ${
              loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Saving…' : 'Save Content'}
          </button>

          {error   && <p className="text-red-600 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">Content added successfully!</p>}
        </div>
      </div>
    </>
  )
}
