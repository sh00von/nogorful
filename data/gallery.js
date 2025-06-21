// data.js
export const events = [
  ...Array.from({ length: 19 }, (_, i) => ({
    imageSrc: `/gallery/winter/${i + 1}.JPG`,
    title: 'Winter Event',
    category: 'Winter Event'
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    imageSrc: `/gallery/winter/${i + 1}.JPG`,
    title: 'Eid Event',
    category: 'Eid Event'
  })),
  ...Array.from({ length: 12 }, (_, i) => ({
    imageSrc: `/gallery/social/${i + 1}.jpg`,
    title: 'Social Event',
    category: 'Social Responsibilty'
  }))
];

export const getEventsByCategory = (category) =>
  events.filter(event => event.category.toLowerCase() === category.toLowerCase());
