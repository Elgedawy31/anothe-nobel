import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// @ts-ignore
import img_1 from "../../assets/16.png";
import img_2 from "../../assets/26.png";
import img_3 from "../../assets/21.png";
import img_4 from "../../assets/39.png";

import img_5 from "../../assets/31.png";
import img_6 from "../../assets/32.png";
import img_7 from "../../assets/42.png";
import img_8 from "../../assets/43.png";

import img_9 from "../../assets/47.png";
import img_10 from "../../assets/49.png";
import img_11 from "../../assets/19.png";
import img_12 from "../../assets/48.png";

function HomeImgSlider() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img_9} alt="" />
              <img src={img_10} alt="" />
              <img src={img_11} alt="" />
              <img src={img_12} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img_5} alt="" />
              <img src={img_6} alt="" />
              <img src={img_8} alt="" />
              <img src={img_7} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img_1} alt="" />
              <img src={img_2} alt="" />
              <img src={img_3} alt="" />
              <img src={img_4} alt="" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeImgSlider;
