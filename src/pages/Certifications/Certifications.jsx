import "./Certifications.css"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import img_certifications_1 from "../../assets/image 23.png"
import img_certifications_2 from "../../assets/image 21.png"
import img_certifications_3 from "../../assets/image 22.png"


import img_clinet_1 from "../../assets/image 24.png"
import img_clinet_2 from "../../assets/image 25.png"
import img_clinet_3 from "../../assets/image 26.png"
import img_clinet_4 from "../../assets/image 27.png"
import img_clinet_5 from "../../assets/image 28.png"
import img_clinet_6 from "../../assets/image 29.png"
import img_clinet_7 from "../../assets/image 30.png"
import img_clinet_8 from "../../assets/image 31.png"
import img_clinet_9 from "../../assets/image 32.png"
import img_clinet_10 from "../../assets/image 33.png"
import img_clinet_11 from "../../assets/image 34.png"
import img_clinet_12 from "../../assets/image 35.png"
import img_clinet_13 from "../../assets/image 36.png"
import img_clinet_14 from "../../assets/image 37.png"
import img_clinet_15 from "../../assets/image 38.png"
import img_clinet_16 from "../../assets/image 39.png"
import img_clinet_17 from "../../assets/image 40.png"
import img_clinet_18 from "../../assets/image 41.png"
import img_clinet_19 from "../../assets/image 42.png"
import img_clinet_20 from "../../assets/image 43.png"
import img_clinet_21 from "../../assets/image 44.png"
import img_clinet_22 from "../../assets/image 45.png"
import img_clinet_23 from "../../assets/image 46.png"
import img_clinet_24 from "../../assets/image 47.png"
import img_clinet_25 from "../../assets/image 48.png"
import img_clinet_26 from "../../assets/image 49.png"
import img_clinet_27 from "../../assets/image 50.png"
import img_clinet_28 from "../../assets/image 51.png"
import img_clinet_29 from "../../assets/image 52.png"
import img_clinet_30 from "../../assets/image 53.png"
import img_clinet_31 from "../../assets/image 54.png"
import img_clinet_32 from "../../assets/image 55.png"
import img_clinet_33 from "../../assets/image 56.png"
import img_clinet_34 from "../../assets/image 57.png"
import img_clinet_35 from "../../assets/image 58.png"
import img_clinet_36 from "../../assets/image 59.png"
import img_clinet_37 from "../../assets/image 60.png"
import img_clinet_38 from "../../assets/image 61.png"
import img_clinet_39 from "../../assets/image 62.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



function Certifications() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="certifications">
      <NavBar/>

        <div className="container" style={{marginBottom:"4rem"}}>
        <h1>{i18n.language === "en" ? "Certifications" : "الشهادات"}</h1>


            <div className="parent_certifications">
                 <div className="image">
                  <img src={img_certifications_1} alt="" loading="lazy"/>
                 </div>
                 <div className="image">
                  <img src={img_certifications_2} alt="" loading="lazy"/>
                 </div>
                 <div className="image">
                  <img src={img_certifications_3} alt="" loading="lazy"/>
                 </div>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Certifications