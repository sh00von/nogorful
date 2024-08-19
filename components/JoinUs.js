import React from 'react';
import { joinUsData } from '../data/dataStore'; // Adjust the path as needed

const JoinUs = () => {
    return (
        <section className="become-volunteer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="become-volunteer__inner">
                            <div className="become-volunteer__left">
                                <h2 dangerouslySetInnerHTML={{ __html: joinUsData.title }} />
                                <div className="become-volunteer__big-text">
                                    <h2>{joinUsData.bigText}</h2>
                                </div>
                            </div>
                            <div className="become-volunteer__btn-box">
                                <a href={joinUsData.buttonLink} className="become-volunteer__btn thm-btn">
                                    <i className="fas fa-arrow-circle-right"></i> {joinUsData.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
