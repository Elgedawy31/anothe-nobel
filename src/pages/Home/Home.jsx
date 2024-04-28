import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Discover from "../../components/discover/Discover";
import Locations from "../../components/locations/Locations";
import History from "../../components/history/History";
import Industirs from "../../components/industires/Industirs";
import HomeProducts from "../../components/homeProducts/HomeProducts";
import Categories from "../../components/categories/Categories";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();


  return (
    <div style={{overflowX:"hidden"}}>
      <NavBar />
      <Hero />
      <div className="explore-home space-between-sections">
          {i18n.language === "en" && "Explore"}
           {i18n.language === "ar" && "استكشف"}
        </div>
      <Discover />
      <Locations />
      <History />
      <Industirs />
      <HomeProducts />
      {/* <Categories /> */}
      <Footer />
    </div>
  );
}

export default Home;
