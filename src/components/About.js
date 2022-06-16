import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export function About() {

    


    return (
        <section className="container margin-top">
            <h2 className="heading">ABOUT</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">

                        <p>
                            I'm a junior majoring in <a className="about-link" href="https://ischool.uw.edu/programs/informatics">Informatics</a> at the <a className="about-link" href="https://ischool.uw.edu/">University of Washington iSchool</a>.
                            I'm most drawn to product management and learning how to create accessible, inclusive, and insipiring technology-powered products that people love.
                        </p>

                        <p>
                            When I'm not desiging, developing, or leading, you can catch me playing with my Australian Shepherd puppy, Koda, or on a mission to find the best-tasting boba in Seattle with my friends!
                        </p>

                        <p>
                            I love meeting new people - say hi at <a className="about-link" href="mailto: vianneb@uw.edu">vianneb@uw.edu</a>!
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}