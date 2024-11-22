// src/dataStore.js

// Join Us Data
export const joinUsData = {
  title: "Join us for <br> a better life and future.",
  bigText: "Become a Volunteer",
  buttonText: "Join Us",
  buttonLink: "#"
};

// Counters Data
export const countersData = {
  totalStudents: 1000,
  totalProjects: 7,
  totalVolunteers: 400,
  branch: 7
};

// Gallery Data
export const galleryData = [
  {
    image: "/assets/images/gallery/gallery-1-1.jpg",
    title: "Child Education",
    description: "Charity"
  },
  {
    image: "/assets/images/gallery/gallery-1-2.jpg",
    title: "Child Education",
    description: "Charity"
  },
  {
    image: "/assets/images/gallery/gallery-1-3.jpg",
    title: "Child Education",
    description: "Charity"
  },
  {
    image: "/assets/images/gallery/gallery-1-4.jpg",
    title: "Child Education",
    description: "Charity"
  },
  {
    image: "/assets/images/gallery/gallery-1-5.jpg",
    title: "Child Education",
    description: "Charity"
  }
];

// Card Data
export const cardData = [
  {
    image: "/assets/images/resources/four-icon-img-1.jpg",
    title: "We Educate",
    text: "We provide educational support from nursery to grade 10 at our holiday schools every Friday.",
    icon: "icon-cheque"
  },
  {
    image: "/assets/images/resources/four-icon-img-2.jpg",
    title: "We Provide Food",
    text: "We provide snacks to the children after every classes and in every occasion arranged by Nogorful",
    icon: "icon-water"
  },
  {
    image: "/assets/images/resources/four-icon-img-3.jpg",
    title: "We Provide Cloth",
    text: "We provide clothes to 800-1000 children during Eid and winter, and to Hindu children during Durgapuja.",
    icon: "icon-charity"
  },
  {
    image: "/assets/images/resources/four-icon-img-4.jpg",
    title: "We Nourish",
    text: "We nourish through health camps conducted by doctors.",
    icon: "icon-heart"
  }
];
// data/datastore.js
export const infoData = {
  heroSection: {
    title: "Enhancing the lives of underprivileged and street children to become the 'Nogorful' (Flower of City).",
    buttonText: "Learn More",
    buttonIcon: "fas fa-arrow-circle-right",
    backgroundImage: 'assets/images/nf/ch2.jpg'
  },
  threeBoxes: [
    {
      title: "Holiday School",
      description: "Nogorful is helping 700 children with education and other essentials at 8 holiday schools across Bangladesh.",
      iconClass: "fa fa-school",
      backgroundImage: 'assets/images/nf/hs.jpg'
    },
    {
      title: "OCOD",
      description: "Nogorful’s One Child One Donor project supports underprivileged children’s education with financial aid.",
      iconClass: "icon-water",
      backgroundImage: 'assets/images/nf/aa.jpg'
    },
    {
      title: "Health Camp",
      description: "Free medical education for children, supervised by health services and provided by medical students and doctors.",
      iconClass: "icon-health-check",
      backgroundImage: 'assets/images/nf/bb.jpg'
    }
  ]
};

// data/datastore.js
export const introData = {
  leftSection: {
    image: 'assets/images/nf/ch.jpg',
    text: 'Nogorful provides education, supports underprivileged children and works for their betterment.'
  },
  rightSection: {
    tagline: 'Our Introductions',
    title: 'Dreams for Street Children',
    description: 'With the conviction of eliminating the identity of underprivileged or street children by building them as Nogorful (flowers of the city) in the society.',
    items: [
      {
        iconClass: 'icon-college-graduation',
        heading: 'Basic Education for the Children ',
        content: 'About 200 volunteers of 7 Holiday school branches offer free basic education to the children'
      },
      {
        iconClass: 'icon-coin',
        heading: 'Support Them',
        content: 'Your help transforms lives and fosters a brighter future for children.'
      }
    ],
    buttonText: 'Learn More',
    buttonIcon: 'fas fa-arrow-circle-right'
  }
};
// data/datastore.js
export const footerData = {
  about: {
    text: 'Nogorful educates and supports underprivileged children, aiming to make them self-sufficient and end street children.',
    donateLink: '#',
    donateText: 'Join Us'
  },
  exploreLinks: [
    { text: 'Donate', href: '#' },
    { text: 'Campaigns', href: '#' },
    { text: 'Fundraise', href: '#' },
    { text: 'Volunteers', href: '#' },
    { text: 'Sponsors', href: '#' },
    { text: 'Fundraising', href: '#' },
    { text: 'Contact', href: '#' },
    { text: 'Help', href: '#' },
    { text: 'Faqs', href: '#' }
  ],
  contact: [
    { icon: 'icon-chat', label: 'Call Anytime', value: '01904-446951', link: 'tel:01904-446951' },
    { icon: 'icon-message', label: 'Send Email', value: 'nogorful@gmail.com', link: 'mailto:nogorful@gmail.com' },
    { icon: 'icon-address', label: 'Visit Office', value: 'W/I/12 West Ferozshah colony, Chittagong, Bangladesh' }
  ],
  newsletter: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do.',
    placeholder: 'Email address',
    buttonText: 'Send'
  },
  logo: '/assets/images/resources/footer-logo.jpg',
  copyRight: '© Copyright 2024 by Nogorful .'
};
export const headerData = {
  logoSrc: '/assets/images/nf/logo.jpg',
  welcomeMessage: 'Dreams for Street Children',
  email: 'nogorful@gmail.com',
  socialLinks: [
    { href: '#', iconClass: 'fab fa-twitter' },
    { href: '#', iconClass: 'fab fa-facebook-square' },
    { href: '#', iconClass: 'fab fa-dribbble' },
    { href: '#', iconClass: 'fab fa-instagram' },
  ],
  menuItems: generateMenuItems(),
  contactNumber: {
    display: '92 666 888 0000',
    href: 'tel:926668880000',
  },
  donateButton: {
    href: '/contact',
    text: 'Join Us',
    iconClass: 'fa fa-heart',
  },
};
// Function to generate dynamic menu items
function generateMenuItems() {
  // Example data, replace with your actual data
  const categories = ['Eid Event', 'Winter Event', 'Others'];
  const projects = ['Holiday School','Self-Reliant Project','Culture Project','OCOD Project', 'SDR Project','School Team','Health and Nutrition Project'];
  const branches = ['Agrabad', 'SholoShohor', 'CRB', 'Cantonment', 'DC Hill', 'Patiya', 'Cumilla'];

  return [
    { title: 'Home', href: '/' },
    {
      title: 'Gallery',
      href: '#',
      dropdown: categories.map(cat => ({
        title: `${capitalize(cat)}`,
        href: `/gallery/${cat}`,
      })),
    },
    {
      title: 'Holiday School',
      href: '#',
      dropdown: branches.map(branch => ({
        title: `${capitalize(branch.replace('-', ' '))}`,
        href: `/holiday-school/${branch}`,
      })),
    },
    {
      title: 'Projects',
      href: '#',
      dropdown: projects.map(project => ({
        title: `${capitalize(project.replace('-', ' '))}`,
        href: `/project/${project}`,
      })),
    },
    { title: 'Contact', href: '/contact' },
  ];
}

// Helper function to capitalize first letter
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
