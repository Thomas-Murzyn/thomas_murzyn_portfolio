import React from "react";

function SectionContainer({ section, children }) {
  return (
    <section
      id={`${section}`}
      className={` ${
        section === "skills" || section === "works" || section === "contact"
          ? "h-auto mb-14"
          : "h-screen"
      } w-4/4 xl:w-7/12 lg:w-3/4 mx-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
