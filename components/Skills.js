import Title from "./Title";
import Skill from "./Skill";
import SectionContainer from "./SectionContainer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsTab = [
  {
    name: "Front-end",
    skills: ["React", "React native", "Typescript", "Tailwind css"],
  },
  { name: "Back-end", skills: ["Node js", "Express", "Mongo db", "API Rest"] },
  {
    name: "Soft skills",
    skills: [
      "Autodidacte",
      "Relationnel client",
      "Méthode agile",
      "Résolution de problèmes",
    ],
  },
];

const underline = {
  position: "absolute",
  bottom: "-1px",
  left: "0",
  right: "0",
  height: "2px",
  background: "#FF0000",
};

function Skills() {
  const [selectedTab, setSelectedTab] = useState(skillsTab[0]);
  return (
    <SectionContainer section={"skills"}>
      <Title title="Mes compétences" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="border-2 border-Light dark:border-Dark mt-10 flex flex-col items-center text-Light dark:text-Dark rounded shadow-xl"
      >
        <ul className="flex text-2xl border-b border-LightGray font-bold">
          {skillsTab.map((item) => (
            <li
              key={item.name}
              className={`${
                item === selectedTab ? "bg-DarkGray dark:bg-LightGray" : ""
              }  relative py-4 px-4 cursor-pointer text-lg sm:text-2xl`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.name}`}
              {item === selectedTab ? (
                <motion.div
                  style={underline}
                  layoutId={underline}
                  transition={{ duration: 0.5 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
        <AnimatePresence exitBeforeEnter>
          <Skill selectedTab={selectedTab} />
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}

export default Skills;
