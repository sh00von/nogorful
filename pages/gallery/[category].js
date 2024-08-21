import Head from 'next/head';
import { useRouter } from 'next/router';
import GalleryItem from '../../components/GalleryItem';
import PageHeader from '../../components/PageHeader';
import JoinUs from '../../components/JoinUs';
import { getEventsByCategory } from '../../data/gallery'; // Adjust this import based on your file structure

import SEO from '../../components/SEO'; // Ensure you have this component

const GalleryPage = ({ events, category }) => {
  const router = useRouter();

  // Ensure category is properly capitalized
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <SEO
        title={`Gallery - ${capitalizedCategory} Events - Nogorful`}
        description={`Explore highlights from our ${capitalizedCategory} events and activities. Discover photos and stories from our community events.`}
        keywords={`gallery, Nogorful, ${capitalizedCategory}, events, activities`}
        image="/assets/images/default-gallery-image.png"
      />

      <PageHeader title="Gallery" breadcrumb="Gallery" />

      <section className="gallery-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">{capitalizedCategory} Events</h2>
            <p className="section-title__tagline">Explore highlights from our {capitalizedCategory} events and activities</p>
          </div>
          <div className="row">
            {events.map((item, index) => (
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

export async function getServerSideProps({ params }) {
  const { category } = params;

  // Fetch events based on category
  const events = await getEventsByCategory(category); // Ensure this function returns a promise

  return {
    props: {
      events: events || [],
      category: category || 'general',
    },
  };
}

export default GalleryPage;
