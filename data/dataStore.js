// src/dataStore.js

// Join Us Data
export const joinUsData = {
    title: "Join us for <br> a better life and future.",
    bigText: "Become a Volunteer",
    buttonText: "Learn More",
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
        text: "We provide educational instruction from nursery through grade 10 during every holiday.",
        icon: "icon-cheque"
    },
    {
        image: "/assets/images/resources/four-icon-img-2.jpg",
        title: "We Provide Food",
        text: "We provide nutritious meals to underprivileged children.",
        icon: "icon-water"
    },
    {
        image: "/assets/images/resources/four-icon-img-3.jpg",
        title: "We Provide Cloth",
        text: "We provide clothing to those in need.",
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
        backgroundImage: 'assets/images/backgrounds/join-one-bg.jpg'
    },
    threeBoxes: [
        {
            title: "Holiday School",
            description: "Nogorful is helping 700 children with education and other essentials at 8 holiday schools across Bangladesh.",
            iconClass: "fa fa-school",
            backgroundImage: 'assets/images/resources/three-boxes-img-1.jpg'
        },
        {
            title: "OCOD",
            description: "Nogorful’s One Child One Donor project supports underprivileged children’s education with financial aid.",
            iconClass: "icon-water",
            backgroundImage: 'assets/images/resources/three-boxes-img-1.jpg'
        },
        {
            title: "Health Camp",
            description: "Free medical education for children, supervised by health services and provided by medical students and doctors.",
            iconClass: "icon-health-check",
            backgroundImage: 'assets/images/resources/three-boxes-img-1.jpg'
        }
    ]
};

// data/datastore.js
export const introData = {
    leftSection: {
        image: 'assets/images/resources/introduction-img-1.jpg',
        text: 'Nogorful educates and supports underprivileged children to end street child poverty.'
    },
    rightSection: {
        tagline: 'Our Introductions',
        title: 'Dreams for Street Children',
        description: 'With the conviction of building Nogorful by eliminating the underprivileged and street children',
        items: [
            {
                iconClass: 'icon-college-graduation',
                heading: 'Children’s Education',
                content: 'Our volunteers at Holiday School offer free weekly lessons to the children.'
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
export const newsData = [
    {
      id: 1,
      date: '20 Jan, 2021',
      image: '/assets/images/blog/news-two-img-1.jpg',
      title: 'Donation is Hope for Poor Childrens in',
      content: 'There are many variations of but the majority have simply free text available not suffered.',
      comments: 2,
      author: 'Admin',
      link: 'news-details.html'
    },
    {
      id: 2,
      date: '20 Jan, 2021',
      image: '/assets/images/blog/news-two-img-2.jpg',
      title: 'How Malnutrition Affect Children?',
      content: 'There are many variations of but the majority have simply free text available not suffered.',
      comments: 2,
      author: 'Admin',
      link: 'news-details.html'
    },
    {
      id: 3,
      date: '20 Jan, 2021',
      image: '/assets/images/blog/news-two-img-3.jpg',
      title: 'Capitalize on low hanging to identify',
      content: 'There are many variations of but the majority have simply free text available not suffered.',
      comments: 2,
      author: 'Admin',
      link: 'news-details.html'
    }
  ];
  
export const footerData = {
    about: {
      text: 'Nogorful educates and supports underprivileged children, aiming to make them self-sufficient and end street children.',
      donateLink: '#',
      donateText: 'Donate'
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
    logoSrc: '/assets/images/resources/logo-1.png',
    welcomeMessage: 'Dreams for Street Children',
    email: 'nogorful@gmail.com',
    socialLinks: [
      { href: '#', iconClass: 'fab fa-twitter' },
      { href: '#', iconClass: 'fab fa-facebook-square' },
      { href: '#', iconClass: 'fab fa-dribbble' },
      { href: '#', iconClass: 'fab fa-instagram' },
    ],
    menuItems: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Gallery',
        href: '#',
        dropdown: [
          { title: 'Gallery One', href: '/gallery/one' },
          { title: 'Gallery Two', href: '/gallery/two' },
          { title: 'Gallery Three', href: '/gallery/three' },
        ],
      },
      {
        title: 'Volunteers',
        href: '#',
        dropdown: [
          { title: 'Branch One', href: '/volunteers/branch-one' },
          { title: 'Branch Two', href: '/volunteers/branch-two' },
          { title: 'Branch Three', href: '/volunteers/branch-three' },
          { title: 'Branch Four', href: '/volunteers/branch-four' },
        ],
      },
      { title: 'Contact', href: '/contact' },
    ],
    contactNumber: {
      display: '92 666 888 0000',
      href: 'tel:92 666 888 0000',
    },
    donateButton: {
      href: '/donate',
      text: 'Donate',
      iconClass: 'fa fa-heart',
    },
  };
  