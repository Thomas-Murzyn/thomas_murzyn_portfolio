import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { useState } from "react";

function Work({ work }) {
  const [isActive, setIsActive] = useState(false);

  const workImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-3/4 sm:w-auto h-48 mt-10  border-2 border-Light dark:border-Dark rounded-md shadow-lg cursor-pointer relative"
    >
      <Image
        className="rounded"
        src={work.picture}
        style={workImage}
        alt={`site web ${work.name}`}
        priority={work.id === 3 ? true : false}
      />

      <Link className="w-full" href={work.url} passHref>
        <div
          className={`${
            isActive ? "flex" : "hidden"
          } absolute top-0 left-0 w-full h-full justify-center items-center bg-LightOppacity dark:bg-DarkOppacity text-Dark dark:text-Light`}
        >
          <h3 className="text-xl text-center font-bold">{work.name}</h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default Work;
