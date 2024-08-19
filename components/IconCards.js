import React from 'react';
import Image from 'next/image';
import { cardData } from '../data/dataStore'; // Adjust the path as needed

const Card = () => {
    return (
        <section className="four-icon">
            <div className="container">
                <div className="row">
                    {cardData.map((item, index) => (
                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                            <div className="four-icon__single">
                                <div className="four-icon__img">
                                    {/* Use next/image for optimized image */}
                                    <Image
                                        src={item.image} // Path to your image
                                        alt={item.title} // Description of the image
                                        layout="responsive" // Adjust based on your needs
                                        width={400} // Provide a width (adjust as needed)
                                        height={300} // Provide a height (adjust as needed)
                                    />
                                    <div className="four-icon__content-box">
                                        <h3 className="four-icon__title">{item.title}</h3>
                                        <p className="four-icon__text">{item.text}</p>
                                    </div>
                                </div>
                                <div className="four-icon__bottom-icon">
                                    <span className={item.icon}></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;
