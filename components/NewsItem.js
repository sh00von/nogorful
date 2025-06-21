// components/NewsItem.js
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsItem = ({ news, delay = 0 }) => {
  return (
    <div
      className="col-xl-4 col-lg-4 wow fadeInUp"
      data-wow-delay={`${delay}ms`}
    >
      <div className="news-two__single">
        <div className="news-two__img-box">
          <div className="news-two__img">
            <Image
              src={news.image_url}
              alt={news.title}
              layout="responsive"
              width={600}
              height={400}
            />
            <Link href={`/blog/${news.id}`}>
              <i className="fa fa-plus"></i>
            </Link>
          </div>
          <div className="news-two__date">
            <p>{new Date(news.published_date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="news-two__content">
          <h3 className="news-two__title">
            <Link href={`/news/${news.id}`}>
              {news.title}
            </Link>
          </h3>
          <p className="news-two__text">
  {news.description.length > 100
    ? `${news.description.slice(0, 100)}…`
    : news.description}
</p>

        </div>
      </div>
    </div>
  )
}

export default NewsItem
