// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import { Col, Row } from "react-bootstrap";
import firstHeavy1 from "../../assets/54.jpg";
// import firstHeavy1 from "../../assets/custom-ve.png";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function CustomVenilrators() {
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
              ? "CUSTOM VENTILATORS"
              : "المنتجات المخصصة للتهوية"
          }
        />
        <ProductCard
          img={firstHeavy1}
          head={
            i18n.language === "en"
              ? "CUSTOM VENTILATORS"
              : "منتجات التهوية المخصصة"
          }
          list={[]}
          desc={
            <>
              {i18n.language === "en"
                ? "NOBEL custom-engineered products are designed to answer to exacting specifications. Designs meet specific flow, pressure, temperature, leak integrity, and configuration requirements. NOBEL technical department is at your disposal to study the project."
                : "تم تصميم منتجات نوبل المخصصة للهندسة بدقة لتلبية المواصفات الصارمة. تلبي التصاميم متطلبات تدفق محددة وضغط ودرجة حرارة وسلامة التسرب والتكوين. إدارة الفنية في نوبل تتحدث معك لدراسة المشروع."}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default CustomVenilrators;
