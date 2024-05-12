// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import { Col, Row } from "react-bootstrap";

import firstHeavy1 from "../../assets/53.jpg";
// import firstHeavy1 from "../../assets/first-air.png";
import firstHeavy2 from "../../assets/52.jpg";
// import firstHeavy2 from "../../assets/second-air.png";
import firstHeavy3 from "../../assets/51.jpg";
// import firstHeavy3 from "../../assets/third-air.png";

import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function AirFilering() {
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
          head={
            i18n.language === "en"
              ? "EXTRACTION PLANTS AND AIR FILTERING SYSTEM"
              : "مصانع الاستخراج وأنظمة تنقية الهواء"
          }
        />
        <ProductCard
          img={firstHeavy1}
          head={
            i18n.language === "en"
              ? "CARTRIDGE EXTRACTION AND FILTRATION PLANTS"
              : "مصانع استخراج وترشيح الكرتوش"
          }
          list={[
            i18n.language === "en"
              ? "Volume up to 150000 m3/h"
              : "حجم يصل إلى 150000 متر مكعب/ساعة",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Cartridges filter at high efficiency also with very thin dust. The limited sizes allow the installation inside of the production plants and close to the source of pollution. Suitable for use by chemical, foodstuff, metallurgic and ceramic working industries."
                : "يقوم المرشحون بتصفية الكرتوش بكفاءة عالية أيضًا مع الغبار الرقيق جدًا. الأحجام المحدودة تسمح بالتثبيت داخل مصانع الإنتاج وبالقرب من مصدر التلوث. مناسبة للاستخدام في صناعات الكيماويات والأغذية والمعادن والسيراميك."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy2}
          head={
            i18n.language === "en"
              ? "SLEEVES EXTRACTION AND FILTRATION PLANTS"
              : "مصانع استخراج وترشيح الأكمام"
          }
          list={[
            i18n.language === "en"
              ? "Volume up to 250000 m3/h"
              : "حجم يصل إلى 250000 متر مكعب/ساعة",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Sleeves filter at high efficiency. Suitable in all environment where there is a need to separate dry dust. Suitable for use by chemical, petrochemical and ceramic working industries."
                : "تقوم الأكمام بتصفية بكفاءة عالية. مناسبة في جميع البيئات التي تحتاج إلى فصل الغبار الجاف. مناسبة للاستخدام في صناعات الكيماويات والبتروكيماويات والسيراميك."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy3}
          head={
            i18n.language === "en"
              ? "ACTIVE COAL FILTRATION PLANTS"
              : "مصانع ترشيح الفحم النشط"
          }
          list={[
            i18n.language === "en"
              ? "Volume flow up to 2000 m3/h"
              : "تدفق الحجم يصل إلى 2000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure up to 50 mm/H20"
              : "الضغط يصل إلى 50 ملم/ساعة²",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "Compact filtration plant easy to move. environments where industrial processes creates gas and smoke emissions. Smokes exhausted are profiteered and conveyed to the absolute filter of large loss surface. A further activated carbon filter is of easy insertion to pull down odors."
                : "مصنع ترشيح مدمج سهل النقل. البيئات التي تنشأ فيها عمليات صناعية انبعاثات الغاز والدخان. يتم استغلال الدخان المخرج ونقله إلى مرشح مطلق الكبيرة. مرشح الكربون المنشط إضافي سهل الإدراج للتخلص من الروائح."}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default AirFilering;
