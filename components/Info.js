// components/Info.js
import React from 'react';
import { infoData } from '../data/dataStore';

const Info = () => {
    const { heroSection, threeBoxes } = infoData;

    return (
        <>
            <section className="join-one">
                <div
                    className="join-one-bg jarallax"
                    data-jarallax
                    data-speed="0.2"
                    data-imgPosition="50% 0%"
                    style={{ backgroundImage: `url(${heroSection.backgroundImage})` }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="join-one__inner">
                                <h2 className="join-one__title">{heroSection.title}</h2>
                                <a href="#" className="join-one__btn thm-btn">
                                    <i className={heroSection.buttonIcon}></i>{heroSection.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="three-boxes">
                <div className="container-box">
                    <div className="row">
                        {threeBoxes.map((box, index) => (
                            <div key={index} className="col-xl-4" >
                                <div  className={`three-boxes__single ${index === 1 ? 'three-boxes__single-item-two' : index === 2 ? 'three-boxes__single-item-three' : ''}`}>
                                    <div
                                        className="three-boxes__single-bg"
                                        style={{ backgroundImage: `url(${box.backgroundImage})` }}
                                    ></div>
                                    <div className="three-boxes__content">
                                        <div className="three-boxes__icon">
                                            <span className={box.iconClass}></span>
                                        </div>
                                        <div className="three-boxes__text-box">
                                            <h2>{box.title}</h2>
                                            <p className="three-boxes__text">{box.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
