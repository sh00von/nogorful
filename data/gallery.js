// data.js
export const events = [
  { imageSrc: '/assets/images/gallery/gallery-page-img-1.jpg', title: 'Child Education', category: 'general' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-2.jpg', title: 'Child Education', category: 'Charity' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-3.jpg', title: 'Child Education', category: 'Charity' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-4.jpg', title: 'Child Education', category: 'general' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-5.jpg', title: 'Child Education', category: 'Charity' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-6.jpg', title: 'Child Education', category: 'general' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-7.jpg', title: 'Child Education', category: 'Charity' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-8.jpg', title: 'Child Education', category: 'Charity' },
  { imageSrc: '/assets/images/gallery/gallery-page-img-9.jpg', title: 'Child Education', category: 'Charity' },
];

export const getEventsByCategory = (category) => {
  return events.filter(event => event.category.toLowerCase() === category.toLowerCase());
};
