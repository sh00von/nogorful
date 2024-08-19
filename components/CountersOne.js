import React from 'react';
import CountUp from 'react-countup';
import { countersData } from '../data/dataStore'; // Adjust the path as needed

const CountersOne = () => {
    return (
        <section className="counters-one">
            <div className="container">
                <ul className="counters-one__box list-unstyled">
                    <li className="counter-one__single">
                        <h3 className="odometer">
                            <CountUp end={countersData.totalStudents} separator="," />
                        </h3>
                        <p className="counter-one__text">Total Children</p>
                    </li>
                    <li className="counter-one__single">
                        <h3 className="odometer">
                            <CountUp end={countersData.totalProjects} separator="," />
                        </h3>
                        <p className="counter-one__text">Ours Project</p>
                    </li>
                    <li className="counter-one__single">
                        <h3 className="odometer">
                            <CountUp end={countersData.branch} separator="," />
                        </h3>
                        <p className="counter-one__text">Branch</p>
                    </li>
                    <li className="counter-one__single">
                        <h3 className="odometer">
                            <CountUp end={countersData.totalVolunteers} separator="," />
                        </h3>
                        <p className="counter-one__text">Our Volunteers</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CountersOne;
