import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// @ts-ignore
import img from "../../assets/21.png";

function HomeImgSlider() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="Home_Img-Slider" style={{backgroundColor:'rgba(49, 122, 224, 0.09)' , padding:'2rem 0'}}>
            <div className="container">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeImgSlider;
