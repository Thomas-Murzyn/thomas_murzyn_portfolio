import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showMiniNav, setShowMiniNav] = useState(false);
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Thomas Murzyn Portfolio</title>
        <meta name="description" content="Portfolio de Thomas Murzyn" />
      </Head>
      <Header showMiniNav={showMiniNav} setShowMiniNav={setShowMiniNav} />
      <Component showMiniNav={showMiniNav} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
