// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";

import firstHeavy1 from "../../assets/44.jpg";
// import firstHeavy1 from "../../assets/roof-top-fans-1.png";

import firstHeavy2 from "../../assets/45.jpg";
// import firstHeavy2 from "../../assets/roof-top-fans-2.png";

import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function RoofTopFans() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <NavBar />
      <div className="container">
        <ProductHead
          head={i18n.language === "en" ? "ROOF TOP FANS" : "مروحة السطح"}
        />
        <ProductCard
          img={firstHeavy1}
          head={
            i18n.language === "en"
              ? "AXIAL ROOF FANS - NE series"
              : "المروحة الشفافة على السطح - سلسلة NE"
          }
          list={[
            i18n.language === "en"
              ? "wheel sizes from 400 mm up to 900 mm"
              : "أحجام العجلة من 400 ملم إلى 900 ملم",
            i18n.language === "en"
              ? "volume flow from 2300 m3/h up to 530000 m3/h"
              : "تدفق الحجم من 2300 متر مكعب/ساعة إلى 530000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "pressure up to 2 mm/h20 UP TO 30 mm/h2O"
              : "الضغط يصل إلى 2 ملم/ساعة² حتى 30 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "The NE series is widely used in civil and industrial ventilation plants. They are mainly suitable as exhausters for high air volumes. The maximum of the fluid in continuous operation is 400C."
                : "تُستخدم سلسلة NE على نطاق واسع في محطات التهوية المدنية والصناعية. إنها مناسبة بشكل رئيسي كمنفث لحجم هواء عالي. الحد الأقصى للسائل في التشغيل المستمر هو 400 درجة مئوية."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy2}
          head={
            i18n.language === "en"
              ? "CENTRIFUGAL ROOF FANS - NC series"
              : "المروحة الطاردة للسطح - سلسلة NC"
          }
          list={[
            i18n.language === "en"
              ? "wheel sizes from 210 mm up to 620 mm"
              : "أحجام العجلة من 210 ملم إلى 620 ملم",
            i18n.language === "en"
              ? "volume flow from 300 m3/h up to 20000 m3/h"
              : "تدفق الحجم من 300 متر مكعب/ساعة إلى 20000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "pressure up to 2 mm/h20 UP TO 65 mm/h2O"
              : "الضغط يصل إلى 2 ملم/ساعة² حتى 65 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "The NC series is widely used in civil and industrial ventilation plants. They are mainly suitable as air exhausters. The maximum of the fluid in continuous operation is 400°C."
                : "تُستخدم سلسلة NC على نطاق واسع في محطات التهوية المدنية والصناعية. إنها مناسبة بشكل رئيسي كمنفث هواء. الحد الأقصى للسائل في التشغيل المستمر هو 40 درجة مئوية."}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default RoofTopFans;
