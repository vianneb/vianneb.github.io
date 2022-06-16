import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export function Header() {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["student.", "leader.", "designer.", "developer.", "product manager."], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='header margin-top'>
            <div className='container d-flex mb-5'>
                <p className='me-3'>Hello!</p>
                <motion.img animate={{rotate: [0, -20, 20, -10, 10,]}} transition={{repeat: Infinity, repeatDelay: 2, duration: 0.65}} className='wave-emoji' src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/325/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc.png" alt="wave emoji"></motion.img>
            </div>
            <div className='container d-flex'>
                <p>My name is <span className='name'>Vianne.</span></p>
            </div>
            <div className='container d-flex'>
                <p>I'm a <span className="typed-strings"ref={el}></span></p>
            </div>
        </div>
    )
}