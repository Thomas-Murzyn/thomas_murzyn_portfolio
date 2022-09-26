import vintedPicture from "../public/Vinted.png";
import tripadvisorPicture from "../public/TripAdvisor.png";
import gamepadPicture from "../public/gamePadPicture.png";
import marvelPicture from "../public/marvelPicture.png";

const data = [
  {
    id: 1,
    name: "Gamepad",
    techno: ["Mongo DB", "Express", "React js", "Node js / Javascript"],
    picture: gamepadPicture,
    url: "https://gamepad-by-thomas.netlify.app",
    description:
      "Un site qui recense et qui permet de chercher tous les jeux vidéo, le site utilise l'api de RAWG. Il a été réalisé avec la MERN Stack c'est à dire avec les technologies Mongo DB, Express, React js et Node js.",
  },

  {
    id: 2,
    name: "Réplique Full Stack de Vinted",
    techno: ["Mongo DB", "Express", "React js", "Node js / Javascript"],
    picture: vintedPicture,
    url: "https://vinted-by-thomas.netlify.app",
    description:
      "Ce site est une réplique du célébre site Vinted. Il a été réalisé avec la MERN Stack c'est à dire avec les technologies Mongo DB, Express, React js et Node js.",
  },

  {
    id: 3,
    name: "Réplique Front-end de TripAdvisor",
    techno: ["HTML", "CSS", "Vanilla Javascript"],
    picture: tripadvisorPicture,
    url: "https://tripadvisor-by-thomas.netlify.app",
    description:
      "Ce site est une réplique Front-End de la page Paris du célèbre site TripAdvisor. Il a été réalisé en HTML CSS et Vanilla Javascript.",
  },

  {
    id: 4,
    name: "Marvel",
    techno: ["HTML", "CSS", "React", "Node js", "Mongo db", "Express"],
    picture: marvelPicture,
    url: "https://marvel-by-tm.netlify.app",
    description: "Un site pour chercher les characters et comics marvel.",
  },
];

export default data;
