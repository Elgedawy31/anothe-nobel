import { Card, Col, Row } from "react-bootstrap";
import { BiWind } from "react-icons/bi";
import { GrFan } from "react-icons/gr";
import { BsFan } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { CgShoppingBag } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import img_7 from "../../assets/46.png";
import { FaFan } from "react-icons/fa";
import { LiaFanSolid } from "react-icons/lia";




function HomeProducts() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  return (
    <div className="space-between-sections home-products" style={{marginTop:"5rem"}}>
      <div className="container">
        <h1 className="text-center fs-1 mb-4 ">
          {i18n.language === "en" ? "NOBEL Products" : "منتجات نوبل"}
        </h1>

        <h3 className="secondary-color text-center fs-4 lh-base mb-5">
          {i18n.language === "en"
            ? "NOBEL is the leading supplier of air movement, control and conditioning equipment"
            : "نوبل هي الشركة الرائدة في توريد معدات حركة الهواء والتحكم وتكييف الهواء"}
        </h3>

        <Row className="d-flex align-items-stretch mb-4">
          <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
              <BiWind fontSize={"5rem"} className="secondary-color" />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en"
                  ? "Centrifugal fans"
                  : "المراوح الطردية"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. BACKWARD IMPELLERS, WING AND SCIROCCO PROFILE, fan series NT, etc..."
                  : "المراوح الطردية من نوبل مناسبة لتهوية الهواء النظيف والمتراكم قليلاً من الغبار. مع وجود ناقلات خلفية وملف جناح وسكيروكو، سلسلة المروحة NT، إلخ..."}
              </p>

              <Link to="/products/centrifugal-fan/heavy-duty">
                <button className="main-btn">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
                </button>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
              <GrFan fontSize={"5rem"} className="secondary-color" />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en"
                  ? "Axial fans ventilation"
                  : "مراوح محورية للتهوية"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "ring-nea/d series, plate mounted, c-ducted"
                  : "سلسلة ring-nea/d، مثبتة بالألواح، مكيفة"}
              </p>

              <Link to="/products/axial-fans">
                <button className="main-btn">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
                </button>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
              <BsFan fontSize={"5rem"} className="secondary-color" />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en" ? "Roof top fans" : "مراوح على السطح"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "AXIAL ROOF FANS - NE series, centrifugal roof fans - NC series"
                  : "مراوح على السطح المحورية - سلسلة NE، مراوح على السطح الطردية - سلسلة NC"}
              </p>

            <Link to="/products/roof-top-fans">
                <button className="main-btn">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
                </button>
            </Link>
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
              <GiComputerFan fontSize={"5rem"} className="secondary-color" />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en"
                  ? "Air filtering system"
                  : "نظام تصفية الهواء"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "CARTRIDGE EXTRACTION & FILTRATION PLANTS, SLEEVES EXTRACTION & FILTRATION PLANTS, ACTIVE COAL FILTRATION PLANTS"
                  : "محطات استخراج وتصفية الخراطيش، محطات استخراج وتصفية الأكمام، محطات تصفية الفحم النشط"}
              </p>

            <Link to="/products/air-filering">
                <button className="main-btn">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
                </button>
            </Link>
            </div>
          </Col>

        

              <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start mr-3  home-products-card p-4 ">
              <LiaCrosshairsSolid
                fontSize={"5rem"}
                className="secondary-color"
              />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en"
                  ? "Custom ventilators"
                  : "منظمات تهوية مخصصة"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "ARE DESIGNED TO EXACTING SPECIFICATIONS, MEET SPECIFIC FLOW, PRESSURE, TEMPERATURE...ETC"
                  : "مصممة وفقًا للمواصفات الدقيقة، تلبي التدفق والضغط ودرجة الحرارة المحددة...الخ"}
              </p>

              <Link to="/products/custom-venilrators">
                <button className="main-btn">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
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
                <FaFan
                fontSize={"5rem"}
                className="secondary-color"
              />
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en" ? "Smoke axial inline fans" : "مراوح الدخان الخطية المحورية"}
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
                <LiaFanSolid 
                 fontSize={"5rem"}
                 className="secondary-color"
                />
                  <h4 className="primary-color fs-3 ">
                    {i18n.language === "en" ? "Smoke centrifugal fans" : "مراوح الدخان الطردية" }
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

        
        
          <Col lg={4} md={6} className="mb-4" data-aos="zoom-in">
            <div className="d-flex flex-column gap-4 h-100 align-items-center justify-content-start   home-products-card p-4 ">
              <CgShoppingBag fontSize={"5rem"} className="secondary-color" />
              <h4 className="primary-color fs-3 ">
                {i18n.language === "en" ? "Accessories" : "ملحقات"}
              </h4>

              <p className="secondary-color lh-lg" style={{ flex: 1 }}>
                {i18n.language === "en"
                  ? "DAMPERS, AIR OUTLETS"
                  : "المنظمات، منافذ الهواء"}
              </p>

              <Link to="/products/accessories">
                <button className="main-btn ">
                  {i18n.language === "en" ? "See More" : "رؤية المزيد"}
                </button>
              </Link>
            </div>
          </Col>

    
            

        </Row>

        <div className="d-flex justify-content-center">
          <button className="main-btn " onClick={() => navigate('/products')}>
            {i18n.language === "en" ? "Show All Products" : "عرض جميع المنتجات"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts