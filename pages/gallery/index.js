// pages/gallery.js

import Head from 'next/head';
import GalleryItem from '../../components/GalleryItem';
import { event } from '../../data/gallery';
import PageHeader from '../../components/PageHeader';

import JoinUs from '../../components/JoinUs';
const GalleryPage = () => {
  return (
    <>
      <Head>
        <title>Gallery - Halpes</title>
        <meta name="description" content="Explore the gallery of Halpes showcasing events, activities, and highlights from our organization." />
        <meta name="keywords" content="gallery, Halpes, events, activities, photo gallery" />
        <meta property="og:title" content="Gallery - Halpes" />
        <meta property="og:description" content="Explore the gallery of Halpes showcasing events, activities, and highlights from our organization." />
        <meta property="og:image" content="https://yourwebsite.com/gallery-image.png" />
        <meta property="og:url" content="https://yourwebsite.com/gallery" />
      </Head>

      <PageHeader title="Gallery" breadcrumb="Gallery" />

      <section className="gallery-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Our Gallery</h2>
            <p className="section-title__tagline">Explore highlights from our events and activities</p>
          </div>
          <div className="row">
            {event.map((item, index) => (
              <GalleryItem
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </section>
      <JoinUs/>
    </>
  );
};

export default GalleryPage;
