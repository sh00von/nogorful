// components/Intro.js
import React from 'react';
import { introData } from '../data/dataStore';

const Intro = () => {
    const { leftSection, rightSection } = introData;

    return (
        <>
            <section className="introduction">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="introduction__left">
                                <div className="introduction__img">
                                    <img src={leftSection.image} alt="" />
                                </div>
                                <div className="introduction__content">
                                    <p className="introduction__text">{leftSection.text}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="introduction__right">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">{rightSection.tagline}</span>
                                    <h2 className="section-title__title">{rightSection.title}</h2>
                                </div>
                                <p className="introduction__right-text">{rightSection.description}</p>
                                <ul className="introduction__icon-wrap list-unstyled">
                                    {rightSection.items.map((item, index) => (
                                        <li key={index} className="introduction__icon-wrap-single">
                                            <div className="introduction__icon-box">
                                                <span className={item.iconClass}></span>
                                            </div>
                                            <div className="introduction__content-box">
                                                <h2>{item.heading}</h2>
                                                <p>{item.content}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="introduction__btn thm-btn">
                                    <i className={rightSection.buttonIcon}></i>{rightSection.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;
