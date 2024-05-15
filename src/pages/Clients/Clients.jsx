import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";


import img_clinet_1 from "../../assets/image 24.png"
import img_clinet_2 from "../../assets/image 25.png"
import img_clinet_3 from "../../assets/image 26.png"
import img_clinet_4 from "../../assets/image 27.png"
import img_clinet_5 from "../../assets/image 28.png"
import img_clinet_6 from "../../assets/image 29.png"
import img_clinet_7 from "../../assets/image 30.png"
import img_clinet_8 from "../../assets/image 31.png"
import img_clinet_9 from "../../assets/image 32.png"
import img_clinet_10 from "../../assets/image 33.png"
import img_clinet_11 from "../../assets/image 34.png"
import img_clinet_12 from "../../assets/image 35.png"
import img_clinet_13 from "../../assets/image 36.png"
import img_clinet_14 from "../../assets/image 37.png"
import img_clinet_15 from "../../assets/image 38.png"
import img_clinet_16 from "../../assets/image 39.png"
import img_clinet_17 from "../../assets/image 40.png"
import img_clinet_18 from "../../assets/image 41.png"
import img_clinet_19 from "../../assets/image 42.png"
import img_clinet_20 from "../../assets/image 43.png"
import img_clinet_21 from "../../assets/image 44.png"
import img_clinet_22 from "../../assets/image 45.png"
import img_clinet_23 from "../../assets/image 46.png"
import img_clinet_24 from "../../assets/image 47.png"
import img_clinet_25 from "../../assets/image 48.png"
import img_clinet_26 from "../../assets/image 49.png"
import img_clinet_27 from "../../assets/image 50.png"
import img_clinet_28 from "../../assets/image 51.png"
import img_clinet_29 from "../../assets/image 52.png"
import img_clinet_30 from "../../assets/image 53.png"
import img_clinet_31 from "../../assets/image 54.png"
import img_clinet_32 from "../../assets/image 55.png"
import img_clinet_33 from "../../assets/image 56.png"
import img_clinet_34 from "../../assets/image 57.png"
import img_clinet_35 from "../../assets/image 58.png"
import img_clinet_36 from "../../assets/image 59.png"
import img_clinet_37 from "../../assets/image 60.png"
import img_clinet_38 from "../../assets/image 61.png"
import img_clinet_39 from "../../assets/image 62.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



function Clients() {
    // Scroll to the top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="certifications">
      <NavBar/>

        <div className="container" style={{marginBottom:"-1rem"}}>
            <h1 className="clients">{i18n.language === "en" ? "Clients" : "العملاء"}</h1>


            <div className="parent_clients">
               <img src={img_clinet_1} alt="" />
               <img src={img_clinet_2} alt="" />
               <img src={img_clinet_3} alt="" />
               <img src={img_clinet_4} alt="" />
               <img src={img_clinet_5} alt="" />
               <img src={img_clinet_6} alt="" />
               <img src={img_clinet_7} alt="" />
               <img src={img_clinet_8} alt="" />
               <img src={img_clinet_9} alt="" />
               <img src={img_clinet_10} alt="" />
               <img src={img_clinet_11} alt="" />
               <img src={img_clinet_12} alt="" />
               <img src={img_clinet_13} alt="" />
               <img src={img_clinet_14} alt="" />
               <img src={img_clinet_15} alt="" />
               <img src={img_clinet_16} alt="" />
               <img src={img_clinet_17} alt="" />
               <img src={img_clinet_18} alt="" />
               <img src={img_clinet_19} alt="" />
               <img src={img_clinet_20} alt="" />
               <img src={img_clinet_21} alt="" />
               <img src={img_clinet_22} alt="" />
               <img src={img_clinet_23} alt="" />
               <img src={img_clinet_24} alt="" />
               <img src={img_clinet_25} alt="" />
               <img src={img_clinet_26} alt="" />
               <img src={img_clinet_27} alt="" />
               <img src={img_clinet_28} alt="" />
               <img src={img_clinet_29} alt="" />
               <img src={img_clinet_30} alt="" />
               <img src={img_clinet_31} alt="" />
               <img src={img_clinet_32} alt="" />
               <img src={img_clinet_33} alt="" />
               <img src={img_clinet_34} alt="" />
               <img src={img_clinet_35} alt="" />
               <img src={img_clinet_36} alt="" />
               <img src={img_clinet_37} alt="" />
               <img src={img_clinet_38} alt="" />
               <img src={img_clinet_39} alt="" />
            </div>

            <div className="other_clients">
            <h1 className="other-client">{i18n.language === "en" ? "Other Clients" : "عملاء آخرين"}</h1>


                <div className="items d-flex flex-column gap-4">

                <div  className="d-flex align-items-start gap-2">
                   <MdKeyboardArrowRight fontSize={33}/>
                   <div>
  <h3><span>{i18n.language === "en" ? "Tahrir square garage" : "مرآب ميدان التحرير"}</span> (Consultant: ACE Moharam Bakhoum)</h3>
  <p>{i18n.language === "en" ? "Smoke evacuation axial fans - fresh air fans - roof top axial fans" : "مروحة تهوية الدخان - مروحة الهواء الطلق - مروحة السطح"}</p>
</div>

                </div>

                <div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "NOVOTEL hotel el Zamalek" : "فندق نوڤوتيل الزمالك"}</span> (Consultant: ACE Moharam Bakhoum)</h3>
    <p>{i18n.language === "en" ? "Smoke evacuation axial fans" : "مروحة تهوية الدخان"}</p>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "City stars orange A6 building" : "مبنى سيتي ستارز البرتقالي A6"}</span> (Consultant: EMDEG & Shaker)</h3>
    <p>{i18n.language === "en" ? "Smoke evacuation axial fans - exhaust centrifugal fans" : "مروحة تهوية الدخان - مروحة شفط الدوامة"}</p>
  </div>
</div>

<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "El Mamoura company for construction and tourism development" : "شركة المعمورة للإنشاءات والتطوير السياحي"}</span></h3>
    <p>{i18n.language === "en" ? "Parking Smoke evacuation system using jet fans" : "نظام إخلاء الدخان في المواقف باستخدام مراوح الجت"}</p>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Egypt Air" : "مصر للطيران"}</span></h3>
    <p>{i18n.language === "en" ? "Smoke evacuation axial fans" : "مروحة تهوية الدخان"}</p>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Police Officers Club - Ismailia" : "نادي ضباط الشرطة - الإسماعيلية"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Petrobel Balayim Petroleum" : "بتروبل - بليم بترول"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "GASCO (Egyptian Natural Gas Company)" : "جاسكو (الشركة المصرية للغاز الطبيعي)"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Magawish Villages and Resorts Hurghada" : "قرية ومنتجعات ماجاويش الغردقة"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Concord El Salam Hotel - Sharm El Sheikh" : "فندق كونكورد السلام - شرم الشيخ"}</span></h3>
  </div>
</div>

<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Cataract - Marsa Alam" : "الكتاراكت - مرسى علم"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "El Hawwar Club El Mansoura" : "نادي الحوار المنصورة"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Dar Al Eshara" : "دار العشارة"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Engineering Authority Guest House" : "بيت الضيافة لهيئة الهندسة"}</span></h3>
  </div>
</div>


<div className="d-flex align-items-start gap-2">
  <MdKeyboardArrowRight fontSize={33}/>
  <div>
    <h3><span>{i18n.language === "en" ? "Al Haram hospital" : "مستشفى الحرم"}</span></h3>
  </div>
</div>


                </div>

              
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Clients