import Head from 'next/head';
import Slider from '../components/Slider';
import IconCards from '../components/IconCards';
import Info from '../components/Info';
import Intro from '../components/Intro';
import JoinUs from '../components/JoinUs';
import News from '../components/News';
import CountersOne from '../components/CountersOne';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Organization Name | Home</title>
        <meta name="description" content="Welcome to Your Organization Name. Discover our mission, initiatives, and how you can get involved." />
        <meta name="keywords" content="organization, mission, initiatives, community involvement" />
        <meta property="og:title" content="Your Organization Name | Home" />
        <meta property="og:description" content="Welcome to Your Organization Name. Discover our mission, initiatives, and how you can get involved." />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Your Organization Name",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Main Street",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "Country"
              }
            }),
          }}
        />
      </Head>

      <div className="page-wrapper">
        <Slider />
        <Intro />
        <IconCards />
        <CountersOne />
        <News />
        <JoinUs />
        <Info />
      </div>
    </>
  );
}
