import Image from "next/image";

function TechCard({ title, infos }) {
  return (
    <div
      className={`text-Light dark:text-Dark bg-DarkGray dark:bg-Light flex flex-col items-center p-5 w-2/5 border-2 border-Ligth rounded mt-10 hover:border-HeadLight hover:text-HeadLight`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <span className="w-full border-b-2 my-1" />
      <div className="flex">
        {infos.map((info, index) => {
          return (
            <Image
              key={index}
              width="150"
              height="100"
              objectFit="contain"
              src={`/${info}.${info === "react" ? "svg" : "png"}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechCard;
