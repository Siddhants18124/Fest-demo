"use client";

import { MouseEventHandler, useCallback, useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { Social } from "../../assets";
import { a1, a3, a4, a5, a6, a7, a8, a9, a11, a12 } from "@/assets";
import Image, { StaticImageData } from "next/image";
import "./About4.css";

const CustomArrow = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <div
    onClick={onClick}
    className="w-[30%] max-w-[10rem] cursor-pointer h-full before:opacity-0 absolute right-0 top-[50%] translate-y-[-50%] text-white"
  >
    <div className="absolute justify-center items-center flex bg-[#00000064] w-full h-full">
      <FaArrowRight />
    </div>
  </div>
);

export function About4() {
  const images: StaticImageData[] = [a1, a3, a4, a5, a6, a11, a7, a8, a9, a12];

  const noOfSlides = useMemo(() => {
    return () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1000) {
          return 3;
        } else if (window.innerWidth > 900) {
          return 2;
        } else if (window.innerWidth < 750 && window.innerWidth > 725) {
          return 1;
        } else if (window.innerWidth < 725 && window.innerWidth > 500) {
          return 2;
        } else if (window.innerWidth < 500) {
          return 1;
        } else {
          return 1;
        }
      } else return 1;
    };
  }, []);

  const settings: any = {
    infinite: true,
    slidesToShow: noOfSlides(),
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: false,
    prevArrow: <></>,
    nextArrow: <CustomArrow onClick={() => {}} />,
  };
  const heads = [
    {
      title: "Coverage Head",
      name: "Akshay Sathyapal",
    },
    {
      title: "Content Head",
      name: "Aastha",
    },
    {
      title: "Coverage Head",
      name: "Sanskar Gupta",
    },
    {
      title: "Decoration Head",
      name: "Angelina Gupta",
    },
    {
      title: "Design Head",
      name: "Aryan gandotra",
    },
    {
      title: "Website Head",
      name: "Siddhant Sharma",
    },
    {
      title: "Marketing Head",
      name: "Anchal Singh",
    },
    {
      title: "Marketing Head",
      name: "Anmol Agrawal",
    },
    {
      title: "Operations head",
      name: "Anubhav",
    },

    {
      title: "Sponsorship Head",
      name: "Yash Mittal",
    },
    {
      title: "Sponsorship Head",
      name: "Yash Mittal",
    },
  ];
  return (
    <div
      className=" w-[84vw] text-white mx-auto mb-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex  justify-between items-center flex-wrap-reverse  gap-x-4">
        <Slider
          {...settings}
          className="rounded-xl translate-x-[-1rem] w-[50%] space-x-4 overflow-hidden min-w-[12rem]  max-h-[16rem] flex-grow"
        >
          {images.map((img, i) => {
            return (
              <div key={i} className="  relative group transition-all">
                <Image width={320} height={280} src={img} key={i} alt="" />
                <div className="absolute opacity-0 group-hover:opacity-100 duration-700 ml-0 z-20 flex flex-col justify-center items-center bottom-0 left-0 w-full h-[5rem] bg-[#0000008f] text-white">
                  <p className="text-[0.9rem] ">{heads[i].name}</p>
                  <p className="font-semibold">{heads[i].title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="flex h-auto rounded-lg items-center my-8 w-[17rem]">
          <div className="mt-1 text-wrap">
            <h1 className="font-bold text-[2rem] mb-8">Meet The Heads</h1>
            <p className=" text-justify  text-lg mt-3">
              The one who have made this all possible and made our fest a grand
              success
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About4;
