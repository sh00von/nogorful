import { useRouter } from 'next/router';
import Project from '../../components/Volunteer';
import { getProjectsByName, getProjectSummary } from '../../data/project';
import SEO from '../../components/SEO';
import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';
import { useEffect, useState } from 'react';

const ProjectPage = ({ projects, projectName, projectSummary }) => {
  const router = useRouter();
  const capitalizedProjectName = projectName.charAt(0).toUpperCase() + projectName.slice(1);
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#2980b9';
      ctx.fillRect(0, 0, 1200, 630);
      ctx.font = 'bold 64px Comic Sans MS, Comic Sans, cursive';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${capitalizedProjectName} Project`, 600, 315);
      setBannerUrl(canvas.toDataURL('image/png'));
    }
  }, [capitalizedProjectName]);

  return (
    <>
      <SEO
        title={`Projects - ${capitalizedProjectName} - Nogorful`}
        description={`Learn about our ${capitalizedProjectName} projects. Discover their goals, progress, and how you can get involved.`}
        keywords={`projects, Nogorful, ${capitalizedProjectName}, community support, project work`}
        image={bannerUrl || '/assets/images/default-projects-image.png'}
      />
      <PageHeader title={capitalizedProjectName} breadcrumb="Projects" />
      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Discover Our {capitalizedProjectName} Projects</h2>
            <p className="section-title__tagline">Learn about our ongoing projects and how they make a difference</p>
          </div>
          <div className="p-4" style={{padding:'1.5rem 0', margin:'0 0 2rem 0'}}>
            <p className="mb-3" style={{textAlign:'justify', margin:'0', padding:'0', fontWeight:'normal'}}>{projectSummary || 'No summary available for this project yet.'}</p>
          </div>
          <div className="row">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <Project
                  key={index}
                  imageSrc={project.imageSrc}
                  name={project.name}
                  title={project.title}
                  description={project.description}
                  socialLinks={project.socialLinks}
                />
              ))
            ) : (
              <p>No projects found for this project name.</p>
            )}
          </div>
        </div>
      </section>
      <JoinUs />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { project } = params;
  const validProjectName = project ? project.toLowerCase() : 'general';
  const projects = getProjectsByName(validProjectName);
  const projectSummary = await getProjectSummary(validProjectName);
  return {
    props: {
      projects: projects || [],
      projectName: validProjectName,
      projectSummary: projectSummary || '',
    },
  };
}

export default ProjectPage;
