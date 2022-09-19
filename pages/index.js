import React, { useEffect, useRef } from "react";
import Me from "../components/Me";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("🚀 ~ file: index.js ~ line 12 ~ observer ~ entry", entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("toggleShow");
      } else {
        entry.target.classList.remove("toggleShow");
      }
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <main className=" bg-Dark dark:bg-Light">
      <Me />
      <About />
      <Skills myRef={myRef} />
    </main>
  );
}
