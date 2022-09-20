import TechCard from "./TechCard";
import Tools from "./Tools";
import Title from "./Title";

function Skills({ myRef }) {
  return (
    <div className="h-screen w-3/4 lg:w-2/4 m-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light">
      <Title title="Mes compétences" />
      <div
        ref={myRef}
        className="h-full w-full flex flex-col items-center toggleHidden"
      >
        <h3 className="text-Light dark:text-Dark text-3xl mt-10">
          Languages informatique
        </h3>
        <div className="w-full flex justify-evenly ">
          <TechCard
            description=" lzneflnez"
            title="Front end"
            infos={["react", "ts"]}
          />
          <TechCard
            description="znefoo"
            title="Back end"
            infos={["logo-node", "logo-mongo"]}
          />
        </div>

        <h3 className="text-Light dark:text-Dark text-3xl mt-10">
          Soft skills
        </h3>
        <Tools />
      </div>
    </div>
  );
}

export default Skills;
