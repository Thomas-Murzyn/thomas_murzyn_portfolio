import Button from "./Button";
import Title from "./Title";

function About() {
  return (
    <div className="h-screen w-3/4 lg:w-2/4 m-auto p-2 flex justify-center items-center bg-Dark dark:bg-Light">
      <div className="h-full flex flex-col justify-center items-center">
        <Title title="A propos de moi" />
        <p className="text-Light dark:text-Dark text-xl mt-5">
          J'ai 30 ans et je vis en région Parisienne.
        </p>
        <p className="text-Light dark:text-Dark text-xl mt-5 text-center">
          Je suis Développeur Web & Mobile, passionné par les nouvelles
          technologies et leurs facultés à améliorer le quotiden des gens.
        </p>
        <p className="text-Light dark:text-Dark text-xl mt-5 text-center">
          Je conçois et réalise des sites web de la partie front end avec React
          et Typescript à la partie back end avec Node js.
        </p>
        <Button title="Télécharger mon cv" />
      </div>
    </div>
  );
}

export default About;
