import React, { Component } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

class MobileMenu extends Component {
  state = {
    active: false,
  };

  toggleMobileMenu = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  componentDidMount() {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }

  render() {
    const i18n = this.props.i18n;
    const t = this.props.t;
    return (
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            this.state.active ? "active" : ""
          } `}
          id="mobile-menu-overlay"
        >
          <a
            href="#/"
            className="offcanvas-menu-close"
            id="mobile-menu-close-trigger"
            onClick={this.toggleMobileMenu}
          >
            <IoMdClose />
          </a>
          <div className="offcanvas-wrapper">
            <div className="offcanvas-inner-content">
              <div className="offcanvas-mobile-search-area">
                <form action="#">
                  <input
                    ref={this.props.inputRef}
                    onChange={(e) => this.props.setSearch(e.target.value)}
                    onFocus={() => this.props.setFocused(true)}
                    placeholder={
                      i18n.language === "en"
                        ? "Search For Models"
                        : "ابحث عن المنتجات"
                    }
                    type="search"
                  />
                  {this.props.focused && (
                    <ul
                      dir={i18n.language === "en" ? "ltr" : "rtl"}
                      className=" py-3 px-4 d-flex flex-column gap-3 mt-3  position-absolute "
                      style={{
                        zIndex: "10000000000000",
                        listStyle: "none",
                        width: "300px",
                        backgroundColor: "white",

                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <span className="position-absolute " onClick={() => this.props.setFocused(false)} style={{right:'12px'}} >X</span>
                      {this.props.listMap?.map((e) => (
                        <Link to={e.link} className="fs-6">
                          {e.text}
                        </Link>
                      ))}
                    </ul>
                  )}
                </form>
              </div>
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  
                  <li className="menu-item-has-children">
                    <Link to={`/`}>
                      {" "}
                      {i18n.language === "en" ? "Home" : "الصفحة الرئيسية"}{" "}
                    </Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to={`/products`}>
                      {i18n.language === "en" ? "Products" : "المنتجات"}
                    </Link>
                    <ul className="sub-menu">
                      <li className="has-children has-children--multilevel-submenu">
                        <Link
                          to={`/products/centrifugal-fan/heavy-duty`}
                          className="uppercase"
                        >
                          {i18n.language === "en"
                            ? "Centrifugal Fan"
                            : "المروحة الطاردة"}
                        </Link>

                        <ul className="sub-menu">
                          <li>
                            <Link to={`/products/centrifugal-fan/heavy-duty`}>
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
                            <Link to={`/products/centrifugal-fan/box-fans`}>
                              {i18n.language === "en"
                                ? "Box Fans"
                                : "مراوح صندوقية"}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <Link to={`/products/axial-fans`} className="uppercase">
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
                  <li className="menu-item-has-children">
                    <Link to={`/applications`}>
                      {i18n.language === "en" ? "Applications" : "التطبيقات"}
                    </Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link to={`/locations/alabama`} className="uppercase">
                          ALABAMA
                        </Link>
                      </li>
                      <li>
                        <Link to={`/locations/florida`} className="uppercase">
                          FLORIDA
                        </Link>
                      </li>
                      <li>
                        <Link to={`/locations/texas`} className="uppercase">
                          TEXAS
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="menu-item-has-children">
                    <Link to={`/certifications`}>
                      {i18n.language === "en" ? "Certifications" : "الشهادات"}
                    </Link>
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
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                      <li>
                        <i className="ion-android-phone-portrait" />{" "}
                        <a href="tel://12452456012">(1245) 2456 012 </a>
                      </li>
                      <li>
                        <i className="ion-android-mail" />{" "}
                        <a href="mailto:nobeleng@yahoo.com">
                          nobeleng@yahoo.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Off Canvas Widget Social Start*/}
                <div className="off-canvas-widget-social">
                  <div className="icons_social"></div>
                  <Link style={{cursor:"pointer"}} to="https://www.facebook.com/share/1xtrnQw6tvfro1Yi/?mibextid=qi2Omg" target="_blank" title="Facebook">
                    
                    <FaFacebook />
                  </Link>
                  <a href="#/" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#/" title="Youtube">
                    <FaInstagram />
                  </a>
                  <a href="#/" title="Vimeo">
                    <FaPinterest />
                  </a>
                </div>
                {/*Off Canvas Widget Social End*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    );
  }
}

export default MobileMenu;
