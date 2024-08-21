const projects = [
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Janne',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'David',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    project: 'IT TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Sarah',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  // Add other project entries
];

export const getProjectsByName = (projectName) => {
  return projects.filter(project => project.project.toLowerCase() === projectName.toLowerCase());
};

export default projects;

