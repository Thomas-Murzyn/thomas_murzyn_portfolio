import Button from "./Button";
import Title from "./Title";
import SectionContainer from "./SectionContainer";

function About() {
  return (
    <SectionContainer section="about">
      <Title title="A propos de moi" />
      <p className="text-Light dark:text-Dark text-xl mt-5">
        J'ai 30 ans et je vis en région Parisienne.
      </p>
      <p className="text-Light dark:text-Dark text-xl mt-5 text-center">
        Je suis Développeur Web & Mobile, passionné par les nouvelles
        technologies et leurs facultés à améliorer le quotiden des gens.
      </p>
      <p className="text-Light dark:text-Dark text-xl mt-5 text-center">
        Je conçois et réalise des sites web de la partie front end avec React et
        Typescript à la partie back end avec Node js.
      </p>
      <Button title="Télécharger mon cv" />
    </SectionContainer>
  );
}

export default About;
