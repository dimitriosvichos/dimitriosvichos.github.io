import { SetStateAction, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Firebase } from "../../assets/firebase.svg";
import { ReactComponent as Typescript } from "../../assets/ts.svg";
import { ReactComponent as Sass } from "../../assets/sass.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwind.svg";
import { ReactComponent as Supabase } from "../../assets/supabase.svg";
import { ReactComponent as Vue } from "../../assets/vue.svg";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import { ReactComponent as Nuxt } from "../../assets/nuxt.svg";

import './Hero.css';

const icons = [
  { title: "React", icon: <ReactIcon />, color: '#00D8FF59' },
  { title: "Vue", icon: <Vue />, color: '#41B88359' },
  { title: "Typescript", icon: <Typescript />, color: '#0079CC59' },
  { title: "Nuxt", icon: <Nuxt />, color: '#00C49259' },
  { title: "Next", icon: <Next />, color: '#ECECEC59' },
  { title: "Tailwind", icon: <Tailwind />, color: '#47ACB459' },
  { title: "Supabase", icon: <Supabase />, color: '#48ADB459' },
  { title: "Sass", icon: <Sass />, color: '#CB669959' },
  { title: "Firebase", icon: <Firebase />, color: '#FECA2859' },
];

const HoverableIcons = () => {

  const [saveTitle, setSaveTitle] = useState("React");

  const handleMouseEnter = (color: string | null, title: SetStateAction<string>) => {
    setSaveTitle(title);
    document.documentElement.style.setProperty('--hover-shadow-color', color);
  };

  const handleMouseLeave = (title: SetStateAction<string>) => {
    setSaveTitle(title);
    document.documentElement.style.removeProperty('--hover-shadow-color');
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline ({
      scrollTrigger: {
        trigger: ".header-text",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
      duration: 2,
      opacity: 0,
      x: 100,
    });

    gsap.to(".header-text", {
      scrollTrigger: {
        trigger: ".header-text",
        start: "290px center",
        // markers: true,
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
      x: -100,
    });

    gsap.to(".header-span", {
      scrollTrigger: {
        trigger: ".header-span",
        start: "230px center",
        // markers: true,
        scrub: 1,
      },
      duration: 2,
      opacity: 0,
      x: -100,
    });

    gsap.to(".background-icons", {
      scrollTrigger: {
        trigger: ".background-icons",
        start: "280px center",
        // markers: true,
        scrub: 1,
      },
      duration: 1.5,
      opacity: 0,
      x: 100,
    });
  }, []);

  return (
    <div 
      className="hero-wrapper w-full h-[100vh] flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgb(102, 102, 102) 0%, rgb(46, 46, 46) 60%, rgba(14, 16, 17, 1) 100%)'
      }}
    >
      <div className="abstract-bg absolute inset-0 pointer-events-none">
        <div className="particle-dot dot-1"></div>
        <div className="particle-dot dot-2"></div>
        <div className="particle-dot dot-3"></div>
        <div className="particle-dot dot-4"></div>
        <div className="particle-dot dot-5"></div>
        <div className="particle-dot dot-6"></div>
        <div className="particle-dot dot-7"></div>
        <div className="particle-dot dot-8"></div>
        <div className="particle-dot dot-9"></div>
        <div className="particle-dot dot-10"></div>
        <div className="particle-dot dot-11"></div>
        <div className="particle-dot dot-12"></div>
        <div className="particle-dot dot-13"></div>
        <div className="particle-dot dot-14"></div>
        <div className="particle-dot dot-15"></div>
        <div className="particle-dot dot-16"></div>
        <div className="particle-dot dot-17"></div>
        <div className="particle-dot dot-18"></div>
        <div className="particle-dot dot-19"></div>
        <div className="particle-dot dot-20"></div>
        <div className="particle-dot dot-21"></div>
        <div className="particle-dot dot-22"></div>
        <div className="particle-dot dot-23"></div>
        <div className="particle-dot dot-24"></div>
        <div className="particle-dot dot-25"></div>
        <div className="particle-dot dot-26"></div>
        <div className="particle-dot dot-27"></div>
        <div className="particle-dot dot-28"></div>
        <div className="particle-dot dot-29"></div>
        <div className="particle-dot dot-30"></div>
        <div className="particle-dot dot-31"></div>
        <div className="particle-dot dot-32"></div>
        <div className="particle-dot dot-33"></div>
        <div className="particle-dot dot-34"></div>
        <div className="particle-dot dot-35"></div>
        <div className="particle-dot dot-36"></div>
        <div className="particle-dot dot-37"></div>
        <div className="particle-dot dot-38"></div>
        <div className="particle-dot dot-39"></div>
        <div className="particle-dot dot-40"></div>
      </div>
      
      <div className="hero container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:w-[960px] py-10 relative z-10">
      <div className="text-container w-full lg:w-1/2 text-white px-[30px] lg:px-0">
        <div className="text-[36px] font-bold mb-2 flex header-text"><span>Hello, I'm Dimitris </span> <span className="w-5 m-0 p-0">✌️</span></div>
        <p className="text-[36px] font-bold header-span">
          Frontend Developer creating web apps
          <strong> with {saveTitle}.</strong>
        </p>
      </div>
      
      <div 
        className="w-[357px] h-[351px] background-icons transition-skills con-flex-container flex flex-wrap justify-center items-center p-5 rounded-[60px]"
      >
        {icons.map((item, index) => (
          <div 
            key={index} 
            className="w-[33.33%] flex justify-center items-center p-2"
          >
            <div 
              className={`each-icon w-[70px] h-[70px] flex justify-center items-center rounded-lg`}
              style={{'--hover-background-color': item.color, transition: "all .4s ease-in-out"} as React.CSSProperties}
              onMouseEnter={() => handleMouseEnter(item.color, item.title)}
              onMouseLeave={() => handleMouseLeave(item.title)}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default HoverableIcons;
