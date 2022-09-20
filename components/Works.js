import SectionContainer from "./SectionContainer";
import Work from "./Work";
import Title from "./Title";
import Data from "./Data";

function Works() {
  return (
    <SectionContainer section="works">
      <Title title="Portfolio" />
      <div className="w-full flex justify-center flex-wrap gap-5 ">
        {Data.map((work) => {
          return <Work key={work.id} work={work} />;
        })}
      </div>
    </SectionContainer>
  );
}

export default Works;
