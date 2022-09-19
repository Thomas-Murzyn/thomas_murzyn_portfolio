import Image from "next/image";
import TechCard from "./TechCard";

function Skills({ myRef }) {
  return (
    <div className="h-screen w-3/4 lg:w-2/4 m-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light">
      <h2 className="text-7xl font-bold text-Light dark:text-Dark">
        Mes compétences
      </h2>
      <div className="h-full w-full flex flex-col items-center">
        <h3 className="text-Light dark:text-Dark text-3xl mt-5">
          Languages & technologies
        </h3>
        <div
          ref={myRef}
          className="w-full flex justify-evenly toggleHidden toto"
        >
          <TechCard description=" lzneflnez" title="React" />
          <TechCard description="znefoo" title="Typescript" />
          <TechCard description=" eofjneozf" title="Mongo db" />
          <TechCard description="znefoo" title="Node js" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
