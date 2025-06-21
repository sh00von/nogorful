import { useRouter } from 'next/router';
import Volunteer from '../../components/Volunteer';
import { getVolunteersByBranch, getBranchSummary } from '../../data/volunteer';

import SEO from '../../components/SEO';
import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';

const VolunteerPage = ({ volunteers, branch, branchSummary }) => {
  const router = useRouter();

  // Ensure branch is properly capitalized
  const capitalizedBranch = branch.charAt(0).toUpperCase() + branch.slice(1);

  return (
    <>
      <SEO
        title={`${capitalizedBranch} Branch - Nogorful`}
        description={`Meet our dedicated volunteers from the ${capitalizedBranch} branch. Learn about their roles, contributions, and how they help us achieve our mission.`}
        keywords={`volunteers, Nogorful, ${capitalizedBranch}, community support, volunteer contributions`}
        image="/assets/images/default-volunteer-image.png"
      />

      <PageHeader title={`${capitalizedBranch}`} breadcrumb="Volunteers" />



      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Explor our Branch {capitalizedBranch}</h2>
            <p className="section-title__tagline">Dedicated individuals who help us achieve our mission</p>
          </div>
          <div className="p-4" style={{padding:'1.5rem 0', margin:'0 0 2rem 0'}}>
            <p className="mb-3" style={{textAlign:'justify', margin:'0', padding:'0', fontWeight:'normal'}}>{branchSummary || 'No summary available for this branch yet.'}</p>
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
  const volunteers = await getVolunteersByBranch(branch);
  const branchSummary = await getBranchSummary(branch);

  return {
    props: {
      volunteers: volunteers || [],
      branch: branch || 'general',
      branchSummary: branchSummary || '',
    },
  };
}

export default VolunteerPage;
