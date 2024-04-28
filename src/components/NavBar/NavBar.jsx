import React, { useState, useEffect, useRef } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MobileMenu from "../mobileMenu/MobileMenu";
// @ts-ignore
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({ state: false });
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const mobileMenuElement = useRef(null);

  const activeMobileMenu = () => {
    mobileMenuElement.current.toggleMobileMenu();
  };

  const handleScroll = () => {
    if (scroll > top) {
      document.body.style.paddingTop = `${height}px`;
    } else {
      document.body.style.paddingTop = "0";
    }
  };

  useEffect(() => {
    const el = document.querySelector("nav");
    setTop(el.offsetTop);
    setHeight(el.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const myFunction = () => {
    setState((prevState) => ({
      state: !prevState.state,
    }));
  };

  

  return (
    <div >
      <div
        className={`header-area header-sticky header-sticky--default ${
          scroll > top ? "is-sticky" : ""
        }`}
      >
        <div className="header-area__desktop header-area__desktop--default">
          <div className="header-top-bar">
            <div className="container"></div>
          </div>
          <div className="header-info-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="header-info-wrapper align-items-center">
                    <div className="header-contact-info justify-content-start ">
                      <div className=" search-section">
                        <input type="text" placeholder="Search For Models" />
                      </div>
                    </div>
                    <div className="logo">
                      <Link to={`/`}>
                        <img src={logo} className="img-fluid" alt="Logo" />
                      </Link>
                    </div>

                    <div className="header-contact-info">
                      <div className="header-info-single-item">
                        <div
                          className="languages-btn"
                          onClick={() => {
                            myFunction();
                            i18n.changeLanguage(state.state ? "en" : "ar");
                          }}
                        >
                          <GrLanguage fontSize={"1rem"} />
                          <div>{state.state ? "EN" : 
                            i18n.language == "ar" ? "EN" : "AR"
                        }</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mobile-navigation-icon"
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      <div
                        className="languages-btn"
                        onClick={() => {
                          myFunction();
                          i18n.changeLanguage(state.state ? "en" : "ar");
                        }}
                      >
                        <GrLanguage fontSize={"1rem"} />
                          <div>{state.state ? "EN" : 
                            i18n.language == "ar" ? "EN" : "AR"
                        }</div>
                      </div>
                    </div>
                    <div
                      className="mobile-navigation-icon"
                      id="mobile-menu-trigger"
                      onClick={activeMobileMenu}
                    >
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-navigation-area white-bg private-border-bt" dir={i18n.language === "en" ? "ltr" : "rtl"}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-navigation header-navigation--header-default position-relative">
                    <div className="header-navigation__nav position-static">
                      <nav>
                        <ul>
                          <li className="has-children--multilevel-submenu">
                            <Link to={`/`}>   {i18n.language === "en" ? "HOME" : "الصفحة الرئيسية"} </Link>
                          </li>

                          <li className="has-children has-children--multilevel-submenu">
                            <Link to={`/products`}>
                            {i18n.language === "en" ? "PRODUCTS" : "المنتجات"}
                              <MdOutlineKeyboardArrowDown
                                style={{ marginLeft: "6px" }}
                                fontSize={"1.2rem"}
                              />
                            </Link>
                            <ul className="submenu">
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/centrifugal-fan/heavy-duty`}
                                  className="uppercase"
                                >
                                    {i18n.language === "en" ? "Centrifugal Fan" : "المروحة الطاردة"}

                                </Link>

                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/heavy-duty`}
                                    >
                                        {i18n.language === "en" ? "Heavy Duty" : "الخدمة الشاقة"}

                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/transport-series`}
                                    >
                                        {i18n.language === "en" ? "Transport Series" : "سلسلة النقل"}

                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/box-fans`}
                                    >
                                        {i18n.language === "en" ? "Box Fans" : "مراوح صندوقية"}

                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/axial-fans`}
                                  className="uppercase"
                                >
                                {i18n.language === "en" ? "Axial Fans Ventilation" : "المراوح المحورية للتهوية"}

                                </Link>

                                {/* <ul className="submenu">
                                    <li>
                                      <Link to={`/products`}>
                                        Ring - NEA Series{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={`/products`}>
                                        Plate - NET/D Series
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to={`/residential-roofer/premium-roofing`}
                                      >
                                        Duted - NEI Series
                                      </Link>
                                    </li>
                                  </ul> */}
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/roof-top-fans`}
                                  className="uppercase"
                                >
                                    {i18n.language === "en" ? "Roof Top Fans" : "مراوح السطح"}

                                </Link>

                                {/* <ul className="submenu">
                                    <li>
                                      <Link to={`/products`}>
                                        Axial - NE Series{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={`/products`}>
                                        Centrifugal - nc series
                                      </Link>
                                    </li>
                                  </ul> */}
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/air-filering`}
                                  className="uppercase"
                                >
                                  {i18n.language === "en" ? "Air Filtering System" : "نظام تصفية الهواء"}

                                </Link>

                                {/* <ul className="submenu">
                                    <li>
                                      <Link to={`/products`}>
                                        Cartridge extraction{" "}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={`/products`}>
                                        Sleeves extraction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={`/products`}>
                                        Active coal filtration
                                      </Link>
                                    </li>
                                  </ul> */}
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/custom-venilrators`}
                                  className="uppercase"
                                >
                                    {i18n.language === "en" ? "Custom Ventilators" : "المنتجات المخصصة للتهوية"}

                                </Link>

                                {/* <ul className="submenu">
                                    <li>
                                      <Link to={`/products`}>
                                        Custom ventilators
                                      </Link>
                                    </li>
                                  </ul> */}
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/accessories`}
                                  className="uppercase"
                                >
                                    {i18n.language === "en" ? "Accessories" : "ملحقات"}

                                </Link>

                                {/* <ul className="submenu">
                                    <li>
                                      <Link to={`/products`}>Dampers</Link>
                                    </li>
                                    <li>
                                      <Link to={`/products`}>Air Outlets</Link>
                                    </li>
                                  </ul> */}
                              </li>
                            </ul>
                          </li>
                          <li className=" has-children--multilevel-submenu">
                            <Link to={"/applications"} className="menu-link">
                            {i18n.language === "en" ? "APPLICATIONS" : "التطبيقات"}
                              {/* <MdOutlineKeyboardArrowDown
                                  style={{ marginLeft: "6px" }}
                                  fontSize={"1.2rem"}
                                /> */}
                            </Link>
                            {/* <ul className="submenu">
                                <li>
                                  <Link
                                    to={`/locations/alabama`}
                                    className="uppercase"
                                  >
                                    ALABAMA
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`/locations/florida`}
                                    className="uppercase"
                                  >
                                    FLORIDA
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`/locations/texas`}
                                    className="uppercase"
                                  >
                                    TEXAS
                                  </Link>
                                </li>
                              </ul> */}
                          </li>

                          <li>
                            <Link to={`/certifications`}>  
                             {i18n.language === "en" ? "CERTIFICATIONS" : "الشهادات"}</Link>{" "}
                          </li>
                          <li>
                            <Link to={`/about-us`}>
                            {i18n.language === "en" ? "ABOUT" : "عنا"}
                             
                            </Link>
                          </li>
                          {/* <li>
                              <Link to={`/contact-us`}>CONTACT</Link>
                            </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu ref={mobileMenuElement}  t={t} i18n={i18n} />
      
    </div>
  );
};

export default NavBar;
