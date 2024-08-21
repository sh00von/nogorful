// components/News.js
import React from 'react';
import { newsData } from '../data/news'; // Adjust the path if necessary
import NewsItem from './NewsItem';

const News = () => {
  return (
    <section className="news-two">
      <div className="news-two-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
           style={{ backgroundImage: 'url(/assets/images/nf/cc.jpg)' }}>
      </div>
      <div className="news-two-bg-overlay"></div>
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Get Daily Updates</span>
          <h2 className="section-title__title">Transforming lives<br/>Overcoming obstacles together.
</h2>
        </div>
        <div className="row">
          {newsData.map(news => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
