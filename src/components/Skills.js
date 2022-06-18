import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Skills() {

    //for scroll animation
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return (

        <section data-aos='fade-up' data-aos-duration='4000' className="container margin-top mb-5">
            <h2 className="heading">SKILLS</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="heading">Programming</h3>
                        <ul className="lang-list ms-0 ps-0">
                            <li>Python</li>
                            <li>Java</li>
                            <li>R</li>
                            <li>SQL</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>AJAX (API calls)</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-4">
                        <h3 className="heading">Tools</h3>
                        <ul className="lang-list ms-0 ps-0">
                            <li>Figma</li>
                            <li>Git/GitHub</li>
                            <li>Visual Studio Code</li>
                            <li>Firebase</li>
                        </ul>

                    </div>

                    <div className="col-12 col-md-4">
                        <h3 className="heading">Other Skills</h3>
                        <ul className="lang-list ms-0 ps-0">
                            <li>User-Centered Design</li>
                            <li>User Research (surveys, interviews, personas)</li>
                            <li>Usability Testing</li>
                            <li>Information Architecture</li>
                            <li>Web Development</li>
                            <li>Data Analysis &amp; Visualization</li>          
                        </ul>

                    </div>

                </div>
            </div>

        </section>
    )
}