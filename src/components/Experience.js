import React, { useState } from "react";
import { ArrowUpRight } from "react-feather";
import { motion } from "framer-motion";

export function Experience() {

    //state to track if user is hovered over company name
    const [isFirstHovered, setIsFirstHovered] = useState(false);
    const [isSecondHovered, setIsSecondHovered] = useState(false);
    const [isThirdHovered, setIsThirdHovered] = useState(false);
    const [isFourthHovered, setIsFourthHovered] = useState(false);

    return (
        <section className='container mb-5'>
            <h2 className="heading">EXPERIENCE</h2>

            <div className="container">
                <div className="row">

                    <div className="col-2 pe-md-0">
                        <p className="d-flex timeframe">
                            06/22—
                            <br />
                            Present
                        </p>
                    </div>
                    <div className="col-10 ps-md-0 mb-2">
                        <div className="d-flex">
                            <a className="company-name" href="https://www.microsoft.com/en-us/about">
                                <div className='d-flex' onMouseEnter={() => setIsFirstHovered(true)} onMouseLeave={() => setIsFirstHovered(false)}>
                                    <h3 className="heading" style={{ color: isFirstHovered ? "black" : "#444452" }}>Microsoft</h3>
                                    <motion.div animate={{ x: isFirstHovered ? 5 : 0, y: isFirstHovered ? -5 : 0 }}>
                                        <ArrowUpRight color="#68B4FF" size={26} />
                                    </motion.div>
                                </div>
                            </a>
                        </div>
                        <h4 className="heading">New Technologist Intern</h4>
                    </div>

                    <div className="col-2 pe-md-0">
                        <p className="d-flex timeframe">
                            03/22—
                            <br />
                            Present
                        </p>
                    </div>
                    <div className="col-10 ps-md-0 mb-2">
                        <div className="d-flex">
                            <a className="company-name" href="https://www.washington.edu/">
                                <div className="d-flex" onMouseEnter={() => setIsSecondHovered(true)} onMouseLeave={() => setIsSecondHovered(false)}>
                                    <h3 className="heading" style={{ color: isSecondHovered ? "black" : "#444452" }}>University of Washington</h3>
                                    <motion.div animate={{ x: isSecondHovered ? 5 : 0, y: isSecondHovered ? -5 : 0 }}>
                                        <ArrowUpRight color="#68B4FF" size={26} />
                                    </motion.div>
                                </div>
                            </a>
                        </div>
                        <h4 className="heading">Undergraduate Teaching Assistant for INFO 200 (Intellctual Foundations of Informatics)</h4>
                    </div>

                    <div className="col-2 pe-md-0">
                        <p className="d-flex timeframe">
                            04/22—
                            <br />
                            Present
                        </p>
                    </div>
                    <div className="col-10 ps-md-0 mb-2">
                        <div className="d-flex">
                            <a className="company-name" href="https://foster.uw.edu/centers/consulting-and-business-development-center/">
                                <div className="d-flex" onMouseEnter={() => setIsThirdHovered(true)} onMouseLeave={() => setIsThirdHovered(false)}>
                                    <h3 className="heading" style={{ color: isThirdHovered ? "black" : "#444452" }}>UW Consulting and Business Development Center</h3>
                                    <motion.div animate={{ x: isThirdHovered ? 5 : 0, y: isThirdHovered ? -5 : 0 }}>
                                        <ArrowUpRight color="#68B4FF" size={26} />
                                    </motion.div>
                                </div>
                            </a>
                        </div>
                        <h4 className="heading">Project Manager</h4>
                    </div>

                    <div className="col-2 pe-md-0">
                        <p className="d-flex timeframe">
                            01/22—
                            <br />
                            04/22
                        </p>
                    </div>
                    <div className="col-10 ps-md-0 mb-2">
                        <div className="d-flex">
                            <a className="company-name" href="https://foster.uw.edu/centers/consulting-and-business-development-center/">
                                <div className="d-flex" onMouseEnter={() => setIsFourthHovered(true)} onMouseLeave={() => setIsFourthHovered(false)}>
                                    <h3 className="heading" style={{ color: isFourthHovered ? "black" : "#444452" }}>UW Consulting and Business Development Center</h3>
                                    <motion.div animate={{ x: isFourthHovered ? 5 : 0, y: isFourthHovered ? -5 : 0 }}>
                                        <ArrowUpRight color="#68B4FF" size={26} />
                                    </motion.div>
                                </div>
                            </a>
                        </div>
                        <h4 className="heading">Consultant</h4>
                    </div>

                </div>
            </div>
        </section>
    )
}