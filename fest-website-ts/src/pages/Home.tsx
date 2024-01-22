import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeroBg } from "../assets";

function HomePage() {
  return (
    <section className="h-screen relative">
      <div className="-z-10 absolute h-full w-full bg-black opacity-40" />
      <img
        src={HeroBg}
        alt=""
        className="absolute h-full w-full object-cover -z-20"
      />
      <section className="h-full w-full p-4 pt-32 text-white flex flex-col justify-between">
        <div />
        <div>
          <h1 className="text-7xl font-bold tracking-wider">
            <div>67th Milestone</div>
            <div>Hero’s Challenge</div>
          </h1>
          <div className="mt-8 bg-white h-32 w-32 flex flex-col uppercase font-bold text-4xl justify-center items-center px-2 gap-2">
            <h2 className="mix-blend-difference text-center">01</h2>
            <div className="h-[2px] w-full bg-black"></div>
            <h2 className="mix-blend-difference text-center">MAR</h2>
          </div>
        </div>
        <Link
          to={"https://maps.app.goo.gl/k8dmbFxLpQkFm11F8"}
          className="text-2xl flex flex-row items-center gap-1"
        >
          <IoLocationOutline className="text-2xl" />
          67th Milestone, NH 48
          <span className="hidden">, Kapriwas, Haryana 122413</span>
        </Link>
      </section>
    </section>
  );
}

export default HomePage;