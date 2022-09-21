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
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-2/5 xl:w-4.5/12 mt-10 h-58 border-2 border-Light dark:border-Dark rounded-md shadow-lg cursor-pointer relative"
    >
      <Image
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
    </div>
  );
}

export default Work;
