import "./about1.css";
import img1 from "../../assets/about1.png";
import img2 from "../../assets/about2.png";
import img3 from "../../assets/about3.png";
import img4 from "../../assets/about4.png";
import img5 from "../../assets/about5.png";

function About1() {
  return (
    <div className="xl:mx-47 mb-16 mx-auto pt-32 w-[80vw] max-w-[1200px] box-border  hidden md:block">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="h-auto rounded-lg max-w-[80vw] mx-auto bg-black ">
          <img
            src={img1}
            alt="Image 1"
            className="w-full object-cover opacity-50 "
          />
        </div>
        <div className="h-auto rounded-lg max-w-[80vw] mx-auto ">
          <img
            src={img2}
            alt="Image 1"
            className="w-full h-fit object-cover  opacity-70  "
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 mt-3 ">
        <div className="h-auto rounded-lg max-w-[80vw] mx-auto">
          <img
            src={img3}
            alt="Image 1"
            className="w-full object-cover opacity-60 "
          />
        </div>
        <div className="h-auto rounded-lg max-w-[80vw] mx-auto  ">
          <img
            src={img4}
            alt="Image 1"
            className="w-full object-cover bg-black opacity-60 "
          />
        </div>
        <div className="h-auto rounded-lg max-w-[80vw] mx-auto ">
          <img
            src={img5}
            alt="Image 1"
            className="w-full object-cover bg-black opacity-70 "
          />
        </div>
      </div>
    </div>
  );
}

export default About1;
