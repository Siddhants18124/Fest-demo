import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MouseEventHandler, useState, useEffect } from "react";
// import { Social } from "../../assets";
import "./About4.css";

const CustomArrow = ({ onClick }: { onClick: MouseEventHandler }) => (
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
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      // Dynamically import all image files from the 'images' folder
      const imagePaths = import.meta.glob(
        "../../assets/core/*.{png,jpg,jpeg,svg}"
      );

      const importedImages = Object.values(imagePaths).map(
        async (imageModule) => {
          const module = (await imageModule()) as { default: string };
          return module.default;
        }
      );

      const resolvedImages = await Promise.all(importedImages);
      setImages(resolvedImages);
    };

    importImages();
  }, []);
  const noOfSlides = () => {
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
  };
  const settings = {
    infinite: true,
    slidesToShow: noOfSlides(),
    slidesToScroll: 1,
    cssEase: "ease-in",
    autoplay: false,
    prevArrow: <></>,
    nextArrow: <CustomArrow onClick={() => {}} />,
    
  };
  return (
    <div
      className=" w-[84vw] text-white mx-auto mb-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex  justify-between items-center flex-wrap-reverse  gap-x-4">
        <Slider
          {...settings}
          className="rounded-xl translate-x-[-1rem] w-[50%] space-x-4 overflow-hidden min-w-[12rem]  max-h-[20rem] flex-grow"
        >
          {images.map((img, i) => {
            return < img src={img} key={i} alt="" />;
          })}
        </Slider>
        <div className="flex h-auto rounded-lg items-center my-8 w-[17rem]">
          <div className="mt-1 text-wrap">
            <h1 className="font-bold text-[2rem] mb-8 font-['Poppins']">
              Meet The Heads
            </h1>
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
