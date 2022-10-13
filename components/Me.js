import Button from "./Button";
import SectionContainer from "./SectionContainer";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";

function Me() {
  return (
    <SectionContainer section="me">
      <motion.div
        whileInView={{
          opacity: 1,
          scale: [0, 1],
        }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl sm:text-7xl font-bold text-Light dark:text-Dark text-center">
          Bonjour,&nbsp; je suis Thomas Developpeur Web
        </h1>
        <a href="#contact">
          <Button title="Me contacter" Icon={EmailOutlinedIcon} />
        </a>
      </motion.div>
    </SectionContainer>
  );
}

export default Me;
