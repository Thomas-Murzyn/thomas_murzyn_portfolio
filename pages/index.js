import React, { useEffect, useRef } from "react";
import Me from "../components/Me";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Head from "next/head";
import Contact from "../components/Contact";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";

export default function Home({ showMiniNav }) {
  return (
    <>
      <Head>
        <title>Thomas Murzyn Portfolio</title>
        <meta name="description" content="Portfolio de Thomas Murzyn" />
      </Head>

      <main className=" bg-Dark dark:bg-Light">
        <Me />
        <About />
        <Skills />
        <Works />
        <Contact />
        {showMiniNav && <MiniNav />}
        <Footer />
      </main>
    </>
  );
}
