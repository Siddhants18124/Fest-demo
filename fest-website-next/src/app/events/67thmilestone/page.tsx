import Image from "next/image";
import Link from "next/link";
import {
  CulturalBg,
  HomeHeroBg,
  MileStone,
  MilestoneGamingBg,
  MilestoneMgmtBg,
  TechBg,
} from "../../../assets";
import NextText from "../../../components/NextText";
import {
  culturalEvents,
  gamingEvent,
  mgmtEvents,
  technicalEvents,
} from "../../../constants/generate_data";
import EventCategory from "../EventCategory";

function MilestonePage() {
  return (
    <>
      <section className="h-screen relative z-20">
        <NextText />
        <div className="-z-10 absolute h-full w-full top-0 bg-black opacity-40" />
        <Image
          src={HomeHeroBg}
          alt=""
          width={1280}
          className="absolute top-0 h-full w-full object-cover -z-20"
        />
        <section className="h-full w-full p-4 pt-32 text-white flex flex-col justify-center items-center">
          <Image width={1000} src={MileStone} alt="" className="" />
        </section>
      </section>
      <div id="category"></div>
      <EventCategory
        heading="Cultural Events"
        bgImg={CulturalBg}
        events={culturalEvents}
      />
      <EventCategory
        heading="Technical Events"
        bgImg={TechBg}
        events={technicalEvents}
      />
      <EventCategory
        heading="Management Events"
        bgImg={MilestoneMgmtBg}
        events={mgmtEvents}
      />
      <EventCategory
        heading="Gaming Events"
        bgImg={MilestoneGamingBg}
        events={gamingEvent}
      />
    </>
  );
}

export default MilestonePage;
