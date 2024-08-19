import Image from 'next/image';

const GalleryItem = ({ imageSrc, title, category }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="gallery-page__single">
        <div className="gallery-page__img-box">
          {/* Use next/image for optimized image */}
          <Image
            src={imageSrc} // Path to your image
            alt={title} // Description of the image
            layout="responsive" // Adjust based on your needs
            width={300} // Provide a width (adjust as needed)
            height={300} // Provide a height (adjust as needed)
          />
          <div className="gallery-page__hover-content-box">
            <h2>{title}</h2>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
