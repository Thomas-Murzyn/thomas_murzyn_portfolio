import { motion } from "framer-motion";

function DetailSkill({ skill }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.3 }}
      className={`w-full flex justify-center
      py-2 px-4 my-5 items-center`}
    >
      <h4 className="text-2xl font-bold">{skill}</h4>
    </motion.div>
  );
}

export default DetailSkill;
