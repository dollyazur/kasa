import React from "react";

import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Card.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />

      <Banner />

      <Cards />

      <Footer />
    </div>
  );
}

export default Home;
