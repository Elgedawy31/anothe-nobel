import React from "react";
import { Col, Row } from "react-bootstrap";
// @ts-ignore
import history from "../../assets/50.jpg";
import { useTranslation } from "react-i18next";

function History() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container history-section ">
      <Row className="space-between-sections">
        <Col lg={6}>
          <img data-aos="fade-up-right" src={history} alt="" loading="lazy"/>
        </Col>
        <Col lg={6} className="tablet-gap">
          <Col className="history-box mb-5">
            <h3 className="secondary-color fs-2 mb-2" dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en" ? "The Story" : "قصتنا"}
            </h3>
            <p dir={i18n.language === "en" ? "ltr" : "rtl"} className="aaaa">
              {i18n.language === "en"
                ? <p><span>NOBEL</span> is a company which has been operating for more than 25 years in the aeraulic sector by producing various types of heavy-duty industrial fans, which are completely manufactured and assembled in Egypt.</p>
                : <p><span>نوبل</span> هي شركة تعمل في قطاع الهواء لأكثر من 25 عامًا من خلال إنتاج مجموعة متنوعة من المراوح الصناعية الثقيلة التي يتم تصنيعها وتجميعها بالكامل في مصر.</p> }
            </p>
          </Col>
          <Row>
            <Col dir={i18n.language === "en" ? "ltr" : "rtl"}>
              <h3 className="secondary-color fs-2 mb-2">
                {i18n.language === "en" ? "1996" : "١٩٩٦"}
              </h3>

              <p className="aaaa">
                {i18n.language === "en"
                  ? <p><span>NOBEL</span> is a company which has been operating for more than 25 years.</p>
                  : <p><span>نوبل</span> هي شركة تعمل منذ أكثر من 25 عامًا.</p> }
              </p>
            </Col>
            <Col dir={i18n.language === "en" ? "ltr" : "rtl"}>
              <h3 className="secondary-color fs-2 mb-2">
                {i18n.language === "en" ? "2024" : "٢٠٢٤"}
              </h3>

              <p>
                {i18n.language === "en"
                  ? "duty industrial fans which are completely manufactured and assembled in Egypt"
                  : "مراوح صناعية ثقيلة يتم تصنيعها وتجميعها بالكامل في مصر"}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default History;
