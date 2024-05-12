// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";

import firstHeavy1 from "../../assets/29.jpg";
// import firstHeavy1 from "../../assets/transport-series-1.png";
import firstHeavy2 from "../../assets/30.jpg";
// import firstHeavy2 from "../../assets/transport-series-2.png";
import firstHeavy3 from "../../assets/34.jpg";
// import firstHeavy3 from "../../assets/transport-series-3.png";
import firstHeavy4 from "../../assets/30.jpg";
// import firstHeavy4 from "../../assets/transport-series-4.png";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function TransportSeries() {
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
              ? "B- TRANSPORT - NT series"
              : "النقل - سلسلة NT"
          }
          head={
            i18n.language === "en" ? "Centrifugal Fan" : "مروحة الطرد المركزي"
          }
        />

        <ProductCard
          img={firstHeavy1}
          head={i18n.language === "en" ? "Fan series NT" : "سلسلة المراوح NT"}
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 300 mm up to1600 mm"
              : "أحجام العجلة: من 300 ملم إلى 1600 ملم",
            i18n.language === "en"
              ? "Volume flow from 1000 m3/h up to 100000 m3/h"
              : "تدفق الحجم: من 1000 متر مكعب/ساعة إلى 100000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure up to 700 mm/H20"
              : "الضغط: يصل إلى 700 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "is suitable for the exhaust of dusty air and transportation of filamentous substances. Low, medium and high pressure models with various volume flow for the different necessities"
                : "مناسب لشفط الهواء الغبار ونقل المواد الأليافية. النماذج ذات الضغط المنخفض والمتوسط ​​والعالي مع تدفق حجم مختلف للاحتياجات المختلفة"}
            </>
          }
        />
        <ProductCard
          img={firstHeavy2}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADES - series NTRO"
              : "شفرات الرجوع - سلسلة NTRO"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 300 mm up to1600 mm"
              : "أحجام العجلة من 300 مم حتى 1600 مم",
            i18n.language === "en"
              ? "Volume: from 1000 m3/h up to 100000 m3/h"
              : "الحجم: من 1000 م3/ساعة إلى 100000 م3/ساعة",
            i18n.language === "en"
              ? "Pressure:  up to 700 mm/H2o"
              : "الضغط: يصل إلى 700 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "These types of fan are designed for the handling of air, fumes or gases or where light concentration of dust or material are present."
                : "تم تصميم هذه الأنواع من المراوح للتعامل مع الهواء أو البخار أو الغازات أو حيث توجد تركيز خفيف من الغبار أو المواد."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy3}
          head={
            i18n.language === "en"
              ? "RADIAL BLADES - series NTRA"
              : "الشفرات الشعاعية - سلسلة NTRA"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 300 mm up to1600 mm"
              : "أحجام العجلة من 300 مم حتى 1600 مم",
            i18n.language === "en"
              ? "Volume: from 1000 m3/h up to 100000 m3/h"
              : "الحجم: من 1000 م3/ساعة إلى 100000 م3/ساعة",
            i18n.language === "en"
              ? "Pressure:  up to 700 mm/H2o"
              : "الضغط: يصل إلى 700 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "This type of fan is designed for the handling of air, fumes or gases either clean or containing dry granular material, dust exhaust from buffing and grinding wheels, conveying all types of materials."
                : "تم تصميم هذا النوع من المراوح للتعامل مع الهواء أو البخار أو الغازات إما نظيفة أو تحتوي على مواد جافة حبيبية، وتفريغ الغبار من العجلات الدوارة وعجلات الطحن، ونقل جميع أنواع المواد."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy4}
          head={
            i18n.language === "en"
              ? "OPEN BLADES - series NTAP"
              : "الشفرات المفتوحة - سلسلة NTAP"
          }
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 300 mm up to1600 mm"
              : "أحجام العجلة من 300 مم حتى 1600 مم",
            i18n.language === "en"
              ? "Volume: from 1000 m3/h up to 100000 m3/h"
              : "الحجم: من 1000 م3/ساعة إلى 100000 م3/ساعة",
            i18n.language === "en"
              ? "Pressure:  up to 700 mm/H2o"
              : "الضغط: يصل إلى 700 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "This type of fan is designed to convey or handle air or gases containing material. It is ideal for sticky, heavy or abrasive dust problems."
                : "تم تصميم هذا النوع من المراوح لنقل الهواء أو التعامل مع الغازات الناتجة عن المواد. إنه مثالي لمشاكل الغبار اللزج أو الثقيل أو الكاشط."}
            </>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default TransportSeries;
