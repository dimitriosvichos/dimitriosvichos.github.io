import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import colortwo from "../assets/colortwo.jpg"; // Import as image

interface ExperienceCardProps {
    image?: string;
    companyTitle?: string;
    jobTitle?: string;
    startDate?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, companyTitle, jobTitle, startDate }) => {
    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => {
      gsap.to(".eimai", {
        scrollTrigger: {
          trigger: ".eimai",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        //   markers: true,
        },
        opacity: 1,
        transform: "perspective(200px) translate3d(0px, 0px, 0px) rotate(0deg) rotateY(0deg) rotateX(0deg)",
      });
    }, []);
    return (
        <div className="flex eimai flex-col items-center justify-between w-[320px] h-[340px] mb-[50px] p-4 shadow-md rounded-[40px]" style={{ padding: "32px 32px 36px", backgroundColor: "rgb(20, 21, 21)" }}>
            <div 
                className="flex items-center justify-center w-full h-1/2 bg-gray-100 rounded-[28px]" 
                style={{ backgroundImage: `url(${colortwo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {image && <img src={image} alt="company logo" className="w-full h-full object-contain" />}
            </div>
            <div className="flex flex-col justify-between h-2/5 mt-4">
                <h3 className="text-lg text-white font-semibold">{companyTitle}</h3>

                <div className="flex items-end" style={{ gap: "20px" }}>
                    <h2 className="text-gray-500 font-bold tracking-wider">{jobTitle}</h2>
                    <p className="text-gray-500 font-bold w-[60px]">{"/ " + startDate}</p>
                </div>
            </div>
        </div>
    );
};
