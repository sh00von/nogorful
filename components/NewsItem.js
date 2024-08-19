// components/NewsItem.js
import React from 'react';
import Image from 'next/image';

const NewsItem = ({ news }) => {
  return (
    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${news.id * 100}ms`}>
      {/* News Two Single */}
      <div className="news-two__single">
        <div className="news-two__img-box">
          <div className="news-two__img">
            {/* Use next/image for optimized image */}
            <Image
              src={news.image} // Path to your image
              alt={news.title} // Description of the image
              layout="responsive" // Adjust layout based on your needs
              width={600} // Provide a width (adjust as needed)
              height={400} // Provide a height (adjust as needed)
            />
            <a href={news.link}>
              <i className="fa fa-plus"></i>
            </a>
          </div>
          <div className="news-two__date">
            <p>{news.date}</p>
          </div>
        </div>
        <div className="news-two__content">
          <ul className="list-unstyled news-two__meta">
            <li><a href="#"><i className="far fa-user-circle"></i> {news.author}</a></li>
            <li><span>/</span></li>
            <li><a href="#"><i className="far fa-comments"></i> {news.comments} Comments</a></li>
          </ul>
          <h3>
            <a href={news.link}>{news.title}</a>
          </h3>
          <p className="news-two__text">{news.content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
