import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Thomas Murzyn Portfolio</title>
        <meta name="description" content="Portfolio de Thomas Murzyn" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
