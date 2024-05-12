import "./Applications.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import img_bg from "../../assets/image 70.png";
import img from "../../assets/WhatsApp Image 2023-12-19 at 11.5666.png";
import { useTranslation } from "react-i18next";
import { useEffect,useState } from "react";

function Applications() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();


  const [selectedOption, setSelectedOption] = useState("heavy-duty");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleGoClick = () => {
    // Redirect to the selected product page
    window.location.href = `/products/${selectedOption}`;
  };

  return (
    <div className="applications">
      <NavBar />

      <div className="container">
        <div className="applications_top">
          <div>
            <h1>
              {i18n.language === "en"
                ? "Industrial Fan & Blower Applications"
                : "تطبيقات المراوح الصناعية والمنفاخات"}
            </h1>
            <button>
              {i18n.language === "en" ? "ASK A QUESTION" : "اسأل سؤالًا"}
            </button>
          </div>
          <img src={img_bg} alt="" />
          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Our portfolio of literally thousands of different types, models, and sizes of air-movement equipment can meet the requirements of almost every industrial and commercial application. We also offer customized solutions, tailored to the demanding specifics of your one-of-a-kind application."
              : "يمكن أن يلبي محفظتنا المكونة من الآلاف من مختلف أنواع ونماذج وأحجام معدات حركة الهواء متطلبات تقريبًا كل تطبيق صناعي وتجاري. كما نقدم حلولًا مخصصة، مصممة خصيصًا للمواصفات الصارمة لتطبيقك الفريد."}
          </p>

          <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
            {i18n.language === "en"
              ? "Many standard applications have overlapping features and are common for a variety of industries. In order to assist you in identifying the best fan for your system, under each application, we’ve listed the design features and available materials of construction for the fans, as well as the particular models that are most appropriate for the job. All products from the list are linked back to their particular product pages, so you could have complete information in a matter of minutes."
              : "تتميز العديد من التطبيقات القياسية بميزات تتداخل مع بعضها البعض وتكون شائعة لمجموعة متنوعة من الصناعات. من أجل مساعدتك في تحديد أفضل مروحة لنظامك، قمنا بتقديم قائمة بميزات التصميم ومواد البناء المتاحة للمراوح تحت كل تطبيق، بالإضافة إلى النماذج الخاصة التي هي الأكثر ملاءمة للعمل. يتم ربط جميع المنتجات من القائمة بصفحات منتجاتها الخاصة، حتى تتمكن من الحصول على معلومات كاملة في غضون دقائق."}
          </p>
        </div>

        <div className="applications_bottom">
          <div className="image">
            <img src={img} alt="" />
          </div>

          <div>
            <p dir={i18n.language === "en" ? "ltr" : "rtl"}>
              {i18n.language === "en" ? "Select an" : "اختر نوع "}{" "}
              <span>{i18n.language === "en" ? "Application" : "التطبيق"}</span>{" "}
              {i18n.language === "en"
                ? "Type from the Drop Menu Below to View our Wide Range of Industrial Fan Offerings"
                : "من القائمة المنسدلة أدناه لعرض مجموعتنا الواسعة من عروض المراوح الصناعية"}
            </p>

            <select name="rental-option" className="custom-select"
               onChange={handleChange}>
              <option value="centrifugal-fan/heavy-duty">
                {i18n.language === "en" ? "Centrifugal Fan (heavy duty)" : "مروحة الطرد المركزي (الخدمة الشاقة)"}
              </option>
              <option value="centrifugal-fan/transport-series">
                {i18n.language === "en" ? "Centrifugal Fan (transport series)" : "مروحة الطرد المركزي (سلسلة النقل)"}
              </option>
              <option value="centrifugal-fan/box-fans">
                {i18n.language === "en" ? "Centrifugal Fan (box fans)" : "مروحة الطرد المركزي (مراوح الصندوق)"}
              </option>
              <option value="axial-fans">
                {i18n.language === "en" ? "Axial Fans Ventilation" : "تهوية المراوح المحورية"}
              </option>
              <option value="roof-top-fans">
                {i18n.language === "en" ? "Roof Top Fans" : "مروحة السطح"}
              </option>
              <option value="air-filering">
                {i18n.language === "en" ? "Air Filtering System" : "نظام تصفية الهواء"}
              </option>
              <option value="custom-venilrators">
                {i18n.language === "en" ? "Custom Ventilators" : "المنتجات المخصصة للتهوية"}
              </option>
              <option value="accessories">
                {i18n.language === "en" ? "Accessories" : "ملحقات"}
              </option>
              <option value="smoke-axial">
                {i18n.language === "en" ? "smoke axial inline fans" : "مروحات شفط محورية مباشرة للدخان"}
              </option>
              <option value="smoke-centrifugal">
                {i18n.language === "en" ? "smoke centrifugal fans" : "مراوح الطرد المركزي للدخان"}
              </option>
            </select>

            <button onClick={handleGoClick} className="main-btn" style={{ display: "block", margin: "2rem auto 0", marginTop: "2rem" }}>go</button>
          </div>
        </div>

        {/* <div className="form" data-aos="zoom-in">
          <form action="">
            <p>
              Thank you for visiting Greenheck.com. Please share your
              information below and we will gladly respond to your request.
            </p>
            <div className="parent_input">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last  Name" />
            </div>
            <div className="parent_input">
              <input type="nuber" placeholder="Phone" />
              <input type="text" placeholder="country" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="parent_input">
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Applications;
