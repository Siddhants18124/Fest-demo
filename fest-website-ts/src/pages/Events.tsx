import { HeroChlng, MileStone } from "../assets";
import EventsPageGrid from "../components/EventsPageGrid";

function EventsPage() {
  return (
    <section className="min-h-[690px] pt-32 ">
      <div className="my-4 grid gap-5 w-full place-content-center grid-cols-1 px-4 sm:w-11/12 sm:mx-auto sm:grid-cols-2">
        <EventsPageGrid
          url="/events/67milestone"
          logo={MileStone}
          events={true}
          bg={
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <EventsPageGrid
          events={true}
          url="/events/heros-challenge"
          logo={HeroChlng}
          bg={
            "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <p className="text-xl mt-12 text-white text-center w-11/12 mx-auto">
        Our world where excitement ignites and euphoria thrives! Pulsating
        energy, timeless memories.
      </p>
    </section>
  );
}

export default EventsPage;
