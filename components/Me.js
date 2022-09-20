import Button from "./Button";
import SectionContainer from "./SectionContainer";

function Me() {
  return (
    <SectionContainer section="me">
      <h1 className="text-7xl font-bold text-Light dark:text-Dark text-center">
        Bonjour,&nbsp; je suis Thomas Developpeur Web.
      </h1>
      <Button title="Me contacter" />
    </SectionContainer>
  );
}

export default Me;
