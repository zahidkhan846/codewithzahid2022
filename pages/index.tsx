import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <div className="header-navbar">
            <p className="logo">
              codewith<span className="zahid">zahid</span>
            </p>
            <nav>
              <ul className="nav-items">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#" className="primary-btn">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header-content"></div>
            </nav>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
