const projects = [
  // OCOD Project Chiefs (latest on top)
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Sumit Dutta',
    title: 'OCOD Project Chief (2023-2025)',
    description: 'Chief of the Nogorful OCOD project from 2023 to 2025.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Nishan Das Gupta',
    title: 'OCOD Project Chief (2022-2023)',
    description: 'Chief of the Nogorful OCOD project from 2022 to 2023.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Mashrequl Azam Shuvo',
    title: 'OCOD Project Chief (2020-2022)',
    description: 'Chief of the Nogorful OCOD project from 2020 to 2022.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Fazlul Hakim Nishat',
    title: 'OCOD Project Chief (2018-2020)',
    description: 'Chief of the Nogorful OCOD project from 2018 to 2020.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Masudur Rahman',
    title: 'OCOD Project Chief (2016-2018)',
    description: 'Chief of the Nogorful OCOD project from 2016 to 2018.',
    socialLinks: { facebook: '#' },
    project: 'OCOD'
  },
  // Add other project entries
];

export default projects;

export const getProjectsByName = (projectName) => {
  return projects.filter(project => project.project.toLowerCase() === projectName.toLowerCase());
};

export async function getProjectSummary(projectName) {
  const summaries = {
    ocod: `The dream of Nogorful: One Child One Donor (OCOD) Project\n\nUnderprivileged children scattered in every corner of the city are an integral part of this society. Nogorful is an organization that is working with the conviction of lighting up the society of new possibilities in the lives of these neglected children. Their dream is that every child in the society should not just be called a \"street child\" by its name, but should also have a beautiful identity - a \"Nogorful\".\n\nOne of Nogorful's special initiatives is the One Child One Donor Project (OCOD). The main objective of this project is very clear and humane: for each underprivileged child, there will be one donor, who will bear all the expenses related to that child's education. In this continuity, children get the opportunity to grow up with constant love, right guidance and the power of education.\n\nApproximately 13 children have been included under the Nogorful OCOD project so far. Priya Akter is a unique example of this project.  Priya participated in the SSC examination in 2022 as a student of Nogorful holiday school, Agrabad branch and proudly achieved a GPA of 4.94. Behind her success is not only her own indomitable hard work, but also the contribution of the Nogorful OCOD project and the relentless support of donors.\n\nMay this journey of Nogorful remind us all how much a little love, a little compassion and the right support can change a child's life. May each of their initiatives bloom like a flower, which makes this society more beautiful and humane.`,
    'school team': `❝Nogorful School Team❞ -\n\nThis project is a very important part of Nogorful. A director of this team usually works with his four co-ordinators. The team visits different branches of Nogorful Holiday School at different times and updates the children. At the beginning of the year, they enroll and supervise the children in the school. They supervise the admission of children who are taught in the Nogorful holiday school. In addition, the school team visits the schools where the children of Nogorful study and takes information of the overall progress of the children's studies. The team goes to the children's homes to talk directly to the parents of the children to find out whether they are studying properly, and takes action accordingly after knowing what their parents' future plans are for their children. Before the school exams in the middle and end of the year, the team observes the preparation of the children for the exams by taking final model tests in each branch of the holiday school and arranges rewards for those who get good marks in the exams. The Nogorful School Team is always trying to prevent school dropouts.`,
    'self-reliant': `Nogorful Self-Reliant (self-reliant) project:-\n\nNogorful works to improve the quality of life of underprivileged children, most of whose families do not have a earning person or their education is discontinued due to low family income. In addition, these children have to join child labor due to family pressure. Therefore, Nogorful has taken the initiative to stand by these children and help them continue their education. Under the Nogorful Self-Reliant Project, a commitment is taken from the children's families to continue the child's education by creating earning opportunities for the families of talented children. On February 14, 2018, the first activity of the Nogorful Self-Reliant Project was started by distributing sewing machines, vans and rickshaws to 3 families separately for 1 lakh taka. In continuation of this, Nogorful has taken the responsibility of supporting 19 families so far. The well-wishers of Nogorful have supported our activity by donating to this project. As a result of this great initiative, child labor is not only being stopped, but also the education of the children is being continued.`,
    'it team': `IT TEAM: Project summary for IT TEAM.`,
    // Add more project summaries as needed
  };
  return summaries[projectName.toLowerCase()] || 'This project is dedicated to serving its goals with various initiatives.';
}

// Add SCHOOL TEAM chiefs (latest on top)
projects.unshift(
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Amit Bhattacharjee',
    title: 'School Team Chief (2024-25)',
    description: 'Chief of the Nogorful School Team for 2024-25.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Nusrat tonni',
    title: 'School Team Chief (2023-24)',
    description: 'Chief of the Nogorful School Team for 2023-24.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Md Arshadul Alam',
    title: 'School Team Chief (2022-23)',
    description: 'Chief of the Nogorful School Team for 2022-23.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Safayeth Hossain Riyad',
    title: 'School Team Chief (2021-22)',
    description: 'Chief of the Nogorful School Team for 2021-22.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'MG Rahman',
    title: 'School Team Chief (2020-21)',
    description: 'Chief of the Nogorful School Team for 2020-21.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Masudur Rahman',
    title: 'School Team Chief (2019-20)',
    description: 'Chief of the Nogorful School Team for 2019-20.',
    socialLinks: { facebook: '#' },
    project: 'SCHOOL TEAM'
  }
);

// Add Self-Reliant project chiefs (latest on top)
projects.unshift(
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Al Rijowan Ahmed Chowdhury',
    title: 'Self-Reliant Project Chief (2024-25)',
    description: 'Chief of the Nogorful Self-Reliant Project for 2024-25.',
    socialLinks: { facebook: '#' },
    project: 'Self-Reliant'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Abu Taher',
    title: 'Self-Reliant Project Chief (2023-24)',
    description: 'Chief of the Nogorful Self-Reliant Project for 2023-24.',
    socialLinks: { facebook: '#' },
    project: 'Self-Reliant'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'MG Rahman',
    title: 'Self-Reliant Project Chief (2019-2023)',
    description: 'Chief of the Nogorful Self-Reliant Project for 2019-2023.',
    socialLinks: { facebook: '#' },
    project: 'Self-Reliant'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'A N M Rashedul Haque Nishan',
    title: 'Self-Reliant Project Chief (2018-19)',
    description: 'Chief of the Nogorful Self-Reliant Project for 2018-19.',
    socialLinks: { facebook: '#' },
    project: 'Self-Reliant'
  }
);

