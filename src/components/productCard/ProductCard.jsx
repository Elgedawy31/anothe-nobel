import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function ProductCard({ img, head, desc, list, imgStyle  }) {
  const { t, i18n } = useTranslation();
  return (
    <Row
      className="product-card   p-4 mb-5 align-items-center jusitfy-content-center "
      data-aos="zoom-in"
    >
      <Col className="d-flex align-items-center justify-content-center" lg="5">
      <div className="image" style={{maxWidth:"100%"}}>
      <img
          src={img}
          alt=""
          loading="lazy"
          style={{
            width: "250px", // Set width to 100% to ensure it fills its container
            height: "auto",
            ...imgStyle,
            objectFit: "contain",
          }}
          // style={{
          //   width: "394px",
          //   height: "354px",
          //   objectFit: "contain",
          // }}
        />
      </div>
      </Col>
      <Col
        className=" tablet-gap d-flex align-items-center justify-content-center"
        lg={7}
      >
        <div>
          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"} className="primary-color fs-4 mb-3">{head}</h4>
          <p dir={i18n.language === "en" ? "ltr" : "rtl"} className="secondary-color lh-lg mb-5">{desc}</p>

          <ul dir={i18n.language === "en" ? "ltr" : "rtl"}
            style={{ listStyleType: "initial", marginLeft: "2rem" }}
            className="secondary-color"
          >
            {list.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default ProductCard;
