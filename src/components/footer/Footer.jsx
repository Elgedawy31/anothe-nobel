import "./footer.css";
// @ts-ignore
import Logo from "../../assets/Logo_remove_bbg.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer">
          <div className="container">

               <div className="footer_top">
               <p>{i18n.language === "en" ? "Instagram Feed" : "إلانستجرام"}</p>

                   <div className="image">
                      <img src={Logo} alt="" />
                   </div>
                   <div className="icons_social">
                          <FaInstagram fontSize={22}/>
                        <Link style={{cursor:"pointer"}} to="https://www.facebook.com/share/1xtrnQw6tvfro1Yi/?mibextid=qi2Omg" target="_blank">

                           <FaFacebook fontSize={22}/>
                        </Link>

                        <FaTwitter fontSize={22}/>
                        <FaPinterest fontSize={22}/>
                   </div>
               </div>

              <div className="footer_bottom">
                  <div className="footer_bottom_left" dir={i18n.language === "en" ? "ltr" : "rtl"}>
                  <div>{i18n.language === "en" ? "Contact" : "اتصل بنا"}</div>

                  <p>{i18n.language === "en" ? "14th Helmy Abd El Aty St. Eight Zone, Nasr City, Cairo, Egypt" : "شارع حلمي عبد العاطي، الحي الثامن، مدينة نصر، القاهرة، مصر"}</p>

                  <p>{i18n.language === "en" ? "Tel&Fax: " : "الهاتف : "}<span dir="ltr">(00202)22718121 - (00202)22718125</span></p>

                  <p>{i18n.language === "en" ? "Customer service : " : "خدمة العملاء: "}<span dir="ltr">(+2) 01065000130 – (+2) 01065000128</span></p>

                  <p className="last_p">{i18n.language === "en" ? "E-mail: " : "البريد الإلكتروني: "}<span>nobeleng@yahoo.com</span></p>

                  </div>

                  <div className="footer_bottom_right" dir={i18n.language === "en" ? "ltr" : "rtl"}>
                  <div>{i18n.language === "en" ? "Working Hours" : "ساعات العمل"}</div>
                  <p>{i18n.language === "en" ? "Mon – Fri:" : "الإثنين - الجمعة:"}<span dir={i18n.language === "en" ? "ltr" : "rtl"}> 7.00am – 6.00pm</span></p>



<p>{i18n.language === "en" ? "Sat:" : "السبت:"}<span dir={i18n.language === "en" ? "ltr" : "rtl"}> 7.00am – 6.00pm</span></p>

                
                  <p>{i18n.language === "en" ? "Sun:" : "الأحد:"}<span dir={i18n.language === "en" ? "ltr" : "rtl"}> 8.00am – 6.00pm</span></p>

                  </div>
              </div>
              
      <div dir={i18n.language === "en" ? "ltr" : "rtl"} className="copy_right">
   {i18n.language === "en" ? "© Copyright -" : "© حقوق النشر -"} <span>NOBEL</span> | {i18n.language === "en" ? "Developed by " : " تطوير بواسطة "} 

   <Link to="whatsapp://send?phone=+201090540382" target="_blank" rel="noopener noreferrer">
    {i18n.language === "en" ? "Omar AbdElraheem" : "عمر عبد الرحيم"}
    </Link> 

   {i18n.language === "en" ? " and " : " و "}
     
   <Link to="whatsapp://send?phone=+201003098950" target="_blank" rel="noopener noreferrer">
     {i18n.language === "en" ? "Mohamed Elgedawy" : "محمد الجداوي"}
     </Link> 
</div>



          </div>
    </div>


  )
}

export default Footer