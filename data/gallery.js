// data.js
export const events = Array.from({ length: 19 }, (_, i) => ({
  imageSrc: `/gallery/winter/${i + 1}.JPG`,
  title: 'Winter Event 2023',
  category: 'Winter Event'
}));

export const getEventsByCategory = (category) =>
  events.filter(event => event.category.toLowerCase() === category.toLowerCase());
