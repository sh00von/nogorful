import { useRouter } from 'next/router';
import Volunteer from '../../components/Volunteer';
import { getVolunteersByBranch, getBranchSummary } from '../../data/volunteer';
import SEO from '../../components/SEO';
import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';
import { useEffect, useState } from 'react';

const DynamicBanner = ({ text, bgColor = '#e67e22', textColor = '#fff', width = 1200, height = 630 }) => {
  // Generate a data URL for a banner image with text
  if (typeof window === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  ctx.font = 'bold 64px Comic Sans MS, Comic Sans, cursive';
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  return canvas.toDataURL('image/png');
};

const VolunteerPage = ({ volunteers, branch, branchSummary }) => {
  const router = useRouter();
  const capitalizedBranch = branch.charAt(0).toUpperCase() + branch.slice(1);
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#e67e22';
      ctx.fillRect(0, 0, 1200, 630);
      ctx.font = 'bold 64px Comic Sans MS, Comic Sans, cursive';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${capitalizedBranch} Branch`, 600, 315);
      setBannerUrl(canvas.toDataURL('image/png'));
    }
  }, [capitalizedBranch]);

  return (
    <>
      <SEO
        title={`${capitalizedBranch} Branch - Nogorful`}
        description={`Meet our dedicated volunteers from the ${capitalizedBranch} branch. Learn about their roles, contributions, and how they help us achieve our mission.`}
        keywords={`volunteers, Nogorful, ${capitalizedBranch}, community support, volunteer contributions`}
        image={bannerUrl || '/assets/images/default-volunteer-image.png'}
      />
      <PageHeader title={`${capitalizedBranch}`} breadcrumb="Holiday School" />
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
