import { motion } from "framer-motion";
import DetailSkill from "./DetailSkill";

function Skill({ selectedTab }) {
  return (
    <motion.div
      key={selectedTab ? selectedTab.name : "empty"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col"
    >
      {selectedTab.skills.map((skill) => {
        return (
          <DetailSkill
            key={selectedTab.name}
            name={selectedTab.name}
            skill={skill}
          />
        );
      })}
    </motion.div>
  );
}

export default Skill;
