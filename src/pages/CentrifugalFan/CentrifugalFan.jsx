// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import { Col, Row } from "react-bootstrap";
// @ts-ignore
import img_1 from "../../assets/19.png";
// import img_1 from "../../assets/cent-product-img.png";
// @ts-ignore
import firstHeavy1 from "../../assets/16.png";
// import firstHeavy1 from "../../assets/heavy-duty-1.png";
import firstHeavy2 from "../../assets/26.png";
// import firstHeavy2 from "../../assets/heavy-duty-2.png";
// import firstHeavy3 from "../../assets/heavy-duty-3.png";
import firstHeavy4 from "../../assets/27.jpg";
// import firstHeavy4 from "../../assets/heavy-duty-4.png";
import firstHeavy5 from "../../assets/28.jpg";
// import firstHeavy5 from "../../assets/heavy-duty-5.png";

import firstHeavy6 from "../../assets/20.jpg";
import firstHeavy7 from "../../assets/21.png";

import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function CentrifugalFan() {
  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <div className=" ">
      <NavBar />
      <div className="container">
        <ProductHead
          semiHead={i18n.language === "en" ? "HEAVY DUTY" : "الخدمة الشاقة"}
          head={
            i18n.language === "en" ? "Centrifugal Fan" : "مروحة الطرد المركزي"
          }
        />

        <ProductCard
          img={img_1}
          head={
            i18n.language === "en" ? "CENTRIFUGAL FAN" : "مروحة الطرد المركزي"
          }
          list={
            i18n.language === "en"
              ? [
                  "wheel sizes from 310 mm up to 2000 mm",
                  "volume flow from 2000 m3/h up to 600000 m3/h",
                  "pressure up to 1800 mm/h20",
                ]
              : [
                  "أحجام العجلة من 310 ملم إلى 2000 ملم",
                  "تدفق الحجم من 2000 متر مكعب/ساعة إلى 600000 متر مكعب/ساعة",
                  "الضغط يصل إلى 1800 ملم/ساعة²",
                ]
          }
          desc={
            i18n.language === "en"
              ? "NOBEL CENTRIFUGAL FANS ARE SUITABLE FOR THE EXHAUST OF CLEAN AIR, LIGHTLY DUSTY. Low, medium, and high pressure, single and double inlet models with various volume flow for different necessities. Backward impellers with high efficiency, featuring flat, wing, and scirocco profiles. Indicated for various applications in ventilation, air-conditioning, and processes industry."
              : "المرواح الطردية من NOBEL مناسبة لشفط الهواء النظيف والملوث بخفة. طرازات ذات ضغط منخفض ومتوسط ​​وعالي، مداخل واحدة ومزدوجة مع تدفق حجم مختلف للاحتياجات المختلفة. مرواح الطردية بأعماق عالية الكفاءة، تتميز بتصاميم مسطحة وجناحية وسكيروكو. مُقترحة لمختلف التطبيقات في مجالات التهوية وتكييف الهواء والصناعات التصنيعية."
          }
        />
        <ProductCard
          img={firstHeavy1}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADE WING PROFILE -The NBA series"
              : "سلسلة NBA - نمط شفرة الجناح الخلفي"
          }
          list={
            i18n.language === "en"
              ? [
                  "Volume: from 2000 m3/h up to 250000 m3/h",
                  "Pressure: from 20 mm/H20 up to 350mm/H20",
                  "Temperature: up to 300 °C",
                ]
              : [
                  "الحجم: من 2000 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
                  "الضغط: من 20 مم/ساعة² إلى 350 مم/ساعة²",
                  "درجة الحرارة: تصل إلى 300 درجة مئوية",
                ]
          }
          desc={
            i18n.language === "en"
              ? "characteristics are: - Low noise. For a fan the source of noise is mainly the airturbulence created by the impeller. The VBA series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller"
              : "الخصائص هي: -انخفاض الضوضاء. بالنسبة للمروحة، مصدر الضوضاء هو بشكل رئيسي الاضطرابات الهوائية التي تنشأ عند الدوامة التي ينشئها المروحة. تم إنشاء سلسلة VBA للحصول على أقل ضوضاء بفضل الملف الهوائي للمدخل والتوازن الثابت والديناميكي للمروحة."
          }
        />

        <ProductCard
          img={firstHeavy6}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADE FLAT PROFILE -The NBR series"
              : "سلسلة NBA - نمط شفرة الجناح الخلفي"
          }
          list={
            i18n.language === "en"
              ? [
                  "Volume: from 2000 m3/h up to 250000 m3/h",
                  "Pressure: from 20 mm/H20 up to 350mm/H20",
                  "Temperature: up to 300 °C",
                ]
              : [
                  "الحجم: من 2000 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
                  "الضغط: من 20 مم/ساعة² إلى 350 مم/ساعة²",
                  "درجة الحرارة: تصل إلى 300 درجة مئوية",
                ]
          }
          desc={
            i18n.language === "en"
              ? "characteristics are: Low noise. For a fan the source of noise is mainly the air turbulence created by the impeller. The VBR series has been created to obtain the lowest noise thank to the aerodynamic profile of the inlet cone and of the static and dynamic balancing of the impeller."
              : "الخصائص: ضوضاء منخفضة. بالنسبة للمروحة، يكون مصدر الضوضاء بشكل رئيسي التشويش الهوائي الناتج عن المروحة. تم إنشاء سلسلة VBR للحصول على أقل ضوضاء بفضل الملف الديناميكي لملف المدخل والتوازن الديناميكي والاستاتيكي للمروحة."
          }
        />

        <ProductCard
          img={firstHeavy2}
          head={i18n.language === "en" ? "SCIROCCO PROFILE" : "الملف الشرقي"}
          list={
            i18n.language === "en"
              ? [
                  "Volume: from 1000 m3/h up to 250000 m3/h",
                  "Pressure: from 30 mm/H20 up to 150mm/H20",
                  "Temperature: up to 150 C",
                ]
              : [
                  "الحجم: من 1000 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
                  "الضغط: من 30 ملم/ساعة² إلى 150 ملم/ساعة²",
                  "درجة الحرارة: تصل إلى 150 درجة مئوية",
                ]
          }
          desc={
            <>
              {i18n.language === "en" ? (
                <>
                  The NBS series is suitable when low noise performances are
                  required. The “scirocco” profile of blades allows a very low
                  rotation speed with a limited mechanical noisiness. Efficiency
                  can be up to 64%.
                </>
              ) : (
                <>
                  تعتبر سلسلة NBS مناسبة عندما تكون الأداءات المنخفضة للضوضاء
                  مطلوبة. يسمح ملف "الشرقي" للمروحة بسرعة دوران منخفضة جدًا مع
                  انخفاض ميكانيكي محدود للضوضاء. يمكن أن تصل الكفاءة إلى 64%.
                </>
              )}
            </>
          }
        />

        <ProductCard
          img={firstHeavy7}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADE WING PROFILE - The NPD series"
              : "المراوح الطردية بملف مسطح"
          }
          list={[
            i18n.language === "en"
              ? "Volume: from 1000 m3/h up to 160000 m3/h"
              : "تدفق الحجم: من 1000 متر مكعب في الساعة حتى 160000 متر مكعب في الساعة",
            i18n.language === "en"
              ? "Pressure: from 100 mm/H20 up to 1000 mm/H20"
              : "الضغط: من 100 ملم/ساعة إلى 1000 ملم/ساعة",
            i18n.language === "en"
              ? "Temperature: up to 90 °C and up to 400 °C with shaft cooler and hollow shaft"
              : "الحرارة: حتى 90 درجة مئوية وحتى 400 درجة مئوية مع مبرد للعمود وعمود فارغ",
          ]}
          desc={
            <>
              {i18n.language === "en" ? (
                <>
                  are suitable for sever and difficult application and for the
                  various industrial applications where a complete reliability
                  of the product is necessary. Application sectors are pneumatic
                  transportation, chemical industries, silos and metallurgic
                  industries. Provided with direct or belt driven electrical
                  motor with a fixed rotation speed
                </>
              ) : (
                <>
                  مناسبة للتطبيقات الصعبة والصارمة وللتطبيقات الصناعية المختلفة التي تتطلب موثوقية كاملة للمنتج. قطاعات التطبيق هي النقل الهوائي، وصناعات الكيماويات، والمستودعات، والصناعات المعدنية. مزودة بمحرك كهربائي مباشر أو بحزام بسرعة دوران ثابتة
                </>
              )}
            </>
          }
        />

        {/* <ProductCard
          img={firstHeavy3}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADE WING PROFILE"
              : "ملف الجناح الخلفي للنفخ"
          }
          list={
            i18n.language === "en"
              ? [
                  "Volume: from 1000 m3/h up to 250000 m3/h",
                  "Pressure: from 30 mm/H20 up to 150mm/H20",
                  "Temperature: up to 90 °C and up to 400 © C with shaft cooler and shaft hollow",
                ]
              : [
                  "الحجم: من 1000 متر مكعب/ساعة إلى 250000 متر مكعب/ساعة",
                  "الضغط: من 30 ملم/ساعة² إلى 150 ملم/ساعة²",
                  "درجة الحرارة: تصل إلى 90 درجة مئوية وتصل إلى 400 درجة مئوية مع مبرد للعمود وعمود مجوف",
                ]
          }
          desc={
            <>
              {i18n.language === "en" ? (
                <>
                  706 NPD series are suitable for severe and difficult
                  applications and for various industrial applications where
                  complete reliability of the product is necessary. Application
                  sectors include pneumatic transportation, chemical industries,
                  silos, and metallurgical industries. Provided with direct or
                  belt-driven electrical motor with a fixed rotation speed.
                </>
              ) : (
                <>
                  تعتبر سلسلة 706 NPD مناسبة للتطبيقات الصعبة والصعبة ولمختلف
                  التطبيقات الصناعية حيث يكون الاعتماد الكامل على موثوقية المنتج
                  ضروريًا. تشمل قطاعات التطبيق نقل الهواء النفاث، والصناعات
                  الكيميائية، والمستودعات، والصناعات المعدنية. مزودة بمحرك
                  كهربائي مباشر أو بحزام مع سرعة دوران ثابتة.
                </>
              )}
            </>
          }
        /> */}
        <ProductCard
          img={firstHeavy4}
          head={
            i18n.language === "en"
              ? "BACKWARD BLADE FLAT PROFILE"
              : "المراوح الطردية بملف مسطح"
          }
          list={[
            i18n.language === "en"
              ? "Volume: from 500 m3/h up to 100000 m3/h"
              : "تدفق الحجم: من 500 متر مكعب في الساعة حتى 100000 متر مكعب في الساعة",
            i18n.language === "en"
              ? "Pressure: from 150 mm/H20 up to 1000 mm/H20"
              : "الضغط: من 150 ملم/ساعة إلى 1000 ملم/ساعة",
            i18n.language === "en"
              ? "Temperature: up to 90 °C and up to 400 °C with shaft cooler and hollow shaft"
              : "الحرارة: حتى 90 درجة مئوية وحتى 400 درجة مئوية مع مبرد للعمود وعمود فارغ",
          ]}
          desc={
            <>
              {i18n.language === "en" ? (
                <>
                  The NPE series are suitable for sever and difficult
                  application and for the various industrial applications where
                  a complete reliability of the product is necessary.
                  Application sectors are pneumatic transportation, chemical
                  industries, silos and metallurgic industries. Provided with
                  direct or belt driven electrical motor with a fixed rotation
                  speed.
                </>
              ) : (
                <>
                  سلسلة NPE مناسبة لتطبيقات شديدة الصعوبة والتحديات في مختلف
                  القطاعات الصناعية حيث يكون الاعتماد الكامل على موثوقية المنتج
                  ضروريًا. تشمل هذه التطبيقات نقل الهواء بالضغط، وصناعات
                  الكيماويات، والمستودعات، وصناعات التحول الفلزية. تتميز السلسلة
                  بمحركات كهربائية مباشرة أو محزمة بسرعات دوران ثابتة.
                </>
              )}
            </>
          }
        />
        <ProductCard
          img={firstHeavy5}
          head={i18n.language === "en" ? "BACKWARD BLADE" : "الشفرة الخلفية"}
          list={[
            i18n.language === "en"
              ? "Volume: from 500 m3/h up to 100000 m3/h"
              : "الحجم: من 500 متر مكعب/ساعة إلى 100000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure: from 150 mm/H20 up to 1100 mm/H20"
              : "الضغط: من 150 ملم/ساعة² إلى 1100 ملم/ساعة²",
            i18n.language === "en"
              ? "Temperature: up to 90 °C and up to 400 °C with shaft cooler and hollow shaft"
              : "درجة الحرارة: تصل إلى 90 درجة مئوية وتصل إلى 400 درجة مئوية مع مبرد العمود وعمود فارغ.",
          ]}
          desc={
            <>
              {i18n.language === "en" ? (
                <>
                  NPD series are suitable for severe and difficult applications
                  and for various industrial applications where complete
                  reliability of the product is necessary. Application sectors
                  include pneumatic transportation, chemical industries, silos,
                  and metallurgic industries. Provided with direct or
                  belt-driven electrical motor with a fixed rotation speed.
                </>
              ) : (
                <>
                  سلسلة 706 NPD مناسبة للتطبيقات الصعبة والصعبة ولمختلف
                  التطبيقات الصناعية حيث يكون الاعتماد الكامل على موثوقية المنتج
                  ضروريًا. تشمل قطاعات التطبيق النقل الهوائي، والصناعات
                  الكيميائية، والمخازن، والصناعات المعدنية. مزود بمحرك كهربائي
                  مباشر أو بحزام ذو سرعة دوران ثابتة.
                </>
              )}
            </>
          }
          imgStyle={{ height: "270px" }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default CentrifugalFan;
