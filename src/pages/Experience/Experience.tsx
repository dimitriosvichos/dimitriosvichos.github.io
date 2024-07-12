import React from "react";
import { ExperienceCard } from "../../components/Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

const Experience: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".thisisdynamic", {
      scrollTrigger: {
        trigger: ".letter-spacing",
        start: "top 80%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
      opacity: 1,
      stagger: 0.1,
    });
  }, []);


  return (
    <div className="h-[100vh] flex items-center" style={{ backgroundColor: "rgba(14, 16, 17, 1)" }}>
      <div className="layout mx-auto">
        <div className="side">
          <ExperienceCard jobTitle="FRONTEND ENGINEER" companyTitle="LIKNOSS" startDate="now" />
        </div>

        <div className="middle hidden lg:flex">
          <div className="card flex flex-col letter-spacing">

            <div className="flex h-[150px] ">
              {'MY'.split('').map((letter, index) => (
                <span key={index} className="thisisdynamic opacity-0 lg:text-[40px] text-white font-semibold">{letter}</span>
              ))}
            </div>

            <span className="thisisdynamica lg:text-[20px] text-[#6B7280] font-semibold">/ now</span>

            <div className="flex h-[150px]">
              {'WORK'.split('').map((letter, index) => (
                <span key={index} className="thisisdynamic opacity-0 lg:text-[40px] text-white font-semibold">{letter}</span>
              ))}
            </div>
              
            <span className="thisisdynamica lg:text-[20px] text-[#6B7280] font-semibold">/ from 2022</span>

            <div className="flex h-[150px]">
              {'EXPERIENCE'.split('').map((letter, index) => (
                <span key={index} className="thisisdynamic opacity-0 lg:text-[40px] text-white font-semibold">{letter}</span>
              ))}
            </div>

          </div>
        </div>

        <div className="side">
          <div className="card hidden lg:flex"></div>
          <ExperienceCard jobTitle="FRONTEND ENGINEER INTERN" companyTitle="GENERATION-Y" startDate="2022" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
