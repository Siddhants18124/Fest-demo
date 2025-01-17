import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  bg: StaticImageData;
  logo: StaticImageData;
  url: string;
  events?: boolean;
};

function EventsPageGrid(props: Props) {
  return (
    <Link href={props.url}>
      <div
        className={`${
          props.events ? "h-80 lg:h-80 rounded-[10px] xl:h-96" : "h-[20rem]"
        } relative w-full  group overflow-hidden bg-black  transition-all duration-300 ease-in-out `}
      >
        <Image
          src={props.bg}
          alt="67thmilestone"
          width={720}
          height={400}
          className="absolute object-center w-full h-full object-cover z-0 transition-all duration-500 ease-in-out scale-125 group-hover:scale-100"
        />
        <div className="absolute w-full h-full z-10 bg-black opacity-45 transition-all duration-300 ease-in-out group-hover:opacity-60" />
        <Image
          src={props.logo}
          alt="hero's challenge"
          width={720}
          height={400}
          className="absolute object-contain scale-75 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:scale-100"
        />
      </div>
    </Link>
  );
}

export default EventsPageGrid;
