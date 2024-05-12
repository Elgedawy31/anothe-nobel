// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import { Col, Row } from "react-bootstrap";
import firstHeavy1 from "../../assets/57.jpg";
// import firstHeavy1 from "../../assets/accessories-1.png";
import firstHeavy2 from "../../assets/56.jpg";
// import firstHeavy2 from "../../assets/accessories-2.png";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Accessories() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <NavBar />
      <div className="container">
        <ProductHead head={i18n.language === "en" ? "Accessories" : "ملحقات"} />
        <ProductCard
          img={firstHeavy1}
          head={i18n.language === "en" ? "A- DAMPERS" : "أ- القوابض"}
          list={[]}
          desc={
            <>
              {i18n.language === "en"
                ? "A damper is a valve or plate that stops or regulates the flow of air inside a duct, chimney, VAV box, air handler, or other air handling equipment. A damper may be used to cut off central air conditioning (heating or cooling) to an unused room, or to regulate it for room-by-room temperature and climate control. Its operation can be manual or automatic. Manual dampers are turned by a handle on the outside of a duct. Automatic dampers are used to regulate airflow constantly and are operated by electric or pneumatic motors, in turn controlled by a thermostat building automation system."
                : "القاطع هو صمام أو لوحة توقف أو تنظم تدفق الهواء داخل القناة أو المدخنة أو صندوق VAV أو معدات التدفئة أو التكييف الهوائي الأخرى. يمكن استخدام القاطع لقطع تكييف الهواء المركزي (التدفئة أو التبريد) إلى غرفة غير مستخدمة، أو لتنظيمه لتحكم درجة الحرارة والمناخ لغرفة بغرفة. يمكن أن تكون عمليتها يدوية أو تلقائية. تتم تدوير القوابض اليدوية بواسطة مقبض على الجانب الخارجي للقناة. يتم استخدام القوابض التلقائية لتنظيم تدفق الهواء باستمرار وتتحكم فيها محركات كهربائية أو هوائية، بدورها تتحكم فيها نظام الأتمتة للمباني."}
            </>
          }
        />
        <ProductCard
          img={firstHeavy2}
          head={i18n.language === "en" ? "B- AIR OUTLETS" : "ب- مخارج الهواء"}
          list={[]}
          desc={
            <>
              {i18n.language === "en"
                ? "NOBEL has a wide range of aluminum grilles designed for use as supply and exhaust air devices and transfer air units for example in offices and commercial premises. Product range includes grilles for wall, ceiling, floor, windowsill, and door mounting."
                : "تحتوي NOBEL على مجموعة واسعة من الشبكات الألومنيوم المصممة للاستخدام كأجهزة توريد وتهوية الهواء ووحدات نقل الهواء على سبيل المثال في المكاتب والمنشآت التجارية. تتضمن مجموعة المنتجات شبكات للتركيب على الحائط والسقف والأرضية والشرفة والباب."}
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default Accessories;
