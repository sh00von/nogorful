import { useRouter } from 'next/router';
import Project from '../../components/Volunteer'; // Update this path as necessary
import { getProjectsByName } from '../../data/project'; // Update this path as necessary

import SEO from '../../components/SEO'; // Ensure you have this component
import JoinUs from '../../components/JoinUs';
import PageHeader from '../../components/PageHeader';

const ProjectPage = ({ projects, projectName }) => {
  const router = useRouter();

  // Ensure projectName is properly capitalized
  const capitalizedProjectName = projectName.charAt(0).toUpperCase() + projectName.slice(1);

  return (
    <>
      <SEO
        title={`Projects - ${capitalizedProjectName} - Nogorful`}
        description={`Learn about our ${capitalizedProjectName} projects. Discover their goals, progress, and how you can get involved.`}
        keywords={`projects, Nogorful, ${capitalizedProjectName}, community support, project work`}
        image="/assets/images/default-projects-image.png"
      />

      <PageHeader title="Projects" breadcrumb="Projects" />

      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Discover Our {capitalizedProjectName} Projects</h2>
            <p className="section-title__tagline">Learn about our ongoing projects and how they make a difference</p>
          </div>
          <div className="row">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <Project
                  key={index}
                  imageSrc={project.imageSrc}
                  name={project.name} // Assuming you use `name` in Project component
                  title={project.title} // Assuming you use `title` in Project component
                  description={project.description}
                  socialLinks={project.socialLinks} // If not used, remove it
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

  // Ensure project parameter is valid
  const validProjectName = project ? project.toLowerCase() : 'general';

  // Fetch projects based on project name
  let projects = [];
  try {
    projects = getProjectsByName(validProjectName); // No need for 'await' as it’s not a promise-based function
  } catch (error) {
    console.error('Error fetching projects:', error);
  }

  return {
    props: {
      projects: projects || [],
      projectName: validProjectName,
    },
  };
}

export default ProjectPage;
