// Vendors
import React from "react";
// Components
import Head from "next/head";
import Image from "next/image";
// Styles
import styles from "../styles/home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortify - Link shortener</title>
        <meta name="description" content="Generated and Deployed with Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        Welcome to the <strong className="strong">Shortify</strong> link
        shortener
      </header>
      <footer>
        Checkout my other projects at my Github{" "}
        <strong className="strong">
          <a href="https://github.com/jofaval">@jofaval</a>
        </strong>
      </footer>
    </div>
  );
};

export default Home;
