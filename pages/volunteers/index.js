// pages/volunteers.js

import Head from 'next/head';
import Volunteer from '../../components/Volunteer';
import volunteers from '../../data/volunteer';

import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';

const VolunteerPage = () => {
  return (
    <>
      <Head>
        <title>Our Volunteers - Halpes</title>
        <meta name="description" content="Meet our dedicated volunteers who contribute to making Halpes a better place. Learn about their roles and how they support our mission." />
        <meta name="keywords" content="volunteers, Halpes, community support, volunteer work, meet our team" />
        <meta property="og:title" content="Our Volunteers - Halpes" />
        <meta property="og:description" content="Meet our dedicated volunteers who contribute to making Halpes a better place. Learn about their roles and how they support our mission." />
        <meta property="og:image" content="https://yourwebsite.com/volunteers-image.png" />
        <meta property="og:url" content="https://yourwebsite.com/volunteers" />
      </Head>

      <PageHeader title="Volunteers" breadcrumb="Volunteers" />

      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Meet Our Volunteers</h2>
            <p className="section-title__tagline">Dedicated individuals who help us achieve our mission</p>
          </div>
          <div className="row">
            {volunteers.map((volunteer, index) => (
              <Volunteer
                key={index}
                imageSrc={volunteer.imageSrc}
                name={volunteer.name}
                title={volunteer.title}
                description={volunteer.description}
                socialLinks={volunteer.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      <JoinUs />
    </>
  );
};

export default VolunteerPage;
