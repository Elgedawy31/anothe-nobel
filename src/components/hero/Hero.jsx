import "./Hero.scss";
// @ts-ignore
import hero from "../../assets/hero.png";
import { useTranslation } from 'react-i18next';


function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero-section " style={{ backgroundImage: `url(${hero})` }} dir={i18n.language === "en" ? "ltr" : "rtl"}>
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
  );
}

export default Hero;
