// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import image_1 from "../../assets/49.png"
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Smokecentrifugal() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className=" ">
      <NavBar />
      <div className="container">
        <ProductHead
          semiHead={
            i18n.language === "en"
              ? ""
              : ""
          }
          head={
            i18n.language === "en" ? "smoke centrifugal fans" : "مراوح الطرد المركزي للدخان"
          }
        />

        <ProductCard
          img={image_1}
          head={i18n.language === "en" ? " Centrifugal smoke Fan series – VBRS (400°c/2hrs.)" : "سلسلة المراوح الطرد المركزي للدخان - VBRS (400°م/2 ساعة)"}
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 310 mm up to 1800 mm"
              : "أحجام العجلة من 310 ملم حتى 1800 ملم",
            i18n.language === "en"
              ? "Volume flow from 2000 m3/h up to 250000 m3/h"
              : "تدفق الحجم من 2000 متر مكعب/ساعة حتى 250000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure from 30 mm/H2O up to 350 mm/H2O"
              : "الضغط من 30 ملم/ساعة² حتى 350 ملم/ساعة²",
            i18n.language === "en"
              ? "Motor thermal insulation (class F)"
              : "عزل حراري للمحرك (فئة F)"
          ]}
          
          desc={
            <>
              {i18n.language === "en"
                ? "This series is used for smoke evacuation from various types of buildings. It can achieve a wider static pressure range than axial fans and is more durable due to its reinforced construction, capable of withstanding temperatures exceeding 900°C."
                : "تُستخدم هذه السلسلة لشفط الدخان من مختلف أنواع المباني. يمكنها تحقيق نطاق أوسع من الضغط الثابت مقارنة بالمراوح المحورية وهي أكثر متانة بسبب بنيتها المقواة، والتي تتحمل درجات حرارة تزيد عن 900 درجة مئوية."}
            </>
                    
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Smokecentrifugal;
