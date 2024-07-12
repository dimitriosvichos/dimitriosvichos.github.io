import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.navbar', {
            scrollTrigger: {
                trigger: '.navbar',
                start: "650px top",
                scrub: 1,
                // markers: true,
            },
            duration: 1,
            backgroundColor: 'rgba(15, 16, 16, 0.9);',
            border: '2px solid rgba(255, 255, 255, 0.04)',
            boxShadow: '0px 20px 60px 5px rgba(0,0,0,0.3)',
        });

    }, []);
    return (
        <div className="navbar w-3/4 lg:max-w-[1060px] top-[20px]">
            <div className="navbar-left">
                <span>DIMITRIS VICHOS</span>
            </div>
            <div className="navbar-right">
                <a href="https://www.linkedin.com/in/dimitris-vichos/" target="_blank" className="icon-container">
                    <FaLinkedin className="icon" />
                </a>

                <a href="mailto:jimvichos@gmail.com" className="icon-container">
                    <FaEnvelope className="icon" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
