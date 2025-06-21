// data/volunteer.js

const volunteers = [
  {
    imageSrc: '/sholoshohor/naim.png',
    name: 'Md.Naimul Hasan',
    title: 'Chief Coordinator (2024-25)',
    description: 'Chief Coordinator of Sholoshor branch (2024-25).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/sholoshohor/rijowan.png',
    name: 'Al Rijowan Ahmed Chowdhury',
    title: 'Chief Coordinator (2023-24)',
    description: 'Chief Coordinator of Sholoshor branch (2023-24).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/sholoshohor/taher.png',
    name: 'Abu Taher',
    title: 'Chief Coordinator (2022-23)',
    description: 'Chief Coordinator of Sholoshor branch (2022-23).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/sholoshohor/nipa.png',
    name: 'Shamima Hossain Nipa',
    title: 'Chief Coordinator (2021-22)',
    description: 'Chief Coordinator of Sholoshor branch (2021-22).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/sholoshohor/arshad.png',
    name: 'Md.  Arshadul Alam',
    title: 'Chief Coordinator (2020-21)',
    description: 'Chief Coordinator of Sholoshor branch (2020-21).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/sholoshohor/noman.png',
    name: 'Abdullah Al Noman',
    title: 'Chief Coordinator (2019-20)',
    description: 'Chief Coordinator of Sholoshor branch (2019-20).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/assets/images/team/team-one-img-2.jpg',
    name: 'Shawkat Rana',
    title: 'Chief Coordinator (2018-19)',
    description: 'Chief Coordinator of Sholoshor branch (2018-19).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Md. Zahedul Islam',
    title: 'Chief Coordinator (2016-18)',
    description: 'Chief Coordinator of Sholoshor branch (2016-18).',
    socialLinks: { facebook: '#' },
    branch: 'sholoshohor'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Tanzina Akter',
    title: 'Chief Coordinator (2024-25)',
    description: 'Chief Coordinator of Agrabad branch (2024-25).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Amit Bhattacharya',
    title: 'Chief Coordinator (2023-24)',
    description: 'Chief Coordinator of Agrabad branch (2023-24).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Jannatul Nayeem',
    title: 'Chief Coordinator (2022-23)',
    description: 'Chief Coordinator of Agrabad branch (2022-23).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Fahima Akter',
    title: 'Chief Coordinator (2021-22)',
    description: 'Chief Coordinator of Agrabad branch (2021-22).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Nusrat Tonni',
    title: 'Chief Coordinator (2020-21)',
    description: 'Chief Coordinator of Agrabad branch (2020-21).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Mohammad Saiful Islam and Raihan Shahriar',
    title: 'Chief Coordinator (2019-20)',
    description: 'Chief Coordinator of Agrabad branch (2019-20).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Afsana Mimi',
    title: 'Chief Coordinator (2018-19)',
    description: 'Chief Coordinator of Agrabad branch (2018-19).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Shawkat Rana',
    title: 'Chief Coordinator (2017-18)',
    description: 'Chief Coordinator of Agrabad branch (2017-18).',
    socialLinks: { facebook: '#' },
    branch: 'agrabad'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Ayesha Akter',
    title: 'Chief Coordinator (2024-25)',
    description: 'Chief Coordinator of CRB branch (2024-25).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Shamibul Hassan Shamim',
    title: 'Chief Coordinator (2023-24)',
    description: 'Chief Coordinator of CRB branch (2023-24).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Tanzina Jahan Sonia',
    title: 'Chief Coordinator (2022-23)',
    description: 'Chief Coordinator of CRB branch (2022-23).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Shamsul Alam Rasel',
    title: 'Chief Coordinator (2021-22)',
    description: 'Chief Coordinator of CRB branch (2021-22).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Rahul Chakraborty',
    title: 'Chief Coordinator (2020-21)',
    description: 'Chief Coordinator of CRB branch (2020-21).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Rasheda Akter Emu',
    title: 'Chief Coordinator (2019-20)',
    description: 'Chief Coordinator of CRB branch (2019-20).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Fazlul Hakim Nishat',
    title: 'Chief Coordinator (2018-19)',
    description: 'Chief Coordinator of CRB branch (2018-19).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Taslima Sultana Mumu',
    title: 'Chief Coordinator (2017-18)',
    description: 'Chief Coordinator of CRB branch (2017-18).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Monirul Islam',
    title: 'Chief Coordinator (2016-17)',
    description: 'Chief Coordinator of CRB branch (2016-17).',
    socialLinks: { facebook: '#' },
    branch: 'crb'
  },
  // Dchill branch chiefs
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Anamika Acherjee',
    title: 'Chief Coordinator (2024-25)',
    description: 'Chief Coordinator of Dchill branch (2024-25).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Sanjida Tabassum',
    title: 'Chief Coordinator (2023-24)',
    description: 'Chief Coordinator of Dchill branch (2023-24).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Showstika Mallick',
    title: 'Chief Coordinator (2022-23)',
    description: 'Chief Coordinator of Dchill branch (2022-23).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Akash Das',
    title: 'Chief Coordinator (2021-22)',
    description: 'Chief Coordinator of Dchill branch (2021-22).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Sagor',
    title: 'Chief Coordinator (2020-21)',
    description: 'Chief Coordinator of Dchill branch (2020-21).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Riaz Uddin Etu',
    title: 'Chief Coordinator (2019-20)',
    description: 'Chief Coordinator of Dchill branch (2019-20).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Sirajum Munira',
    title: 'Chief Coordinator (2018-19)',
    description: 'Chief Coordinator of Dchill branch (2018-19).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Jayanta Barua',
    title: 'Chief Coordinator (2017-18)',
    description: 'Chief Coordinator of Dchill branch (2017-18).',
    socialLinks: { facebook: '#' },
    branch: 'dc hill'
  },
  // Cantonment branch chiefs
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Shahriyar Hossain',
    title: 'Chief Coordinator (2024-25)',
    description: 'Chief Coordinator of Cantonment branch (2024-25).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Afroza Tasnim',
    title: 'Chief Coordinator (2023-24)',
    description: 'Chief Coordinator of Cantonment branch (2023-24).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-6.jpg',
    name: 'Saharia Nizhum',
    title: 'Chief Coordinator (2022-23)',
    description: 'Chief Coordinator of Cantonment branch (2022-23).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-5.jpg',
    name: 'Safayet Hossain Riyad',
    title: 'Chief Coordinator (2021-22)',
    description: 'Chief Coordinator of Cantonment branch (2021-22).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-4.jpg',
    name: 'Md. Salauddin',
    title: 'Chief Coordinator (2020-21)',
    description: 'Chief Coordinator of Cantonment branch (2020-21).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-3.jpg',
    name: 'Shahriyar Sunny',
    title: 'Chief Coordinator (2019-20)',
    description: 'Chief Coordinator of Cantonment branch (2019-20).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-2.jpg',
    name: 'Arafat Nil',
    title: 'Chief Coordinator (2018-19)',
    description: 'Chief Coordinator of Cantonment branch (2018-19).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
  {
    imageSrc: '/assets/images/team/team-page-img-1.jpg',
    name: 'Mridul Das',
    title: 'Chief Coordinator (2017-18)',
    description: 'Chief Coordinator of Cantonment branch (2017-18).',
    socialLinks: { facebook: '#' },
    branch: 'cantonment'
  },
];

export default volunteers;

export const getVolunteersByBranch = (branch) => {
  return volunteers.filter(volunteer => volunteer.branch.toLowerCase() === branch.toLowerCase());
};

// Add this function to provide branch summary
export async function getBranchSummary(branch) {
  // You can replace this with real data fetching logic
  const summaries = {
      sholoshohor: `Nogorful Sholoshohor: A Beacon of Hope Since 2015
    
    Established in December 2015, the Sholashar branch holds the distinction of being the second branch in the Nogorful family. It began its noble journey with an initial group of around 40 children, planting a seed of hope and education in the community.
    
    Over the years, this seed has blossomed into a thriving educational hub. Today, the branch boasts a dedicated team of 73 active members who tirelessly support the development of 92 children. This remarkable growth is a testament to the branch's unwavering commitment and the profound trust it has earned within the community.
    
    The impact of this dedication is most evident in the transformative educational successes of its students. The branch proudly celebrates the achievement of two students who have successfully passed their SSC examinations, a critical milestone in their academic careers. A particularly inspiring story is that of Kamrunnahar Kajal, a former student who has come full circle. She is now a valued Nogorful member at the very branch that nurtured her and is pursuing her Honors degree, embodying the spirit of empowerment and giving back.
    
    The Sholoshohor branch continues its mission with passion, serving as a pillar of educational empowerment and a source of inspiration for the entire community.`,
    
      agrabad: `Nogorful Agrabad: Fostering Academic Excellence
    
    The Agrabad branch of Nogorful was founded in October 2016, extending the organization's reach and mission to a new community. With a close-knit team of 11 dedicated members, this branch provides crucial educational support and mentorship to 40 children, creating a nurturing and focused learning environment.
    
    The branch has achieved remarkable and consistent success in guiding its students through major academic hurdles. This journey of excellence includes two children passing the JSC examination in 2019, followed by another success in 2021. The momentum continued with students passing the SSC examination in both 2022 and 2024.
    
    Crowning these achievements, the branch celebrated a significant milestone when one of its students successfully passed the HSC examination in 2025, opening doors to higher education and brighter futures. The Agrabad branch stands as a powerful example of how sustained support and quality guidance can help young minds overcome challenges and achieve their academic dreams.`,
    
      crb: `Nogorful CRB: The Pioneering Branch at Sirishtala
    
    Nestled in the scenic surroundings of Sirishtala, the CRB branch holds a special place in Nogorful's history as its very first branch. It is here that the journey of Nogorful's holiday school began, laying the foundation for all the good work to come. Currently, this pioneering branch is a vibrant community of over 38 members and approximately 60 children. Its legacy is not only in its age but also in its enduring commitment to the children it serves in the heart of CRB.`,
    
      'dc hill': `Nogorful DC Hill: Small Team, Big Impact
    
    The DC Hill branch of Nogorful Holiday School operates as a dynamic and impactful unit within the community. With a dedicated team of 15 members, the branch provides essential educational guidance and support to 40 children, creating a focused and encouraging atmosphere for learning.
    
    The success of their approach is powerfully demonstrated by a significant student achievement: one child from the branch has successfully passed the Higher Secondary Certificate (HSC) examination. This accomplishment is a major step towards higher education and a brighter future, showcasing the profound impact that dedicated mentorship can have on a child's life.
    
    The DC Hill branch is a testament to the idea that even a relatively small team can achieve great things, nurturing young potential and paving the way for academic success.`,
    cantonment: `Nogorful Cantonment: Empowering Young Minds Since 2017

The Nogorful Cantonment Branch began its journey at Notunpara Railway Station in 2017, reaching out to 45 underprivileged children with the promise of education and hope.

Today, the branch has grown into a vibrant learning community, where 30 dedicated volunteers regularly teach and mentor 110 children. This remarkable growth is a testament to the branch's commitment to making a difference in the lives of children who need it most.

The branch has a proud history of strong leadership, with a succession of passionate chiefs guiding its progress each year.

Academic achievements at the Cantonment Branch are truly inspiring. So far, about 6 students have participated in the SSC examination and have passed with distinction. Notably, in the 2022 SSC examination, Md. Rakib achieved a perfect GPA of 5.00 from the Science Department. In 2024, Lamia Akhter (GPA 3.06), Fahima Akhter (GPA 3.75), and Md. Sajib (GPA 4.28) all passed the SSC examination, while Md. Rakib also excelled in the HSC examination with a GPA of 4.92.

The branch also celebrates scholarship winners: Md. Sajib received a general scholarship in the 2024 SSC examination, and Md. Imam Hossain was awarded a Talent Pool scholarship in the 2019 PSC examination.

Nogorful Cantonment Branch continues to inspire, empower, and transform the lives of children through education and dedicated mentorship.`
  };
  return summaries[branch.toLowerCase()] || 'This branch is dedicated to serving its local community with various initiatives.';
}
