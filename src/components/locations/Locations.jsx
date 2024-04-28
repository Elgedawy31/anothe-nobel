import { Row } from "react-bootstrap";
import LocationsCard from "./LocationsCard";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Locations() {

  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <Row className="space-between-sections locations ">
        <LocationsCard
        
          icon={<CiLocationOn />}
          title = {i18n.language === "en" ? "Locate Us" : "حدد موقعنا"}
          desc= {i18n.language === "en" ? "14th helmy abd el aty st. eight zone nasr city cairo egypt" : "شارع حلمي عبد العاطي، الحي الثامن، مدينة نصر، القاهرة، مصر"}
        />
        <LocationsCard
          icon={<IoTimeOutline  />}
          title = {i18n.language === "en" ? "Open Hours" : "ساعات العمل"}
          desc={i18n.language === "en"? "Sat To Fri 9:00 AM - 9:00 PM" : "من السبت إلى الجمعة من الساعة 9:00 صباحًا حتى الساعة 9:00 مساءً.          "}
        />
        <LocationsCard
          isMail={true}
          icon={<IoMailOutline  />}
          title={i18n.language === "en" ? "Mai Us" : "الايميل"}
          desc={"nobeleng@yahoo.com"}
        />
      </Row>
    </div>
  );
}

export default Locations;
