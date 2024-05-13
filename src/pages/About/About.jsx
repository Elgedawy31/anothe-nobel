import React, { useEffect } from "react";
import "./About.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import { FiHeadphones } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="about" style={{ overflowX: "hidden"}} >
      <NavBar />
      <div className="container">
        <div className="about_top">
          <h1>{i18n.language === "en" ? "about us" : "من نحن"}</h1>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"} className="aaa">
            {i18n.language === "en"
              ? <p><span>NOBEL</span> is a company that has been operating for more than 30 years in the aeraulic sector by producing various types of heavy-duty industrial fans, which are completely manufactured and assembled in Egypt. NOBEL is the company that is able to provide inexpensive, reliable, and effective air ventilation solutions. Our production department is equipped with modern technologies such as laser cutting, CNC punching machines, static and dynamic balancing, etc., and also utilizes first-quality raw materials to provide an industrial fan that operates efficiently, quietly, and steadily for its required system, ensuring excellent reliability. Additionally, the engineering department is supported by CAD and CAE software tools for design and engineering applications. Due to the high demand for ventilators from the market, NOBEL is able to provide:</p>
              : <p>شركة <span>نوبل</span> هي شركة تعمل منذ أكثر من 30 عامًا في قطاع الهواء من خلال إنتاج مجموعة متنوعة من المراوح الصناعية الثقيلة التي يتم تصنيعها وتجميعها بالكامل في مصر. نوبل هي الشركة التي تستطيع توفير حلول تهوية الهواء بأسعار معقولة وموثوقة وفعالة. يتمتع قسم الإنتاج لدينا بتقنيات حديثة مثل القطع بالليزر، وآلات القص بالحاسوب الرقمي CNC، والتوازن الثابت والديناميكي، وغيرها، كما يستخدم مواد خام ذات جودة عالية لتوفير مروحة صناعية تعمل بكفاءة وبصمت وباستقرار للنظام المطلوب، وتضمن الموثوقية الممتازة. بالإضافة إلى ذلك، يتم دعم قسم الهندسة بأدوات برمجية CAD و CAE لتطبيقات التصميم والهندسة. نظرًا للطلب العالي على المراوح من السوق، يستطيع نوبل توفير:</p> }
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en" ? "Centrifugal fans" : "المراوح الطردية"}
          </h4>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"} className="aaa">
            {i18n.language === "en"
              ? <p><span>NOBEL</span> centrifugal fans could supply all the flow rates and pressure needs as there are 3 categories of this type: low pressure, medium pressure, and high pressure of the following blade types.</p>
              : <p>يمكن لمراوح <span>نوبل</span> الطردية توفير جميع معدلات التدفق واحتياجات الضغط حيث تتوفر 3 فئات من هذا النوع: الضغط المنخفض والضغط المتوسط والضغط العالي من أنواع الشفرات التالية.</p> }
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Backward-Curved Fan Blades"
              : "شفرات المروحة الطردية ذات الانحناء إلى الخلف"}
          </h4>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Have a self-limiting power characteristic, so if sized correctly the motor won’t overheat or burn out even if conditions change. High efficiency and stable operation make this blade type popular. Choose the operating point to be just to the right of the peak pressure flow rate to achieve both high efficiency and a stable flow rate."
              : "تتميز بخاصية تحديد الطاقة الذاتية، لذلك إذا تم تحجيمها بشكل صحيح، فلن يتعرض المحرك للحرارة الزائدة أو الاحتراق حتى لو تغيرت الظروف. الكفاءة العالية والتشغيل المستقر تجعل هذا النوع من الشفرات شائعًا. اختر نقطة التشغيل لتكون مباشرةً عند يمين قمة معدل تدفق الضغط لتحقيق كل من الكفاءة العالية ومعدل تدفق مستقر."}
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en" ? "Radial Blades" : "شفرات شعاعية"}
          </h4>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Similar performance to a backward-curved except that it’s easier to overheat because as flow rate goes up, so does power. Easier to maintain, so it’s used in dirty situations (easy to clean straight blades, and they don’t collect as much). Blades are stronger than other types."
              : "أداء مماثل للشفرات ذات الانحناء إلى الخلف باستثناء أنه من الأسهل أن تتعرض للحرارة الزائدة لأنه مع زيادة معدل التدفق، تزداد الطاقة أيضًا. أسهل في الصيانة، لذلك يُستخدم في الحالات القذرة (سهولة تنظيف الشفرات المستقيمة، ولا تجمع الكثير). الشفرات أقوى من الأنواع الأخرى."}
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Forward-Curved Blades"
              : "شفرات مقوسة إلى الأمام"}
          </h4>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Have problems with instability because a specified pressure rise can fit three different flow rates. Burnout can also be a problem because fan power increases with flow rate. Quieter than other fans; used for most furnace blowers."
              : "تواجه مشاكل في الاستقرار لأن الارتفاع المحدد في الضغط يمكن أن يناسب ثلاثة معدلات تدفق مختلفة. يمكن أن يكون الاحتراق مشكلة أيضًا لأن طاقة المروحة تزداد مع معدل التدفق. أكثر هدوءًا من المراوح الأخرى؛ تُستخدم في معظم منفاخات الأفران."}
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en" ? "Axial Flow Fans" : "مراوح تدفق محوري"}
          </h4>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Axial fans are used to deliver large flow rates but with a small increase in pressure. Examples include fans used for ventilation without ductwork, mobile room fans, and fans used to cool computers. Common types include propeller, tube axial, and vane axial. In tube axial fans, the impeller is inside a tube to guide airflow and improve performance. In vane axial fans, vanes are placed either upstream or downstream of the impeller to reduce swirl and improve performance."
              : "تُستخدم مراوح التدفق المحوري لتوفير معدلات تدفق كبيرة ولكن مع زيادة ضغط صغيرة. الأمثلة تشمل المراوح المستخدمة للتهوية بدون أنظمة أنابيب، ومراوح الغرف المتنقلة، والمراوح المستخدمة لتبريد الحواسيب. الأنواع الشائعة تشمل المراوح الدوارة، ومراوح التدفق المحوري الأنبوبية، ومراوح التدفق المحوري ذات الريش. في المراوح التدفق المحوري الأنبوبية، يكون المروحة داخل أنبوب لتوجيه تدفق الهواء وتحسين الأداء. في المراوح التدفق المحوري ذات الريش، يتم وضع الريش إما قبل أو بعد المروحة لتقليل التداخل وتحسين الأداء."}
          </p>

          <h4 dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en" ? "Our mission" : "مهمتنا"}
          </h4>
          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Our mission is to provide optimum solutions that meet the needs and expectations of customers, and to offer ventilators that consume the least energy, provide the best air quality, and are the most durable and cost-effective. Additionally, our mission includes after-sales service and maintenance, as NOBEL is more than just a supplier; we act as partners in projects, prioritizing the overall system performance rather than just the fan performance."
              : "مهمتنا هي توفير حلول مثلى تلبي احتياجات وتوقعات العملاء، وتقديم مراوح تستهلك أقل كمية من الطاقة، وتوفر أفضل جودة للهواء، وتكون الأكثر دوامًا واقتصادية. بالإضافة إلى ذلك، تشمل مهمتنا خدمة ما بعد البيع والصيانة، حيث تعمل نوبل كشركة شريكة في المشاريع بدلاً من كونها موردًا عاديًا، حيث نهتم بأداء النظام بشكل عام بدلاً من أداء المروحة فقط."}
          </p>
        </div>

        <div className="about_bottom" style={{marginTop:"4rem"}}>
          <div className="card" data-aos="fade-right">
            <FiHeadphones className="iconn" />
            <div dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en" ? "Support" : "الدعم"}
            </div>

            <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en"
                ? "NOBEL centrifugal fans are suitable for exhausting clean air and lightly dusty environments."
                : "تُعتبر مراوح نوبل الطردية مناسبة لتهوية الهواء النظيف والمواطن ذو الغبار الخفيف."}
              <span dir={i18n.language === "en" ? "ltr" : "rtl"}>
                {i18n.language === "en"
                  ? "Backward impellers, wing and scirocco profile, fan series NT, etc..."
                  : "المروحة الدافعة إلى الخلف، الجناح والملف الجانبي، سلسلة مراوح NT، إلخ..."}
              </span>
            </p>

            <button className="main-btn">
              {i18n.language === "en" ? "See More" : "عرض المزيد"}
            </button>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <IoDocumentTextOutline className="iconn" />
            <div>{i18n.language === "en" ? "Testing" : "اختبار"}</div>
            <p>
              {i18n.language === "en"
                ? "ring-nea/d series, plate mounted, c-ducted"
                : "سلسلة ring-nea/d، مثبتة على اللوحة، مدفوعة بالكابلات"}
            </p>
            <button className="main-btn">
              {i18n.language === "en" ? "See More" : "عرض المزيد"}
            </button>
          </div>
          <div
            className="card"
            data-aos="fade-left"
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <FaHandHoldingMedical className="iconn" />
            <div>{i18n.language === "en" ? "Services" : "الخدمات"}</div>
            <p>
              {i18n.language === "en"
                ? "AXIAL ROOF FANS AXIALeries, centrifugal roof fans - nc series"
                : "مراوح السقف المحورية سلسلة AXIAL، مراوح السقف الطردية - سلسلة nc"}
            </p>
            <button className="main-btn">
              {i18n.language === "en" ? "See More" : "عرض المزيد"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
