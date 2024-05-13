import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function Industirs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="industrial-section">
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "NOBEL Industries"
                : "شركة نوبل الصناعية"}
            </h1>

            <p className="industires-description" dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en"
                ? <p>our webinars helps in understanding any thing about an industrial fan so as to select the optimum operating point for the required  application.</p>
                : <p>ندواتنا عبر الإنترنت تساعد في فهم أي شيء عن المروحة الصناعية، مما يتيح اختيار نقطة التشغيل الأمثل للتطبيق المطلوب.</p>
                }
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "Centrifugal Fans"
                : "مرواح طردية"}
            </h1>

            <p className="industires-description" dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en"
                ? <p>NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. BACKWARD IMPELLERS, WING AND SCIROCCO PROFILE, fan series NT, etc...</p>
                : <p>مراوح نوبل الطردية مناسبة لتهوية الهواء النظيف والمواطن ذو الغبار الخفيف. المروحة الدافعة إلى الخلف، الجناح والملف الجانبي، سلسلة مرواح NT، إلخ...</p> }
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "Custom ventilators"
                : "منظومات التهوية المخصصة"}
            </h1>

            <p className="industires-description" dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en"
                ? "ARE DESIGNED TO EXACTING SPECIFICATIONS, MEET SPECIFIC FLOW, PRESSURE, TEMPERATURE ...ETC"
                : "مصممة وفقًا لمواصفات دقيقة، تلبي تدفقًا محددًا وضغطًا ودرجة حرارة ... إلخ"}
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "AIR FILERING SYSTEM"
                : "نظام تنقية الهواء"}
            </h1>

            <p className="industires-description" dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en"
                ? <p>CARTRIDGE EXTRACTION & FILTRATION PLANTS, SLEEVES EXTRACTION & FILTRATION PLANTS, ACTIVE COAL FILTRATION PLANTS</p>
                : <p>مصانع استخراج وتصفية الخراطيش، مصانع استخراج وتصفية الأكمام، مصانع تصفية الفحم النشط</p> }
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Industirs;
