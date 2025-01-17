import { Link, Navigate, useParams } from "react-router-dom";
import { Events } from "../constants/data";
import { EventType } from "../types";

function EventDetails() {
  const { eventType, eventId } = useParams<{
    eventType: EventType;
    eventId: string;
  }>();

  if (!eventId || !eventType) return <Navigate to={"/not-found"} />;

  const currEvent = Events[eventType][eventId];

  return (
    <div className="main-bg register">
      <div className="flex justify-center  pt-[8rem] lg:pt-24">
        <div className="p-8 w-fit bg-[#ffffff19] text-white rounded-xl mt-12">
          <div className="flex flex-wrap justify-center gap-8 w-[80vw]">
            <img
              src={currEvent.image}
              className="lg:w-[25rem] object-cover min-w-[15rem] max-w-[25rem] w-10vw rounded-xl flex-grow-0"
            />
            <div className="flex flex-col gap-4 w-[30rem] flex-grow">
              <p className="text-[2rem] br">{currEvent.name}</p>
              <p className="text-[1.15rem] leading-relaxed whitespace-pre-line">
                {currEvent.desc}
              </p>
              <p className="text-[2rem]">Rules</p>
              <ol className="list-decimal list-inside flex flex-col gap-2">
                {currEvent.rules.map((rule, i) => {
                  if (rule.startsWith("https")) {
                    return (
                      <li key={i}>
                        Check more rules
                        <a href={rule} target="_blank" className="text-red-500">
                          {" "}
                          here.
                        </a>
                      </li>
                    );
                  }
                  return <li key={i}>{rule}</li>;
                })}
              </ol>
              <div className="flex flex-wrap gap-8 md:gap-16 my-8">
                {currEvent.pocs.map((poc, i) => {
                  return (
                    <div
                      className="flex flex-col gap-1 text-[1rem] md:text-[1.15rem] "
                      key={i}
                    >
                      <p>{poc.name}</p>
                      <p>{poc.contact}</p>
                      <p>{poc.mailId}</p>
                    </div>
                  );
                })}
              </div>
              <Link
                to={
                  currEvent.eventType === "hero"
                    ? "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link"
                    : "https://maitri.bmu.edu.in/asd_EventPublicUserMaster.htm?eventID=23"
                }
                className="bg-transparent border-4 border-white w-fit px-16 my-4 py-4"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
