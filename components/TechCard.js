function TechCard({ title }) {
  return (
    <div
      className={`text-Light dark:text-Dark flex flex-col items-center p-5 w-36 border-2 border-Ligth rounded mt-10 hover:border-HeadLight hover:text-HeadLight cursor-pointer`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
      <span className="w-full border-b-2 my-1" />
      <span>Learn more</span>
    </div>
  );
}

export default TechCard;
