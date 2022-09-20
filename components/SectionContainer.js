import React from "react";

function SectionContainer({ section, children }) {
  return (
    <section
      id={`${section}`}
      className={`h-screen w-3/4 lg:w-2/4 m-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light ${
        section === "skills" && "mt-10"
      }`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
