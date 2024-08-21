import { useRouter } from 'next/router';
import Volunteer from '../../components/Volunteer';
import { getVolunteersByBranch } from '../../data/volunteer'; // Update this path as necessary

import SEO from '../../components/SEO'; // Ensure you have this component
import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';

const VolunteerPage = ({ volunteers, branch }) => {
  const router = useRouter();

  // Ensure branch is properly capitalized
  const capitalizedBranch = branch.charAt(0).toUpperCase() + branch.slice(1);

  return (
    <>
      <SEO
        title={`Volunteers - ${capitalizedBranch} - Nogorful`}
        description={`Meet our dedicated volunteers from the ${capitalizedBranch} branch. Learn about their roles, contributions, and how they help us achieve our mission.`}
        keywords={`volunteers, Nogorful, ${capitalizedBranch}, community support, volunteer contributions`}
        image="/assets/images/default-volunteer-image.png"
      />

      <PageHeader title="Volunteers" breadcrumb="Volunteers" />

      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Meet Our Volunteers from {capitalizedBranch}</h2>
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

export async function getServerSideProps({ params }) {
  const { branch } = params;

  // Fetch volunteers based on branch
  const volunteers = await getVolunteersByBranch(branch); // Ensure this function returns a promise

  return {
    props: {
      volunteers: volunteers || [],
      branch: branch || 'general',
    },
  };
}

export default VolunteerPage;
