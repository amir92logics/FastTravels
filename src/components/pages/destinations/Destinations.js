import React, { Component } from "react";
import BreadCrumb from "./desitinationBreadCrumb";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import AirlinesData from "./../../../airlines.json";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      color: "#356ad8",
    };
  }
  componentDidMount() {
    // this.intiScripts();
    const q = query(collection(db, "FaresData"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        this.setState({ data: JSON.parse(doc.data().Data) });
      });
    });
  }
  render() {
    let countryList = this.state.data.filter(
      (v, i, a) => a.findIndex((v2) => v2.country === v.country) === i
    );
    let countryList1 = this.state.data.filter(
      (v, i, a) => a.findIndex((v2) => v2.continent === v.continent) === i
    );
    const AllContinent = [
      ...this.state.data.reduce((set, { continent }) => {
        set.add(continent);
        return set;
      }, new Set()),
    ];
    const destinationsOptions = {
      stagePadding: 1,
      items: 50,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplay: true,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 2,
          nav: false,
          dost: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };
    return (
      <>
        <BreadCrumb />

        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Flight For Your Destination</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img
                    src={`/assets/images/United State of America.jpg`}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="pakage-overlay">
                    <strong>United State of America</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                {this.state.data.length !== 0 ? (
                  <OwlCarousel
                    className="row owl-carousel destinations-1"
                    {...destinationsOptions}
                  >
                    {countryList1.map((item) => {
                      if (item.continent === "United State of America") {
                        let usaCountries = this.state.data.filter(
                          (d) => d.continent === "United State of America"
                        );
                        let countryLisData = usaCountries.filter(
                          (v, i, a) =>
                            a.findIndex(
                              (v2) => v2.arivalCity === v.arivalCity
                            ) === i
                        );
                        return countryLisData.map((cont) => {
                          let en_conuntry = item.country.replace(/\s+/g, "-");
                          let en_city = item.arivalCity.replace(/\s+/g, "-");
                          return (
                            <div className="package-card">
                              <div className="package-thumb">
                                <Link
                                  onClick={() => this.props.currentFlight(item)}
                                  to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                >
                                  <img
                                    src={`/assets/images/${cont.arivalCity}.png`}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="package-details">
                                <div className="package-info">
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                  >
                                    <h5>
                                      <span>From</span>
                                      <span style={{ fontSize: "18px" }}>
                                        {" "}
                                        £{cont.fares}
                                      </span>
                                      /Per Person
                                      <img
                                        style={{ height: "50px" }}
                                        src={
                                          AirlinesData.filter(
                                            (d) =>
                                              d.AirlineCode === item.airlineCode
                                          )[0].airlineLogo
                                        }
                                        alt=""
                                      />
                                    </h5>
                                  </Link>
                                </div>
                                <h3>
                                  <i className="flaticon-arrival" />
                                  <Link
                                    onClick={() =>
                                      this.props.currentFlight(item)
                                    }
                                    to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {cont.arivalCity +
                                      " " +
                                      "(" +
                                      cont.destinationCode +
                                      ")" +
                                      " - " +
                                      cont.country}
                                  </Link>
                                </h3>
                                <div
                                  className="num-btn"
                                  style={{ fontWeight: "bold" }}
                                >
                                  <a href="tel:02080902417">
                                    <input
                                      className="input-submit"
                                      style={{
                                        fontSize: "25px",
                                        borderRadius: "5px",
                                        border: "none",
                                        backgroundColor: "transparent",
                                      }}
                                      type="submit"
                                      value="0208 090 2417"
                                      defaultValue="Send inquiry"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        });
                      }
                    })}
                  </OwlCarousel>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img
                    src={`/assets/images/Australia.jpg`}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="pakage-overlay">
                    <strong>Australia</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                {this.state.data.length !== 0 ? (
                  <OwlCarousel
                    className="row owl-carousel destinations-1"
                    {...destinationsOptions}
                  >
                    {countryList1.map((item) => {
                      if (item.continent === "Australia") {
                        let usaCountries = this.state.data.filter(
                          (d) => d.continent === "Australia"
                        );
                        let countryLisData = usaCountries.filter(
                          (v, i, a) =>
                            a.findIndex(
                              (v2) => v2.arivalCity === v.arivalCity
                            ) === i
                        );
                        return countryLisData.map((cont) => {
                          let en_conuntry = item.country.replace(/\s+/g, "-");
                          let en_city = item.arivalCity.replace(/\s+/g, "-");
                          return (
                            <div className="package-card">
                              <div className="package-thumb">
                                <Link
                                  onClick={() => this.props.currentFlight(item)}
                                  to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                >
                                  <img
                                    src={`/assets/images/${cont.arivalCity}.png`}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="package-details">
                                <div className="package-info">
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                  >
                                    <h5>
                                      <span>From</span>
                                      <span style={{ fontSize: "18px" }}>
                                        {" "}
                                        £{cont.fares}
                                      </span>
                                      /Per Person
                                      <img
                                        style={{ height: "50px" }}
                                        src={
                                          AirlinesData.filter(
                                            (d) =>
                                              d.AirlineCode === item.airlineCode
                                          )[0].airlineLogo
                                        }
                                        alt=""
                                      />
                                    </h5>
                                  </Link>
                                </div>
                                <h3>
                                  <i className="flaticon-arrival" />
                                  <Link
                                    onClick={() =>
                                      this.props.currentFlight(item)
                                    }
                                    to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {cont.arivalCity +
                                      " " +
                                      "(" +
                                      cont.destinationCode +
                                      ")" +
                                      " - " +
                                      cont.country}
                                  </Link>
                                </h3>
                                <div
                                  className="num-btn"
                                  style={{ fontWeight: "bold" }}
                                >
                                  {/* <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a> */}
                                  <a href="tel:02080902417">
                                    <input
                                      className="input-submit"
                                      style={{
                                        fontSize: "25px",
                                        borderRadius: "5px",
                                        border: "none",
                                        backgroundColor: "transparent",
                                      }}
                                      type="submit"
                                      value="0208 090 2417"
                                      defaultValue="Send inquiry"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        });
                      }
                    })}
                  </OwlCarousel>
                ) : null}
              </div>
            </div>

            {AllContinent.map((con) => (
              <div className="row">
                {con !== "United State of America" &&
                con !== "Australia" &&
                con !== "South America" ? (
                  <div className="col-lg-3 col-md-3">
                    <div className="package-slider-wrap">
                      <img
                        src={`/assets/images/${con}.jpg`}
                        alt=""
                        className="img-fluid"
                      />
                      <div className="pakage-overlay">
                        <strong>{con}</strong>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="col-lg-9 col-md-9">
                  {this.state.data ? (
                    <OwlCarousel
                      className="row owl-carousel destinations-1"
                      {...destinationsOptions}
                    >
                      {countryList.map((item) => {
                        if (item.continent === con) {
                          let currCountry = item.country.replace(/\s+/g, "-");
                          if (
                            item.continent !== "United State of America" &&
                            item.continent !== "Australia" &&
                            item.continent !== "South America"
                          ) {
                            return (
                              <div className="package-card">
                                <div className="package-thumb">
                                  <Link
                                    onClick={() =>
                                      this.props.currentCountry(item.country)
                                    }
                                    to={`${process.env.PUBLIC_URL}/country/${currCountry}`}
                                  >
                                    <img
                                      src={`/assets/images/${item.country}.jpg`}
                                      alt=""
                                      className="img-fluid"
                                    />
                                    {/* <img src={`/assets/images/${item.country}.jpg`} alt="" className="img-fluid" /> */}
                                  </Link>
                                </div>
                                <div className="package-details">
                                  <h3>
                                    <i className="flaticon-arrival" />
                                    <Link
                                      onClick={() =>
                                        this.props.currentCountry(item.country)
                                      }
                                      to={`${process.env.PUBLIC_URL}/country/${currCountry}`}
                                      style={{ fontSize: "15px" }}
                                    >
                                      {item.country}
                                    </Link>
                                  </h3>
                                  <div
                                    className="num-btn"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {/* <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a> */}
                                    <a href="tel:02080902417">
                                      <input
                                        className="input-submit"
                                        style={{
                                          fontSize: "25px",
                                          borderRadius: "5px",
                                          border: "none",
                                          backgroundColor: "transparent",
                                        }}
                                        type="submit"
                                        value="0208 090 2417"
                                        defaultValue="Send inquiry"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        }
                      })}
                    </OwlCarousel>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
        <div className="about-wrapper mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className=" pb-40">
                  <h1>All Destinations</h1>
                  <p className=" pb-40">
                    Travel Across the world with FastTravels. We're providing
                    multiple destinations flight tickets and helping our valued
                    customers to reach their loved ones. Come to us with your
                    desired destinations and we will immediately provide you
                    with the best and most cost-effective options. We are making
                    you independent of your choice with a range for{" "}
                    <a href="http://fasttravels.co.uk/business-class-flights">
                      business class
                    </a>
                    , direct and indirect flights. Our end goal is to save your
                    time and money so that you can focus on the more important
                    things- like planning the fun side of your trip. We have
                    made your access to worldwide travelling stations and
                    brought the facility to book all{" "}
                    <strong>destinations airline tickets</strong> through your
                    devices. To ensure transparent, easy and efficient
                    e-ticketing system in United Kingdom. Now that’s something
                    to smile about!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const currentFlight = (currentState) => ({
  type: "SET_CURRENT",
  payload: currentState,
});
const currentCountry = (currentState) => ({
  type: "SET_CURRENT_COUNTRY",
  payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
  return {
    currentCountry: (payload) => {
      dispatch(currentCountry(payload));
    },
    currentFlight: (payload) => {
      dispatch(currentFlight(payload));
    },
  };
};
export default connect(null, mapDispatchToProps)(AboutUs);
