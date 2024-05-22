import React from "react";
import { Card, Col, Row } from "react-bootstrap";
// @ts-ignore
import discoverImg from "../../assets/image 3.png";
import { useTranslation } from "react-i18next";

function Discover() {
  const { t, i18n } = useTranslation();
  return (
    <Card className="discover-sec bg-color position-relative  ">
      <div className="container mt-3 ">
        <Card.Body>
          <div className="mb-4">
            <h4 className="text-center fs-3 secondary-color" >
              {i18n.language === "en" && "Discover Who Are NOBEL ?"}
              {i18n.language === "ar" && "اكتشف من هم نوبل"}
            </h4>
            <h3 className="text-center fs-lg ">
              {i18n.language === "en" && "NOBEL Builds Value In Air"}
              {i18n.language === "ar" && "نوبل يبني قيمة في الهواء"}
            </h3>
          </div>
          <Row  style={{ marginBottom: "75px" }}>
            {i18n.language === "en" && (
              <Col lg="8" className="lh-lg discover-desc tablet-center aaa">
                <span>NOBEL</span> is a company which has been operating for more than 25
                years in the aeraulic sector by producing various types of
                heavy-duty industrial fans which are completely manufactured and
                assembled in Egypt. NOBEL is the company that is able to provide
                inexpensive, reliable, and effective air ventilation solutions
                as our production department is equipped with modern
                technologies such as laser cutting, CNC punching machines,
                static and dynamic balancing, etc.
              </Col>
            )}
            {i18n.language === "ar" && (
              <Col lg="8" className="lh-lg discover-desc tablet-center" dir="rtl">
                نوبل شركة تعمل في قطاع الهواء لأكثر من 25 عامًا من خلال إنتاج
                مجموعة متنوعة من المراوح الصناعية الثقيلة التي يتم تصنيعها
                وتجميعها بالكامل في مصر. نوبل هي الشركة التي تستطيع توفير حلول
                تهوية الهواء بأسعار معقولة وموثوقة وفعالة حيث يتمتع قسم الإنتاج
                لدينا بتقنيات حديثة مثل القطع بالليزر، وآلات القص بالحاسوب
                الرقمي CNC، والتوازن الثابت والديناميكي، وما إلى ذلك.
              </Col>
            )}
            <Col lg="4">
              <img
                data-aos="fade-up-left"
                className="discover-img"
                src={discoverImg}
                alt=""
              />
            </Col>
          </Row>
        </Card.Body>
      </div>
      {/* <button className=" main-btn discover-btn ">
        
        {i18n.language === "en" && "Read More"}
              {i18n.language === "ar" && "اقرأ المزيد"}
        </button> */}
    </Card>
  );
}

export default Discover;
