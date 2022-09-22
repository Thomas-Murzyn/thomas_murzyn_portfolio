import React, { useEffect, useRef } from "react";
import Me from "../components/Me";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Head from "next/head";
import Contact from "../components/Contact";
import MiniNav from "../components/MiniNav";

export default function Home({ showMiniNav }) {
  const myRef = useRef();

  useEffect(() => {
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
        <Contact />
        {showMiniNav && <MiniNav />}
      </main>
    </>
  );
}
