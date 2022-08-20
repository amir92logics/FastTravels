import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
//Import Image
import logoMain from "../../assets/images/fastflight.png";
import secondLogo from "../../assets/images/fastflight.png";
import { connect } from "react-redux";
import scrollDetector from "scroll-detector";

class HeaderTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <>
        {/* ===============  header area start =============== */}
        <header>
          <div className="header-area-2 header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex justify-content-between">
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className="navbar-brand"
                        onClick={this.scrollTop}
                      >
                        <img
                          style={{ height: "103px" }}
                          src={logoMain}
                          alt="Fast Travels"
                        />
                      </Link>
                    </div>
                    <div className="navbar-icons">
                      <a
                        style={{ color: "red", fontWeight: "bold" }}
                        href="tel:02080902417"
                      >
                        <i className="bx bx-phone" /> 0208 090 2417
                      </a>
                      <div className="mobile-menu d-flex ">
                        <div className="top-search-bar m-0 d-block d-xl-none"></div>
                        <Link to={"#"} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <nav className="main-nav">
                    <div className="navber-logo-sm">
                      <img
                        style={{ height: "103px" }}
                        src={secondLogo}
                        alt="Fast Travels"
                        className="img-fluid"
                      />
                    </div>
                    <ul>
                      <li>
                        <Link to="/">Flights</Link>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/business-class-flights`}
                          onClick={this.scrollTop}
                        >
                          Business Class Flights
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/all-destinations`}
                          onClick={this.scrollTop}
                        >
                          Destinations
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/airlines`}
                        >
                          Airlines
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/beat-my-quote`}
                        >
                          Beat My Quote
                        </NavLink>
                      </li>

                      <li className="has-child-menu">
                        <Link to={"#"}>More</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/about-us`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              About Us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/contact`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Contact Us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/terms-conditons`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Terms & Conditions
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/privacy-policy`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Privacy Policy
                            </NavLink>
                          </li>
                          {/* <li>
                                                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/cookies-policy`} className="sub-item" onClick={this.scrollTop}>Cookies Policy</NavLink>
                                                    </li> */}
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/booking-conditons`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              Booking Conditions
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/faqs`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              FAQS
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div
                      className="searchbar-open"
                      style={{ marginLeft: "25px" }}
                    >
                      <a
                        style={{ color: "red", fontWeight: "bold" }}
                        href="tel:02080902417"
                      >
                        <i className="bx bx-phone" /> 0208 090 2417
                      </a>
                    </div>
                    {/* <div className="navbar-icons-2">
                                           
                                            <div className="user-dropdown-icon">
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link to={`#`} >Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link to={`#`} >My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link to={`#`} >Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link to={`#`} >Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <a href="tel:02080902417">0208 090 2417</a>
                        </li>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-envelope" />
                          <a href="mailto:info@fasttravels.co.uk">
                            info@fasttravels.co.uk
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <form>
              <div className="main-searchbar">
                <div className="searchbar-close">
                  <i className="bx bx-x" />
                </div>
                <input type="text" placeholder="Search Here......" />
                <div className="searchbar-icon">
                  <i className="bx bx-search" />
                </div>
              </div>
            </form>
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }
}
const currentData = (currentState) => ({
  type: "SET_DATA",
  payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
  return {
    currentData: (payload) => {
      dispatch(currentData(payload));
    },
  };
};
export default connect(null, mapDispatchToProps)(HeaderTwo);
