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
                  <input type="search" placeholder="Search ..." />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to={`/`}
                    >HOME</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to={`/products`}>PRODUCTS</Link>
                    <ul className="sub-menu">
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/centrifugal-fan/heavy-duty`}
                                  className="uppercase"
                                >
                                  Centrifugal Fan
                                </Link>

                                <ul className="sub-menu">
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/heavy-duty`}
                                    >
                                      Heavy Duty
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/transport-series`}
                                    >
                                      Transport Series
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/products/centrifugal-fan/box-fans`}
                                    >
                                      Box Fans
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`/products/axial-fans`}
                                  className="uppercase"
                                >
                                  Axial Fans Ventilation
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
                                  Roof Top Fans
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
                                  Air Filering System
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
                                  Custom Venilrators
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
                                  Accessories
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
                  <li className="menu-item-has-children">
                    <Link to={`/applications`}>APPLICATIONS</Link>
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
                    <Link to={`/certifications`}>CERTIFICATIONS</Link>
                  </li>
                  <li>
                    <Link to={`/about-us`}>ABOUT</Link>
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
                  <a href="#/" title="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#/" title="Twitter">
                    <FaTwitter  />
                  </a>
                  <a href="#/" title="Youtube">
                    <FaInstagram  />
                  </a>
                  <a href="#/" title="Vimeo">
                    <FaPinterest  />
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
