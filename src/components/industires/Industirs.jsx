import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import img_1 from "../../assets/cent-product-img.png"
import img_2 from "../../assets/27.jpg"

function Industirs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="industrial-section ">
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "NOBEL Industries"
                : "شركة نوبل الصناعية"}
            </h1>

            {/* <p className="industires-description">
              {i18n.language === "en"
                ? "our webinars helps in understanding any thing about an industrial fan so as to select the optimum operating point for the required  application"
                : "ندواتنا عبر الويب تساعد في فهم كل شيء عن المراوح الصناعية، مما يمكن من اختيار نقطة التشغيل الأمثل للتطبيق المطلوب."}
            </p> */}

            {i18n.language === "en" ? 
              <p className="industires-description">
                our webinars helps in understanding any thing about an industrial fan <br /> so as to select the optimum operating point for the required  application
            </p> : 
              <p className="industires-description">
                ندواتنا عبر الويب تساعد في فهم كل شيء عن المراوح الصناعية، مما يمكن من اختيار نقطة التشغيل الأمثل للتطبيق المطلوب.
          </p> 
             }
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "Centrifugal fans"
                : "مرواح الطرد المركزي"}
            </h1>

            <img src={img_1} alt="" style={{margin: "1rem 0"}}/>

            {/* <p className="industires-description">
              {i18n.language === "en"
                ? "NOBEL centrifugal fans could supply all the flow rates and pressure needs as there is 3 categories of this type : low pressure , medium pressure and high pressure of the following blade types"
                : "مرواح NOBEL الطرد المركزي يمكن أن توفر جميع معدلات التدفق واحتياجات الضغط حيث تتكون من 3 فئات من هذا النوع: الضغط المنخفض، والضغط المتوسط، والضغط العالي، مع الأنواع التالية من الريش"}
            </p> */}

{i18n.language === "en" ? 
              <p className="industires-description">
The NBS series is suitable when low noise performances are required. The “scirocco” profile of blades allows a very low rotation speed with a limited mechanical noisiness. Efficiency can be up to 64%.            </p> : 
              <p className="industires-description">
تعتبر سلسلة NBS مناسبة عندما تكون الأداءات المنخفضة للضوضاء مطلوبة. يسمح ملف "الشرقي" للمروحة بسرعة دوران منخفضة جدًا مع انخفاض ميكانيكي محدود للضوضاء. يمكن أن تصل الكفاءة إلى 64%.

</p> 
             }

          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="d-flex align-items-center justify-content-center h-100 flex-column container text-center">
            <h1>
              {i18n.language === "en"
                ? "Backward-Curved Fan Blades"
                : "لوحات المراوح ذات الريش المنحنية إلى الوراء"}
            </h1>

            <img src={img_2} alt="" style={{margin: "1rem 0"}}/>

            {/* <p className="industires-description">
              {i18n.language === "en"
                ? "Have a self-limiting power characteristic, so if sized correctly the motor won’t overheat or burn out even if conditions change.  High efficiency and stable operation make this blade type popular.  Choose the operating point to be just to the right of the peak pressure flow rate to achieve both high efficiency and a stable flow rate."
                : "نوبل هي شركة تعمل منذ أكثر من 30 عامًا في قطاع الهواء من خلال إنتاج مجموعة متنوعة من المراوح الصناعية الثقيلة التي يتم تصنيعها وتجميعها بالكامل في مصر. نوبل هي الشركة التي تستطيع توفير حلول تهوية الهواء بأسعار معقولة وموثوقة وفعالة. يتمتع قسم الإنتاج لدينا بتقنيات حديثة مثل القطع بالليزر، وآلات القص بالحاسوب الرقمي CNC، والتوازن الثابت والديناميكي، وغيرها، كما يستخدم مواد خام ذات جودة عالية لتوفير مروحة صناعية تعمل بكفاءة وبصمت وباستقرار للنظام المطلوب، وتضمن الموثوقية الممتازة. بالإضافة إلى ذلك، يتم دعم قسم الهندسة بأدوات برمجية CAD و CAE لتطبيقات التصميم والهندسة."}
            </p> */}

{i18n.language === "en" ? 
              <p className="industires-description">
Have a self-limiting power characteristic, so if sized correctly the motor won’t overheat or burn out even if conditions change.  High efficiency and stable operation make this blade type popular.  Choose the operating point to be just to the right of the peak pressure flow rate to achieve both high efficiency and a stable flow rate.
            </p> : 
              <p className="industires-description">
تتميز بسمة قوة محدودة بذاتها، لذا إذا تم تحجيمها بشكل صحيح، فلن يتعرض المحرك للسخونة الزائدة أو الحرق حتى لو تغيرت الظروف. الكفاءة العالية والتشغيل المستقر يجعلان هذا النوع من الشفرات شائعًا. اختر نقطة التشغيل بالقرب من أقصى معدل تدفق للضغط لتحقيق كل من الكفاءة العالية ومعدل تدفق مستقر.

</p> 
             }
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Industirs;
