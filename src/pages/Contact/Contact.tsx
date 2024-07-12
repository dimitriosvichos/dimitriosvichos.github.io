import React, { useState, useEffect } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import './Contact.css'

const Contact: React.FC = () => {
    const [shadowColor, setShadowColor] = useState('transparent');
    const [flyingIcons, setFlyingIcons] = useState<{ id: number; left: number; top: number; icon: React.ReactNode; direction: number; rotation: number }[]>([]);

    const socialMedia = [
        { icon: <FaLinkedinIn />, name: 'LinkedIn', color: '#0077B5', link: "https://www.linkedin.com/in/dimitris-vichos/" },
        { icon: <LuGithub />, name: 'GitHub', color: '#333', link: "https://github.com/dimitriosvichos" },
        { icon: <FaCodepen />, name: 'CodePen', color: 'white', link: "https://codepen.io/DimitrisCodeWorld" },
    ];

    const handleHover = (color: string, name: string) => {
        setShadowColor(color);
        createFlyingIcons(name);
    }

    const handleMouseLeave = () => {
        setShadowColor('transparent');
        setFlyingIcons([]);
    }

    const createFlyingIcons = (name: string) => {
        const socialIcon = socialMedia.find(social => social.name === name)?.icon;
        if (!socialIcon) return;

        const newIcons = Array.from({ length: 20 }, (_, i) => ({
            id: Date.now() + i,
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
            icon: socialIcon,
            direction: Math.random() * 360,
            rotation: Math.random() * 720 - 360 // -360 to 360 degrees
        }));
        setFlyingIcons(newIcons);
    }

    useEffect(() => {
        const icons = document.querySelectorAll('.flying-icon');
        icons.forEach((icon, index) => {
            const flyingIcon = flyingIcons[index];
            if (flyingIcon) {
                icon.style.setProperty('--direction', `${flyingIcon.direction}deg`);
                icon.style.setProperty('--rotation', `${flyingIcon.rotation}deg`);
            }
        });
    }, [flyingIcons]);

    return (
        <div 
            style={{ 
                backgroundColor: "rgba(14, 16, 17, 1)",
                boxShadow: `inset 0 0 200px 50px ${shadowColor}`,
                transition: 'box-shadow 0.3s ease',
            }}
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        >
            {flyingIcons.map((icon) => (
                <div
                    key={icon.id}
                    className="flying-icon"
                    style={{ left: `${icon.left}px`, top: `${icon.top}px`, color: shadowColor }}
                >
                    {icon.icon}
                </div>
            ))}
            <div className="hero-text flex flex-col items-center w-full lg:w-[960px] mx-auto">
                <h1 className="text-[60px] font-bold text-gray-300 mb-20">Socials</h1>
                <ul className='tapa flex justify-between w-2/3 lg:w-[960px] mb-4'>
                    {socialMedia.map((social, index) => (
                        <li 
                            key={index}
                            className='text-[30px] text-[white] cursor-pointer'
                            onMouseEnter={() => handleHover(social.color, social.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href={social.link} target='_blank'>
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact;