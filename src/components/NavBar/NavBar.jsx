import React, { useState, useEffect, useRef } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MobileMenu from "../mobileMenu/MobileMenu";
// @ts-ignore
import logo from "../../assets/Logo_remove_bg.png";
import { useTranslation } from "react-i18next";

const NavBar = () => {

  const { t, i18n } = useTranslation();

  const [state, setState] = useState({ state: false });
  const [focused, setFocused] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const mobileMenuElement = useRef(null);
  const [search, setSearch] = useState("");
  const [listMap, setListMap] = useState([]);
  const inputRef = useRef(null);
  const activeMobileMenu = () => {
    mobileMenuElement.current.toggleMobileMenu();
  };


  

  // const handleScroll = () => {
  //   if (scroll > top) {
  //     document.body.style.paddingTop = `${height}px`;
  //   } else {
  //     document.body.style.paddingTop = "0";
  //   }
  // };

  const handleScroll = () => {
    setScroll(window.scrollY);
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

  const searchArr = [
    {
      text:
        i18n.language === "en"
          ? "Centrifugal Fan (heavy duty)"
          : "مروحة الطرد المركزي (الخدمة الشاقة)",
      link: "/products/centrifugal-fan/heavy-duty",
    },
    {
      text:
        i18n.language === "en"
          ? "Centrifugal Fan (transport series)"
          : "مروحة الطرد المركزي (سلسلة النقل)",
      link: "/products/centrifugal-fan/transport-series",
    },
    {
      text:
        i18n.language === "en"
          ? "Centrifugal Fan (box fans)"
          : "مروحة الطرد المركزي (مراوح الصندوق)",
      link: "/products/centrifugal-fan/box-fans",
    },
    {
      text: i18n.language === "en" ? "Accessories" : "الملحقات",
      link: "/products/accessories",
    },
    {
      text: i18n.language === "en" ? "Custom Ventilators" : "المنافي العرفية",
      link: "/products/custom-venilrators",
    },
    {
      text: i18n.language === "en" ? "Air Filtering" : "تصفية الهواء",
      link: "/products/air-filering",
    },
    {
      text: i18n.language === "en" ? "Roof Top Fans" : "مروحة السطح",
      link: "/products/roof-top-fans",
    },
    {
      text: i18n.language === "en" ? "Axial Fans" : "المروحة الشفافة",
      link: "/products/axial-fans",
    },
    {
      text: i18n.language === "en" ? "smoke axial inline fans" : "مراوح الدخان الخطية المحورية",
      link: "/products/smoke-axial",
    },
    {
      text: i18n.language === "en" ? "smoke centrifugal fans" : "مراوح الدخان الطردية",
      link: "/products/smoke-centrifugal",
    },
  ];

  useEffect(() => {
    setListMap(
      searchArr.filter((e) => e.text.includes(search.toLocaleLowerCase()))
    );
  }, [search]);

  const handleblur = () => {
    inputRef.current.blur();
    setFocused(false);
  };

  
  return (
    <div>
     <div className={`header-area header-sticky header-sticky--default ${scroll > top ? "is-sticky" : ""}`}>
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
                      <div
                        className=" search-section"
                        onMouseLeave={() => handleblur()}
                      >
                        <input
                          type="text"
                          ref={inputRef}
                          onChange={(e) => setSearch(e.target.value)}
                          onFocus={() => setFocused(true)}
                          placeholder={
                            i18n.language === "en"
                              ? "Search For Models"
                              : "ابحث عن المنتجات"
                          }
                        />
                        {focused && (
                          <ul
                            dir={i18n.language === "en" ? "ltr" : "rtl"}
                            className=" py-3 px-4 d-flex flex-column gap-3  position-absolute "
                            style={{
                              zIndex: "10000000000000",
                              listStyle: "none",
                              width: "300px",
                              backgroundColor: "white",

                              boxShadow: "0 0 5px rgba(0, 0, 0, 0.01)",
                            }}
                          >
                            {listMap?.map((e) => (
                              <Link to={e.link} className="fs-6">
                                {e.text}
                              </Link>
                            ))}
                          </ul>
                        )}
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
                          <div>
                            {state.state
                              ? "EN"
                              : i18n.language == "ar"
                              ? "EN"
                              : "AR"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mobile-navigation-icon"
                      style={{ width: "fit-content", height: "fit-content",marginRight:'1rem' }}
                    >
                      <div
                        className="languages-btn"
                        onClick={() => {
                          myFunction();
                          i18n.changeLanguage(state.state ? "en" : "ar");
                        }}
                      >
                        <GrLanguage fontSize={"1rem"} />
                        <div>
                          {state.state
                            ? "EN"
                            : i18n.language == "ar"
                            ? "EN"
                            : "AR"}
                        </div>
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
          <div
            className="header-navigation-area white-bg private-border-bt"
            dir={i18n.language === "en" ? "ltr" : "rtl"}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-navigation header-navigation--header-default position-relative">
                    <div className="header-navigation__nav position-static">
                      <nav>
                        <ul>
                          <li className="has-children--multilevel-submenu">
                            <Link to={`/`}>
                              {" "}
                              {i18n.language === "en"
                                ? "Home"
                                : "الصفحة الرئيسية"}{" "}
                            </Link>
                          </li>

                          <li className="has-children has-children--multilevel-submenu">
                            <Link to={`/products`}>
                              {i18n.language === "en" ? "products" : "المنتجات"}
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
                                  {i18n.language === "en"
                                    ? "Centrifugal Fan"
                                    : "المروحة الطاردة"}
                                </Link>

                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/heavy-duty`}
                                    >
                                      {i18n.language === "en"
                                        ? "Heavy Duty"
                                        : "الخدمة الشاقة"}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/transport-series`}
                                    >
                                      {i18n.language === "en"
                                        ? "Transport Series"
                                        : "سلسلة النقل"}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/box-fans`}
                                    >
                                      {i18n.language === "en"
                                        ? "Box Fans"
                                        : "مراوح صندوقية"}
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/axial-fans`}
                                  className="uppercase"
                                >
                                  {i18n.language === "en"
                                    ? "Axial Fans Ventilation"
                                    : "المراوح المحورية للتهوية"}
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
                                  {i18n.language === "en"
                                    ? "Roof Top Fans"
                                    : "مراوح السطح"}
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
                                  {i18n.language === "en"
                                    ? "Air Filtering System"
                                    : "نظام تصفية الهواء"}
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
                                  {i18n.language === "en"
                                    ? "Custom Ventilators"
                                    : "المنتجات المخصصة للتهوية"}
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
                                  {i18n.language === "en"
                                    ? "Accessories"
                                    : "ملحقات"}
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
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/smoke-axial`}
                                  className="uppercase"
                                >
                                  {i18n.language === "en"
                                    ? "Smoke axial inline fans"
                                    : "مراوح الدخان الخطية المحورية"}
                                </Link>                              
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/smoke-centrifugal`}
                                  className="uppercase"
                                >
                                  {i18n.language === "en"
                                    ? "Smoke centrifugal fans"
                                    : "مراوح الدخان الطردية"}
                                </Link>                              
                              </li>
                            </ul>
                          </li>
                          <li className=" has-children--multilevel-submenu">
                            <Link to={"/applications"} className="menu-link">
                              {i18n.language === "en"
                                ? "Applications"
                                : "التطبيقات"}
                              {/* <MdOutlineKeyboardArrowDown
                                  style={{ marginLeft: "6px" }}
                                  fontSize={"1.2rem"}
                                /> */}
                            </Link>
                          </li>

                          <li>
                            <Link to={`/certifications`}>
                              {i18n.language === "en"
                                ? "Certifications"
                                : "الشهادات"}
                            </Link>{" "}
                          </li>

                          <li>
                            <Link to={`/clients`}>
                              {i18n.language === "en"
                                ? "Clients"
                                : "العملاء"}
                            </Link>{" "}
                          </li>
                          <li>
                            <Link to={`/about-us`}>
                              {i18n.language === "en" ? "About" : "عنا"}
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
      <MobileMenu
        listMap={listMap}
        inputRef={inputRef}
        setSearch={setSearch}
        setFocused={setFocused}
        handleblur={handleblur}
        focused={focused}
        placeholder={
          i18n.language === "en" ? "Search For Models" : "ابحث عن المنتجات"
        }
        ref={mobileMenuElement}
        t={t}
        i18n={i18n}
      />
    </div>
  );
};

export default NavBar;
