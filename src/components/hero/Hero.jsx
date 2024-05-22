import "./Hero.scss";
// @ts-ignore
import hero from "../../assets/hero.png";
// @ts-ignore
import hero2 from "../../assets/second-hero-sec.png";
// @ts-ignore
import hero3 from "../../assets/third-hero-sec.png";

import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item className="carousel-item">
        <div
          className="hero-section "
          style={{ backgroundImage: `url(${hero})` }}
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className="container">
            <h1>
              {i18n.language === "en" && "Welcome To Nobel"}
              {i18n.language === "ar" && "مرحبا بكم في نوبل"}
            </h1>
            <h2>
              {i18n.language === "en" && "Industries"}
              {i18n.language === "ar" && "الصناعات"}
            </h2>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div
          className="hero-section "
          style={{ backgroundImage: `url(${hero2})` }}
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className="container">
            <h1>
              {i18n.language === "en" && "Welcome To Nobel"}
              {i18n.language === "ar" && "مرحبا بكم في نوبل"}
            </h1>
            <h2>
              {i18n.language === "en" && "Industries"}
              {i18n.language === "ar" && "الصناعات"}
            </h2>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div
          className="hero-section "
          style={{ backgroundImage: `url(${hero3})` }}
          dir={i18n.language === "en" ? "ltr" : "rtl"}
        >
          <div className="container">
            <h1>
              {i18n.language === "en" && "Welcome To Nobel"}
              {i18n.language === "ar" && "مرحبا بكم في نوبل"}
            </h1>
            <h2>
              {i18n.language === "en" && "Industries"}
              {i18n.language === "ar" && "الصناعات"}
            </h2>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
