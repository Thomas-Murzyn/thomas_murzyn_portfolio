import React, { useEffect, useRef } from "react";
import Me from "../components/Me";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Head from "next/head";

export default function Home() {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        entry.target.classList.add("toggleShow");
      } else {
        entry.target.classList.remove("toggleShow");
      }
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <Head>
        <title>Thomas Murzyn Portfolio</title>
        <meta name="description" content="Portfolio de Thomas Murzyn" />
      </Head>

      <main className=" bg-Dark dark:bg-Light">
        <Me />
        <About />
        <Skills myRef={myRef} />
        <Works />
      </main>
    </>
  );
}
