import TechCard from "./TechCard";
import Tools from "./Tools";
import Title from "./Title";
import SectionContainer from "./SectionContainer";

function Skills({ myRef }) {
  return (
    <SectionContainer section={"skills"}>
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
    </SectionContainer>
  );
}

export default Skills;
