// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";


import firstHeavy1 from "../../assets/40.jpg";
// import firstHeavy1 from "../../assets/axial-fans-1.png";
import firstHeavy2 from "../../assets/41.jpg";
// import firstHeavy2 from "../../assets/axial-fans-2.png";
import firstHeavy3 from "../../assets/39.png";
// import firstHeavy3 from "../../assets/axial-fans-3.png";

import firstHeavy4 from "../../assets/42.png";
// import firstHeavy4 from "../../assets/axial-fans-4.png";

import firstHeavy5 from "../../assets/43.png";
// import firstHeavy5 from "../../assets/axial-fans-5.png";


import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function AxialFans() {
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
          head={
            i18n.language === "en"
              ? "Axial FANS VENTILATION"
              : "تهوية المراوح المحورية"
          }
        />

        <ProductCard
          img={firstHeavy1}
          head={
            i18n.language === "en"
              ? "A- RING - NEA/D series"
              : "المروحة النفاثة - سلسلة NEA/D"
          }
          list={
            i18n.language === "en"
              ? [
                  "Wheel sizes from 400 mm up to 1000 mm",
                  "Volume: from 1000 m3/h up to 43000 m3/h",
                  "Pressure from 3 mm/H20 up to 25 mm/H20",
                ]
              : [
                  "أحجام العجلة من 400 مم حتى 1000 مم",
                  "الحجم: من 1000 متر مكعب/ساعة إلى 43000 متر مكعب/ساعة",
                  "الضغط من 3 مم/ساعة² إلى 25 مم/ساعة²",
                ]
          }
          desc={
            <>
              {i18n.language === "en"
                ? "The NEA/D series are primarily designed for air ventilation, either supply or exhaust duty."
                : "تم تصميم سلسلة NEA/D بشكل أساسي للتهوية الهوائية، سواء كانت للتوريد أو للصرف."}
            </>
          }
        />

        <ProductCard
          img={firstHeavy2}
          head={
            i18n.language === "en"
              ? "B- PLATE MOUNTED - NET/D series"
              : "مروحة التوجيه الفولاذية - سلسلة NET/D"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 250 mm up 710 mm"
              : "أحجام العجلة من 250 مم حتى 710 ملم",
            i18n.language === "en"
              ? "Volume flow from 600 m3/h to 180000 m3/h"
              : "تدفق الحجم من 600 متر مكعب/ساعة إلى 180000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure from 3 mm/H20 up to 25 mm/H20"
              : "الضغط من 3 مم/ساعة² إلى 25 مم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "The NET/D series are primarily designed for air ventilation, either supply or exhaust duty."
                : "تم تصميم سلسلة NET/D بشكل أساسي للتهوية الهوائية، سواء كانت للتوريد أو للعادم."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy3}
          head={
            i18n.language === "en"
              ? "DUCTED DIRECT DRIVEN WING BLADES - NEI/D series"
              : "المراوح ذات الأجنحة المباشرة الموجهة - سلسلة NEI/D"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 400 mm up to 2240 mm"
              : "أحجام العجلة من 400 مم حتى 2240 مم",
            i18n.language === "en"
              ? "Volume: from 600 m3/h up to 250000 m3/h"
              : "تدفق الحجم من 600 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure: from 5 mm/H20 up to 100 mm/H20"
              : "الضغط: من 5 مم/ساعة² إلى 100 مم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600°C."
                : "مناسبة لشفط الدخان والهواء الرطب والمتسخ حتى درجة حرارة قصوى تصل إلى 60 درجة مئوية."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy4}
          head={
            i18n.language === "en"
              ? "DUCTED DIRECT DRIVEN - EIH series"
              : "سلسلة EIH - محرك مباشر مدعمة"
            }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 400 mm up to 2240 mm"
              : "أحجام العجلة من 400 ملم إلى 2240 ملم",
            i18n.language === "en"
              ? "Volume: from 1200 m3/h up to 250000 m3/h"
              : "الحجم: من 1200 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure: from 5 mm/H20 up to 100 mm/H20"
              : "الضغط: من 5 ملم/ساعة² إلى 100 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 600°C."
                : "مناسبة لشفط الدخان والهواء الرطب والمتسخ حتى درجة حرارة قصوى تصل إلى 60 درجة مئوية."}
            </>
          }
        />

        <ProductCard
          img={firstHeavy5}
          head={
            i18n.language === "en"
              ? "DUCTED DOUBLE INLET FANS - NEI2/D series"
              : "المراوح ذات المداخل المزدوجة المجهزة بالمداخل - سلسلة NEI2/D"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 500 mm up to 1250 mm"
              : "أحجام العجلة من 500 ملم إلى 1250 ملم",
            i18n.language === "en"
              ? "Volume: from 18000 m3/h up to 175000 m3/h"
              : "الحجم: من 18000 متر مكعب/ساعة إلى 175000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure: from 152 newton up to newton"
              : "الضغط: من 152 نيوتن إلى نيوتن",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suitable for the exhaust of smoke, dusty foul and humid air up to a maximum temperature of 60°C. The product has been especially developed and designed to create the required ventilation within tunnels wherever both high free air thrust and large air volumes are needed such as ventilation plants for boat galleries, tunnels and mine."
                : "مناسبة لشفط الدخان والهواء الرطب والمتسخ حتى درجة حرارة قصوى تصل إلى 60 درجة مئوية. تم تطوير المنتج خصيصًا وتصميمه لإنشاء التهوية المطلوبة داخل الأنفاق حيث يكون هناك حاجة إلى دفع هواء حر ذو عزم عالي وحجم هواء كبير مثل محطات التهوية للمعارض البحرية والأنفاق والمناجم."}
            </>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default AxialFans;
