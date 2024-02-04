import "./about2.css";
import { HeroChlng, MileStone } from "../../assets";

const About2 = () => {
  return (
    <div
      className="flex justify-center pt-[8rem] mx-2 md:mx-6 md:py-4 box-border min-h-[100vh]  text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="grid md:w-[73vw] w-[80vw] grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="grid grid-cols-1 gap-3 lg:grid-row-2">
          <div className="h-full relative max-h-[20rem] rounded-lg flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="alt image"
              className="absolute top-0 z-10 left-0 h-full w-full max-w-[600px] object-cover"
            />
            <img
              src={MileStone}
              className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
            />
          </div>
          <div className="h-full relative max-h-[20rem] rounded-lg flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="alt image"
              className="absolute z-10 top-0 left-0 h-full w-full max-w-[600px] object-cover"
            />
            <img
              src={HeroChlng}
              className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="row-span-full py-4 md:px-4 sm:px-4 lg:px-8 flex flex-col items-center">
            <h1 className="text-white font-extrabold text-5xl mt-8 mb-16">
              About Fest
            </h1>
            <p className="text-white flex-grow font-[20px] lg:text-justify leading-[36px] font-['Poppins']">
              Tristique quis arcu egestas donec risus platea adipiscing. Turpis
              arcu commodo orci lectus odio lorem. Enim, commodo, volutpat
              facilisi odio nulla eu senectus dolor. Commodo, amet ultricies
              nullam purus. Feugiat sed consequat fermentum purus consectetur
              praesent purus. Dictum at quam habitant rutrum condimentum
              praesent erat lorem. Sit eget nunc lacinia eu metus. Mauris purus
              posuere egestas elementum in blandit ipsum vitae sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
