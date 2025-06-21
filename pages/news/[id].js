// pages/news/[id].js
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'

export default function NewsDetails({ post, recent }) {
  const router = useRouter()
  // this guards against fallback pages if you switch to getStaticPaths later
  if (router.isFallback) return <p className="text-center py-8">Loading…</p>

  return (
    <>
      <Head>
        <title>{post.title} — News</title>
        <meta name="description" content={post.description.slice(0, 150)} />
      </Head>

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/page-header-bg-1-1.jpg')",
          }}
        />
        <div className="container">
          <h2>News Details</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="color-thm-gray">/</li>
            <li>
              <span>News Details</span>
            </li>
          </ul>
        </div>
      </section>

      {/* News Details */}
      <section className="news-details">
        <div className="container">
          <div className="row">
            {/* Left: full post */}
            <div className="col-xl-8 col-lg-7">
              <div className="news-details__left">
                <div className="news-details__img">
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="news-details__content">
                  <ul className="list-unstyled news-details__meta">
                    <li>
                      <i className="far fa-calendar-alt"></i>{' '}
                      {new Date(post.published_date).toLocaleDateString()}
                    </li>
                  </ul>
                  <h3 className="news-details__title">{post.title}</h3>
                  <p className="news-details__text-one">{post.description}</p>
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                {/* Search */}
                <div className="sidebar__single sidebar__search">
                  <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <i className="icon-magnifying-glass"></i>
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Recent Posts</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    {recent.map((item) => (
                      <li key={item.id}>
                        <div className="sidebar__post-image">
                          <Link href={`/news/${item.id}`}>
                            
                              <Image
                                src={item.image_url}
                                alt={item.title}
                                width={100}
                                height={75}
                                objectFit="cover"
                              />
                            
                          </Link>
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            <Link href={`/news/${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  // fetch the single post
  const { data: post, error } = await supabase
    .from('contents')
    .select('id, title, description, image_url, published_date')
    .eq('id', id)
    .single()

  if (error || !post) {
    return { notFound: true }
  }

  // fetch 5 most recent for sidebar
  const { data: recent } = await supabase
    .from('contents')
    .select('id, title, image_url')
    .order('published_date', { ascending: false })
    .limit(5)

  return {
    props: {
      post,
      recent: recent || [],
    },
  }
}
