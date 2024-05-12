import "./products.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import { Col, Row } from "react-bootstrap";
import img_1 from "../../assets/20.jpg";
// import img_1 from "../../assets/image 14.png";
import img_2 from "../../assets/41.jpg";
// import img_2 from "../../assets/image 15.png";
import img_3 from "../../assets/44.jpg";
// import img_3 from "../../assets/image 16.png";
import img_4 from "../../assets/52.jpg";
// import img_4 from "../../assets/image 17.png";
import img_5 from "../../assets/54.jpg";
// import img_5 from "../../assets/image 18.png";
import img_6 from "../../assets/57.jpg";
// import img_6 from "../../assets/image 19.png";
import img_7 from "../../assets/46.png";
import img_8 from "../../assets/49.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Products() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="products">
      <NavBar />
      <div className="container" >
        <div className="space-between-sections home-products">
          <div className="container">
            <h1 className="text-center fs-1 mb-5 ">
              {i18n.language === "en" ? "Products" : "المنتجات"}
            </h1>

            <Row className="d-flex align-items-stretch mb-4">
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
                  <div className="image">
                    <img src={img_1} loading="lazy" alt="" width="150px" height="122px"/>
                  </div>
                  <h4 className="primary-color fs-3">
                    {i18n.language === "en"
                      ? "CENTRIFUGAL FANS"
                      : "مرواح طردية"}
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. BACKWARD IMPELLERS, WING AND SCIROCCO PROFILE, fan series NT, etc..."
                      : "مراوح نوبل الطردية مناسبة لتهوية الهواء النظيف والمواطن ذو الغبار الخفيف. المروحة الدافعة إلى الخلف، الجناح والملف الجانبي، سلسلة مرواح NT، إلخ..."}
                  </p>
                  <Link to="/products/centrifugal-fan/heavy-duty">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>

              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
                  <div className="image">
                    <img src={img_2} alt="" loading="lazy"  width="150px"/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en"
                      ? "AXial FANS VENTILATION"
                      : "مراوح محورية للتهوية"}
                  </h4>
                  <p
                    className="secondary-color lh-lg text-uppercase"
                    style={{ flex: 1 }}
                  >
                    {i18n.language === "en"
                      ? "ring-nea/d series, plate mounted, c-ducted"
                      : "سلسلة ring-nea/d، تثبيت اللوحة، تهوية الدفع"}
                  </p>
                  <Link to="/products/axial-fans">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
                  <div className="image">
                    <img src={img_3} alt="" loading="lazy"  width="150px"/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en"
                      ? "ROOF TOP FANS"
                      : "مراوح سطح السقف"}
                  </h4>
                  <p
                    className="secondary-color lh-lg text-uppercase"
                    style={{ flex: 1 }}
                  >
                    {i18n.language === "en"
                      ? "AXIAL ROOF FANS - NE series, centrifugal roof fans - nc series"
                      : "مراوح السقف المحورية - سلسلة NE، مراوح السقف الطردية - سلسلة nc"}
                  </p>
                  <Link to="/products/roof-top-fans">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
                  <div className="image">
                    <img src={img_4} alt="" loading="lazy" width="150px"/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en"
                      ? "AIR FILERING SYSTEM"
                      : "نظام تنقية الهواء"}
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "CARTRIDGE EXTRACTION & FILTRATION PLANTS, SLEEVES EXTRACTION & FILTRATION PLANTS, ACTIVE COAL FILTRATION PLANTS"
                      : "مصانع استخراج وتصفية الخراطيش، مصانع استخراج وتصفية الأكمام، مصانع تصفية الفحم النشط"}
                  </p>
                  <Link to="/products/air-filering">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
                  <div className="image">
                    <img src={img_5} alt="" loading="lazy"  width="150px"/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en"
                      ? "CUSTOM VENTILATORS"
                      : "منظومات التهوية المخصصة"}
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "ARE DESIGNED TO EXACTING SPECIFICATIONS, MEET SPECIFIC FLOW, PRESSURE, TEMPERATURE ...ETC"
                      : "مصممة وفقًا لمواصفات دقيقة، تلبي تدفقًا محددًا وضغطًا ودرجة حرارة ... إلخ"}
                  </p>
                  <Link to="/products/custom-venilrators">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>

              
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
                  <div className="image smoke" >
                    <img src={img_7} alt="" loading="lazy" width={"110px"}/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en" ? "smoke axial inline fans" : "مراوح الدخان الخطية المحورية"}
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings – car parkings -etc..)"
                      : "يُستخدم هذا النوع من المراوح لإخراج الدخان من مختلف أنواع التطبيقات مثل (الأنفاق - المباني ذات الارتفاع العالي - مواقف السيارات - الخ)"}
                  </p>
                  <Link to="/products/smoke-axial">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>
              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
                  <div className="image smoke" >
                    <img src={img_8} alt="" loading="lazy" width={"105px"}/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en" ? "smoke centrifugal fans" : "مراوح الدخان الطردية" }
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "This series is used for smoke evacuation from various types of Since more static pressure range could be achieved than axial fans and also more durable since it’s body construction is reinforced withstand high temperatures more than 900 °c "
                      : "تُستخدم هذه السلسلة لشفط الدخان من مختلف أنواع المباني. يمكنها تحقيق نطاق أوسع من الضغط الثابت مقارنة بالمراوح المحورية وهي أكثر متانة بسبب بنيتها المقواة، والتي تتحمل درجات حرارة تزيد عن 900 درجة مئوية."}
                  </p>
                  <Link to="/products/smoke-centrifugal">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>

              <Col
                dir={i18n.language === "en" ? "ltr" : "rtl"}
                lg={4}
                md={6}
                className="mb-4"
                data-aos="zoom-in"
              >
                <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
                  <div className="image">
                    <img src={img_6} alt="" loading="lazy" width="150px"/>
                  </div>
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en" ? "ACCESSORIES" : "الملحقات"}
                  </h4>
                  <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                    {i18n.language === "en"
                      ? "DAMPERS, AIR OUTLETS"
                      : "الواقيات، منافذ الهواء"}
                  </p>
                  <Link to="/products/accessories">
                    <button className="main-btn">
                      {i18n.language === "en" ? "See More" : "عرض المزيد"}
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
