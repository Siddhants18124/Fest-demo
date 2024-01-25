import About1 from "../components/About/About1";
import About2 from "../components/About/About2";
import About3 from "../components/About/About3";
import About4 from "../components/About/About4";
import About5 from "../components/About/About5";

function About() {
  return (
    <>
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <About5 duration={5000} />
    </>
  );
}

export default About;