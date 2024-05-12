// @ts-nocheck
import ProductHead from "../../components/productHead/ProductHead";
import NavBar from "../../components/NavBar/NavBar";
import image_1 from "../../assets/46.png"
import image_2 from "../../assets/47.png"
import image_3 from "../../assets/48.png"
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Smokeaxial() {
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
          semiHead={
            i18n.language === "en"
              ? ""
              : ""
          }
          head={
            i18n.language === "en" ? "smoke axial inline fans " : "مروحات شفط محورية مباشرة للدخان"
          }
        />

        <ProductCard
          img={image_1}
          head={i18n.language === "en" ? "Axial inline smoke bifurcated fans series – NSAF/1(400°c/2hrs.)" : "سلسلة مراوح الطرد المحوري المتفرعة للدخان - NSAF/1 (400°C/2 ساعة)"}
          list={[
            i18n.language === "en"
              ? "Wheel sizes from 300 mm up to 2000 mm"
              : "الحجم: من 300 ملم حتى 2000 ملم",
            i18n.language === "en"
              ? "Volume flow from 1000m3/h up to 200000 m3/h"
              : "تدفق الحجم من 1000 متر مكعب/ساعة إلى 200000 متر مكعب/ساعة",
            i18n.language === "en"
              ? "Pressure from 5 mm/H20 up to 300 mm/H20"
              : "الضغط: من 5 ملم/ساعة² حتى 300 ملم/ساعة²",
            i18n.language === "en"
              ? "motor thermal insulation (class F)"
              : "عزل حراري للمحرك (فئة F)",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings – car parkings -etc..) Where it’s from the highest recommended fan types when the high total and static efficiencies are required since due to the aerodynamic airfoil and also the fan body profile which achieves the minimum losses in the air flow due to pressure drag which makes it from the minimum power consumers"
                : "يُستخدم هذا النوع من المراوح لإخراج الدخان من مختلف أنواع التطبيقات مثل (الأنفاق - المباني ذات الارتفاع العالي - مواقف السيارات - الخ) حيث يعتبر من أنواع المراوح الموصى بها عندما يكون هناك حاجة إلى كفاءة عالية جمالية وثابتة، نظرًا للمقطع الهوائي الديناميكي وأيضًا ملف المراوح الذي يحقق الحد الأدنى من الخسائر في تدفق الهواء بسبب الضغط الساكن مما يجعلها من المستهلكين للطاقة الأدنى."

              }
            </>
          }
        />
        <ProductCard
          img={image_2}
          head={i18n.language === "en" ? "Axial inline smoke bifurcated fans series – NSAF/2(400°c/2hrs.)" : "سلسلة مروحة الطرد المركزي المقسمة للدخان - NSAF/2(400°C/2hrs.)"}
          list={[
            i18n.language === "en"
              ? "Wheel sizes from300 mm up to 2240 mm"
              : "أحجام العجلة من 300 مم حتى 2240 مم",
            i18n.language === "en"
              ? "Volume flow from 1000m3/h up to 250000 m3/h"
              : "تدفق الحجم من 1000 متر مكعب في الساعة إلى 250000 متر مكعب في الساعة",
            i18n.language === "en"
              ? "Pressure from 5 mm/H20 up to 350mm/H20"
              : "الضغط: من 5 ملم/ساعة² إلى 350 ملم/ساعة²",
            i18n.language === "en"
              ? "motor thermal insulation (class F)"
              : "العزل الحراري للمحرك (الفئة F)",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings – car parkings -etc..) Where high flow range could be achieved and also equipped with aerodynamic airfoil profile diecast aluminum blade for excellent efficiency"
                : "هذه السلسلة مستخدمة لإخراج الدخان من مختلف أنواع التطبيقات مثل (الأنفاق - المباني العالية - مواقف السيارات - إلخ) حيث يمكن تحقيق نطاق تدفق عالي ومزودة أيضًا بشفرة من الألمنيوم الصب المصبوب بالقالب ذات ملف هوائي ديناميكي لكفاءة ممتازة."}
            </>
          }
        />
        <ProductCard
          img={image_3}
          head={i18n.language === "en" ? "Axial inline smoke bifurcated fans series – NSAH(400°c/2hrs.)" : "سلسلة مراوح الدخان الثنائية الشفرة الخطية - NSAH (400°م / 2 ساعة)"}
          list={[
            i18n.language === "en"
              ? "Wheel sizes from300 mm up to 2240 mm"
              : "أحجام العجلة من 300 مم حتى 2240 مم",
            i18n.language === "en"
              ? "Volume flow from 1000m3/h up to 250000 m3/h"
              : "تدفق الحجم من 1000 متر مكعب في الساعة إلى 250000 متر مكعب في الساعة",
            i18n.language === "en"
              ? "Pressure from 5 mm/H20 up to 350mm/H20"
              : "الضغط: من 5 ملم/ساعة² إلى 350 ملم/ساعة²",
            i18n.language === "en"
              ? "motor thermal insulation (class H)"
              : "العزل الحراري للمحرك (الفئة H)",
          ]}
          desc={
            <>
              {i18n.language === "en"
                ? "This series is used for smoke evacuation from various types of applications such as (Tunnels - high rise buildings – car parkings -etc..) Where high flow range could be achieved and also equipped with aerodynamic airfoil profile diecast aluminum blade for excellent efficiency"
                : "تستخدم هذه السلسلة لتهوية الدخان من مختلف أنواع التطبيقات مثل (الأنفاق - المباني العالية - مواقف السيارات - إلخ) حيث يمكن تحقيق نطاق تدفق عالٍ ومزودة أيضًا بملف هوائي ديناميكي للشفرة المصبوبة من الألمنيوم لتحقيق كفاءة ممتازة."}
            </>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Smokeaxial;
