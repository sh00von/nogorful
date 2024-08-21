// data/volunteer.js

const volunteers = [
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Janne',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'CRB'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'David',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'branch2'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Sarah',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'branch2'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Albert',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'branch2'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Hallen',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'branch3'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Pitter',
    title: 'Volunteer',
    description: 'There are many of lorem ipsum available but the have in some form.',
    socialLinks: { facebook: '#' },
    branch: 'branch3'
  },
];

export default volunteers;

export const getVolunteersByBranch = (branch) => {
  return volunteers.filter(volunteer => volunteer.branch.toLowerCase() === branch.toLowerCase());
};
