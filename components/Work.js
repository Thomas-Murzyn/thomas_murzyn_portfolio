import Image from "next/future/image";
import Link from "next/link";

function Work({ work }) {
  const workImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="w-2/5 xl:w-4.5/12 mt-10 h-58 border-2 border-Light dark:border-Dark rounded-md shadow-lg cursor-pointer">
      <Link className="w-full" href={work.url} passHref>
        <Image src={work.picture} style={workImage} />
      </Link>
    </div>
  );
}

export default Work;
