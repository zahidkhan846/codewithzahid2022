import type { NextPage } from "next";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Logo from "../components/ui/Logo";
import Meta from "../components/utils/Meta";
import SpecializationPage from "./specialization";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <header>
        <div className="container">
          <div className="header-navbar">
            <Logo />
            <Navbar />
          </div>
          <Hero />
        </div>
      </header>
      <main>
        <SpecializationPage />
        <h1>Projects</h1>
      </main>
    </div>
  );
};

export default Home;
