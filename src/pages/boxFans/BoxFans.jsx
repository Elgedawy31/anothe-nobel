// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";

import firstHeavy1 from "../../assets/32.png";
// import firstHeavy1 from "../../assets/first-box-1.png";
import firstHeavy2 from "../../assets/31.png";
// import firstHeavy2 from "../../assets/first-box-2.png";
import firstHeavy3 from "../../assets/38.jpg";
// import firstHeavy3 from "../../assets/first-box-3.png";
import firstHeavy4 from "../../assets/35.png";
// import firstHeavy4 from "../../assets/first-box-.png";
import firstHeavy5 from "../../assets/37.png";
// import firstHeavy5 from "../../assets/first-box-5.png";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function BoxFans() {
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
          semiHead={
            i18n.language === "en" ? "C- BOX FANS" : "C- المراوح الصندوقية"
          }
          head={
            i18n.language === "en" ? "Centrifugal Fan" : "مروحة الطرد المركزي"
          }
        />

        <ProductCard
          img={firstHeavy1}
          head={i18n.language === "en" ? "BOX FANS" : "مراوح صندوقية"}
          list={[]}
          desc={
            <>
              {i18n.language === "en"
                ? "Box fans are particularly designed for air extraction, filtration systems, and air conditioning plants where low noise emission is necessary. They are suitable for civil and industrial applications. The low noise level is due to the acoustic material that covers the ventilator."
                : "تم تصميم مراوح الصندوق بشكل خاص لاستخراج الهواء وأنظمة الترشيح ومحطات تكييف الهواء حيث يكون من الضروري إصدار ضجيج منخفض. إنها مناسبة للتطبيقات المدنية والصناعية. يرجع سبب مستوى الضجيج المنخفض إلى المادة الصوتية التي تغطي المنفاخ."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy2}
          head={i18n.language === "en" ? "IN LINE" : "خطية"}
          list={[
            i18n.language === "en"
              ? "Volume: from 100 m3/h up to 250000 m3/h"
              : "الحجم: من 100 م3/ساعة إلى 250000 م3/ساعة",
            i18n.language === "en"
              ? "Pressure from 5 mm/H20 up to 110 mm/H20"
              : "الضغط من 25 ملم/ساعة² حتى 80 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suited to ventilate and convey clean air up to a maximum temperature of 60°C. The low noise level and the medium pressure head make them ideal for industrial and residential installations."
                : "مناسبة لتهوية الهواء النظيف ونقله حتى درجة حرارة قصوى تصل إلى 60°C. يجعل مستوى الضجيج المنخفض ورأس الضغط المتوسط ​​مناسبة للغاية للتثبيتات الصناعية والسكنية."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy3}
          head={
            i18n.language === "en"
              ? "DIRECT DRIVE DOUBLE INLET"
              : "محرك مباشر مزدوج الشفرات الداخلية"
          }
          list={[
            i18n.language === "en"
              ? "Volume: from 200 m3/h up to 6500 m3/h"
              : "الحجم: من 200 م3/ساعة إلى 6500 م3/ساعة",
            i18n.language === "en"
              ? "Pressure: from 10 mm/H20 up to 80 mm/H20"
              : "الضغط: من 10 ملم/ساعة² حتى 80 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suited to ventilate and convey clean air up to a maximum temperature of 4ooc. The low noise level and the high compactness head make them ideal in ventilation plants with limited space like offices and shops."
                : "مناسبة لتهوية ونقل الهواء النظيف بدرجة حرارة قصوى تصل إلى 400 درجة مئوية. يجعل مستوى الضجيج المنخفض وارتفاع الكفاءة في التصميم المضغوط منها مثالية في محطات التهوية ذات المساحة المحدودة مثل المكاتب والمتاجر."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy4}
          head={
            i18n.language === "en"
              ? "DOUBLE INLET BELT DRIVEN"
              : "مزدوج الشفرات الداخلية بسير مدفوع"
          }
          list={[
            i18n.language === "en"
              ? "Volume: from 750 m3/h up to 500000 m3/h"
              : "الحجم: من 750 م3/ساعة إلى 500000 م3/ساعة",
            i18n.language === "en"
              ? "Pressure: from 30 mm/H20 up to 150 mm/H20"
              : "الضغط: من 30 ملم/ساعة² حتى 150 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Suitable where air extracting or filtering is necessary. The low noise level head makes them ideal for environments like offices, bars, and gymnasiums."
                : "مناسبة عندما يكون من الضروري سحب الهواء أو تصفيته. يجعل مستوى الضجيج المنخفض الرأس مثاليًا لبيئات مثل المكاتب والحانات والصالات الرياضية."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy5}
          head={
            i18n.language === "en"
              ? "PLUG FAN- SERIES NPLG"
              : "مروحة البراغي - سلسلة NPLG"
          }
          list={[
            i18n.language === "en"
              ? "Volumetric flow capacity up to 7000 cfm (118931m3/hr)"
              : "السعة التدفق الحجمي تصل إلى 7000 قدم مكعب في الدقيقة (118931 متر مكعب في الساعة)",
            i18n.language === "en"
              ? "* Maximum pressures of 8 in. wg (1984 Pa)"
              : "* الضغوط القصوى 8 بوصات. wg (1984 باسكال)",
            i18n.language === "en"
              ? "« Maximum operating temperature of 800°F (426°C)"
              : "« درجة حرارة تشغيل قصوى 800°F (426°C)",
            i18n.language === "en"
              ? "Belt or direct drive"
              : "سير أو تشغيل مباشر",
            i18n.language === "en"
              ? "* Horizontal or vertical mounting"
              : "* التركيب الأفقي أو العمودي",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "In most instances, plug fans are unhoused and rely on the plenum space around the wheel to direct airflow as required in the system. This style of fan designed with the motor, bearings, and drives out of the airstream, which allows for use in clean, contaminated, or high-temperature systems."
                : "في معظم الحالات، المراوح البرغي غير موجودة في المنزل وتعتمد على الفضاء الممتلئ حول العجلة لتوجيه تدفق الهواء كما هو مطلوب في النظام. هذا النمط من المراوح مصمم مع المحرك والمحامل والمحركات خارج تيار الهواء، مما يسمح باستخدامه في الأنظمة النظيفة أو الملوثة أو عالية الحرارة."}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default BoxFans;
