// components/News.js
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import NewsItem from './NewsItem'

const News = () => {
  const [posts, setPosts]   = useState([])
  const [error, setError]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('contents')
        .select('id, title, description, image_url, published_date')
        .order('published_date', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setPosts(data)
      }
      setLoading(false)
    }
    loadPosts()
  }, [])

  if (loading) return <p className="text-center py-8">Loading updates…</p>
  if (error)   return <p className="text-center py-8 text-red-600">Error: {error}</p>

  return (
    <section className="news-two">
      <div
        className="news-two-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
        style={{ backgroundImage: 'url(/assets/images/nf/cc.jpg)' }}
      />
      <div className="news-two-bg-overlay" />
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Get Daily Updates</span>
          <h2 className="section-title__title">
            Transforming lives<br/>Overcoming obstacles together.
          </h2>
        </div>
        <div className="row">
          {posts.map((post, idx) => (
            <NewsItem
              key={post.id}
              news={post}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
