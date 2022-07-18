import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Projects() {

    //for scroll animation
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return (
        <section data-aos='fade-up' data-aos-duration='4000' className='container margin-top'>
            <h2 className='heading'>SELECTED PROJECTS</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 mb-3'>
                        <a href="https://www.figma.com/file/4FRk0oqY9XWUZaqNSHAc5l/DubMatch?node-id=2%3A2">
                            <div className='card image'>
                                <img className='image__img' src="img/dubmatch.png" alt="prototypes for DubMatch app"></img>

                                <div className='image__overlay'>
                                    <h3 className='heading image__title'>DubMatch</h3>
                                    <p className='image__description ms-2 me-2'>A mobile application that connects students to classmates of similar interests.</p>
                                    <div>
                                        <span className="image__tools">Figma</span>
                                    </div>
                                </div>

                            </div>

                        </a>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <a href="https://foody-6af26.web.app/home">
                            <div className='card image'>
                                <img className='image__img' src="img/foody.png" alt="prototype for Foody app"></img>

                                <div className='image__overlay'>
                                    <h3 className='heading image__title'>Foody</h3>
                                    <p className='image__description ms-2 me-2'>An interactive web application that allows users to search, view, save, and post Seattle-area restuarants.</p>
                                    <div>
                                        <span className="image__tools me-2">Javascript</span>
                                        <span className="image__tools me-2">HTML</span>
                                        <span className="image__tools me-2">CSS</span>
                                        <span className="image__tools me-2">React</span>
                                        <span className="image__tools">Firebase</span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <a href="https://www.figma.com/file/J67d99YJEYNjRQGEkgEcSF/LiveFresh?node-id=2%3A79">
                        <div className='card image'>
                            <img className='image__img' src="img/livefresh.png" alt="prototypes for LiveFresh app"></img>

                            <div className='image__overlay'>
                                <h3 className='heading image__title'>LiveFresh</h3>
                                <p className='image__description ms-2 me-2'>A mobile application that allows users to track the expiration dates of items in their fridge and find recipes for expiring items.</p>
                                <div>
                                    <span className="image__tools">Figma</span>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <a href="https://sarah02mun.shinyapps.io/final-project-starter-sarah02mun/">
                        <div className='card image'>
                            <img className='image__img' src="img/min_wage.png" alt="prototype for Analyzing US Minimum Wages Shiny app"></img>

                            <div className='image__overlay'>
                                <h3 className='heading image__title'>Analyzing US Minimum Wages</h3>
                                <p className='image__description ms-2 me-2'>A web application with interactive data visualizations that explore the relationship between US federal and state minimum wages and consumer price index over time.</p>
                                <div>
                                    <span className="image__tools me-2">R</span>
                                    <span className="image__tools">Shiny</span>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className='col-12 col-md-6 mb-3'>
                        <a href="https://docs.google.com/document/d/1xWeXu0yX4oCFVDLqhfzrf3gx3X4bVUBBxsLc18yirGI/edit#heading=h.aczyuw2yex2w">
                            <div className='card image'>
                                <img className='image__img' src="img/gender_wage.png" alt="interactive plot depicting percentage of gender wage gap in OECD countries"></img>

                                <div className='image__overlay'>
                                    <h3 className='heading image__title'>Analyzing Gender Wage Gaps</h3>
                                    <p className='image__description ms-2 me-2'>Data visualizations that examine how the gender wage gap varies across education levels, occupations, and countries.</p>
                                    <div>
                                        <span className="image__tools">Python</span>
                                    </div>
                                </div>

                            </div>

                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}