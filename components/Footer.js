// components/Footer.js
import React from 'react';
import { footerData } from '../data/dataStore'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className="site-footer" style={{padding:20}}>
      <div className="site-footer-bg"></div>
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            <div className="col-xl-6 col-lg-12 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">About</h3>
                <p className="footer-widget__text">{footerData.about.text}</p>
                <a href={footerData.about.donateLink} className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>{footerData.about.donateText}
                </a>
              </div>
    </div>
            <div className="col-xl-6 col-lg-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  {footerData.contact.map((item, index) => (
                    <li key={index}>
                      <div className="icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="text">
                        <p>
                          <span>{item.label}</span>
                          <a href={item.link}>{item.value}</a>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
