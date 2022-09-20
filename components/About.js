import Button from "./Button";
import Title from "./Title";
import SectionContainer from "./SectionContainer";

function About() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV-Thomas-Murzyn.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-Thomas-Murzyn.pdf";
        alink.click();
      });
    });
  };

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
      <Button action={onButtonClick} title="Télécharger mon cv" />
    </SectionContainer>
  );
}

export default About;
