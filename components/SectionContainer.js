import React from "react";

function SectionContainer({ section, children }) {
  return (
    <section
      id={`${section}`}
      className={` mb-24 sm:mb-0 h-screen w-4/4 xl:w-7/12 lg:w-3/4 m-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light ${
        section === "skills" || (section === "contact" && "mt-10")
      }`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
