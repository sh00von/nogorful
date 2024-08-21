import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const slides = [
  {
    image: '/assets/images/nf/bg1.jpg',
    content: {
      text: 'Help is Our Goal',
      heading: 'Building a city of flowers.',
      buttonText: 'Join Us',
      buttonLink: '#'
    }
  }
];

const MainSlider = () => {
  return (
    <section className="main-slider main-slider-two">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{
          el: '#main-slider-pagination',
          type: 'bullets',
          clickable: true,
        }}
        navigation={{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="image-layer-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="main-slider__content">
                    <p>{slide.content.text}</p>
                    <h2 dangerouslySetInnerHTML={{ __html: slide.content.heading }}></h2>
                    <a href={slide.content.buttonLink} className="thm-btn">
                      <i className="fas fa-arrow-circle-right"></i>{slide.content.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* If we need pagination */}
0
      </Swiper>
    </section>
  );
};

export default MainSlider;
