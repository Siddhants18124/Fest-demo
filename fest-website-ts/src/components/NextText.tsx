import "./bounce.css";

function NextText() {
  return (
    <h3
      className="absolute z-20 text-lg text-white uppercase tracking-widest md:bottom-10 bottom-5 md:right-12 right-2 bounce scroll-smooth"
      style={{ writingMode: "vertical-rl" }}
    >
      NEXT &gt;&gt;
    </h3>
  );
}

export default NextText;
