import Head from 'next/head';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="/assets/vendors/halpes-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/halpes.css" />
        <link rel="stylesheet" href="/assets/css/halpes-responsive.css" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      <Script src="/assets/vendors/jquery/jquery-3.5.1.min.js" />
      <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/assets/vendors/jarallax/jarallax.min.js" />
      <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" />
      <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" />
      <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" />
      <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" />
      <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" />
      <Script src="/assets/vendors/nouislider/nouislider.min.js" />
      <Script src="/assets/vendors/odometer/odometer.min.js" />
      <Script src="/assets/vendors/swiper/swiper.min.js" />
      <Script src="/assets/vendors/tiny-slider/tiny-slider.min.js" />
      <Script src="/assets/vendors/wnumb/wNumb.min.js" />
      <Script src="/assets/vendors/wow/wow.js" />
      <Script src="/assets/vendors/countdown/countdown.min.js" />
      <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" />
      {/* template js */}
      <Script src="/assets/js/halpes.js" />
    </>
  );
}

export default MyApp;
