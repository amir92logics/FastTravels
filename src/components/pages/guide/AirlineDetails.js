import React, { Component } from "react";
import { Link } from "react-router-dom";

// import sidebarBanner from "../../../assets/images/sidebar-banner.png"
// Using an ES6 transpiler like Babel
// To include the default styles
import "react-rangeslider/lib/index.css";
import AirlinesData from "./../../../airlines.json";
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import CircularProgress from "@mui/material/CircularProgress";
import { loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import offer from "./../../../assets/images/Offer.png";
import TurkishAirineHostess from "./../../../assets/images/TurkishAirlineAirHostes.png";
import BrusselAirineHostess from "./../../../assets/images/BrusselAirlineAirHostes.png";
import EthiopaAirineHostess from "./../../../assets/images/EthiopaAirlineAirHostes.jpg";
import breadcrumbBg from "./../../../assets/images/breadcrumb-bg.png";
import TurkishAirine from "./../../../assets/images/TurkishAirilne.png";
import TurkishMobile from "./../../../assets/images/TurkishMobile.png";
import EthiopianAirline from "./../../../assets/images/Ethiopian-airline.jpg";
import brusselsAirline from "./../../../assets/images/brussels-airline.jpg";

class AirlineDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 10,
      manageState: "",
      bookType: "economy",
      departureDate: "",
      returnDate: "",
      type: false,
      sent: false,
      isClicked: false,
      data: [],
      numberToShow: 8,
    };
    this.sendEmail = this.sendEmail.bind(this);
  }
  componentDidMount() {
    // this.intiScripts();
    window.scrollTo(0, 0);
    const q = query(collection(db, "FaresData"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        // console.log(doc.data().Data);
        // this.setState({data: doc.data().Data});
        this.setState({
          storeData: JSON.parse(doc.data().Data),
          data: JSON.parse(doc.data().Data),
          selectedCountry: JSON.parse(doc.data().Data),
        });
      });
    });
  }
  sendEmail = (e, data) => {
    e.preventDefault();
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      // alert('Captcha Matched');
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      this.setState({ isClicked: true });
      console.log(this.form);
      emailjs
        .sendForm(
          "service_1d21p96",
          "template_mqvxf7a",
          this.form.current,
          "tL_Vpyj5WxQRqs6ec"
        )
        .then(
          (result) => {
            console.log(result.text);
            this.setState({ sent: true, isClicked: false });
          },
          (error) => {
            this.setState({ sent: true, isClicked: false });
            console.log(error.text);
          }
        );
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };
  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  filteredData = (e) => {
    let _temp = this.state.selectedCountry;
    let name = e.target.value;
    let res = _temp.filter((d) => d.airlineCode === name);
    this.setState({ data: res });
    //  return res;
  };
  filteredData1 = (e) => {
    let name = e.target.value;
    console.log(name);
    let res = this.state.storeData.filter((d) => d.country === name);
    this.setState({ data: res, selectedCountry: res });
    //  return res;
  };

  render() {
    // console.log(this.props.match.params.airlineName);
    const airline = this.props.match.params.airlineName.replace(/-/g, ' ');
    let countryList = this.state.data.filter(
      (v, i, a) => a.findIndex((v2) => v2.country === v.country) === i
    );
    // console.log(airline);
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        {/* {isMobile ? <div style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage:  `url(${(airline === "Turkish Airlines") ? TurkishMobile : (airline === "Ethopian Airline") ? EthiopianAirline : (airline === "Brussels Airlines") ? brusselsAirline : breadcrumbBg})`}}  className="breadcrumb-area1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div style={{backgroundImage:  `url(${(airline === "Turkish Airlines") ? TurkishAirine : (airline === "Ethopian Airline") ? EthiopianAirline : (airline === "Brussels Airlines") ? brusselsAirline : breadcrumbBg})`}}  className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>{airline}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>} */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>{airline}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}

        {/* ===============  Package  area start =============== */}
        <div className="package-sidebar-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 mt-20">
                <div className="package-sidebar">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="sidebar-searchbox">
                        <div className="input-group search-box d-flex justify-content-between">
                          <h5 className="">Sort & filter </h5>
                          <button
                            onClick={(e) =>
                              this.setState({ data: this.state.storeData })
                            }
                            style={{
                              backgroundColor: "#356ad8",
                              color: "#fff",
                              fontWeight: "bold",
                              border: "none",
                              height: "50px",
                              width: "100%",
                              borderRadius: "5px",
                              marginTop: "10px",
                            }}
                          >
                            Show All
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="sidebar-categorie mt-40">
                        <h5 className="categorie-head">Destinations</h5>
                        <div className="durations-option radio-box">
                          {this.state.data.length !== 0
                            ? countryList
                                .slice(0, this.state.numberToShow)
                                .map((item) => {
                                  return (
                                    <div className="single-option">
                                      <input
                                        onClick={(e) => this.filteredData1(e)}
                                        value={item.country}
                                        type="radio"
                                        name="categorie"
                                        id={item.country}
                                      />
                                      <label htmlFor={item.country}>
                                        {item.country}
                                      </label>
                                    </div>
                                  );
                                })
                            : null}
                          {this.state.numberToShow === 8 ? (
                            <button
                              onClick={() =>
                                this.setState({
                                  numberToShow: countryList.length,
                                })
                              }
                              style={{
                                backgroundColor: "#356ad8",
                                color: "#fff",
                                fontWeight: "bold",
                                border: "none",
                                height: "50px",
                                width: "100%",
                                borderRadius: "5px",
                              }}
                            >
                              Show More
                            </button>
                          ) : (
                            <button
                              onClick={() => this.setState({ numberToShow: 8 })}
                              style={{
                                backgroundColor: "#356ad8",
                                color: "#fff",
                                fontWeight: "bold",
                                border: "none",
                                height: "50px",
                                width: "100%",
                                borderRadius: "5px",
                              }}
                            >
                              Show Less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="sidebar-banner mt-40">
                        {/* <img src={sidebarBanner} alt="" className="img-fluid" /> */}
                        <div className="sidebar-banner-overlay">
                          <div className="overlay-content">
                            <h3>Get 50% Off In Dubai Tour</h3>
                            <div className="sidebar-banner-btn">
                              <Link to={"#"}>Send inquiry</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-10 mt-20"
                style={{ maxHeight: 1500, overflow: "auto" }}
              >
                {this.props.match.params.airlineName === "undefined" || this.props.match.params.airlineName === "send-inquiry" ? (
                  <div className="package-details-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="package-d-sidebar">
                            <div className="row">
                              <div className="col-lg-12 col-md-6">
                                <div className="p-sidebar-form">
                                  <form
                                    ref={this.form}
                                    onSubmit={(e) => this.sendEmail(e)}
                                  >
                                    <h5 className="package-d-head">
                                      Send Query
                                    </h5>
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <input
                                          className="inputContainer"
                                          name="fname"
                                          type="text"
                                          placeholder="First Name"
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          className="inputContainer"
                                          name="lname"
                                          type="text"
                                          placeholder="Last Name"
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          className="inputContainer"
                                          name="email"
                                          type="email"
                                          placeholder="Your Email"
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          className="inputContainer"
                                          name="phone"
                                          type="tel"
                                          placeholder="Phone"
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <input
                                          className="inputContainer"
                                          name="budget"
                                          type="number"
                                          placeholder="How much your budget?"
                                        />
                                      </div>

                                      <div className="col-lg-12">
                                        <div
                                          className="calendar-input"
                                          id="packageCalenderMainDiv"
                                        >
                                          <label htmlFor="duration1">
                                            Departure Date
                                          </label>
                                          <DatePicker
                                            selected={this.state.departureDate}
                                            name="depDate"
                                            onChange={(date) =>
                                              this.changeDatepickerHandeller(
                                                date
                                              )
                                            }
                                            className="inputContainer input-field check-in"
                                          />
                                          <i
                                            className="flaticon-calendar mt-3"
                                            id="packageCalenderIcon"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <div
                                          className="calendar-input"
                                          id="packageCalenderMainDiv"
                                        >
                                          <label htmlFor="duration1">
                                            Return Date
                                          </label>
                                          <DatePicker
                                            selected={this.state.returnDate}
                                            name="returnDate"
                                            onChange={(date) =>
                                              this.handleReturnDate(date)
                                            }
                                            className="inputContainer input-field check-in"
                                          />
                                          <i
                                            className="flaticon-calendar mt-3"
                                            id="packageCalenderIcon"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <textarea
                                          cols={30}
                                          rows={7}
                                          name="message"
                                          placeholder="Message"
                                          defaultValue={""}
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        {!this.state.isClicked ? (
                                          <input
                                            type="submit"
                                            value="Send Request"
                                            defaultValue="Send inquiry"
                                          />
                                        ) : (
                                          <Link to="" className="btn-second">
                                            <CircularProgress
                                              style={{ color: "#fff" }}
                                            />
                                          </Link>
                                        )}
                                      </div>
                                    </div>
                                  </form>
                                  {this.state.sent ? (
                                    <p className="mt-5">
                                      Your message has been sent. We will
                                      contact you soon.
                                    </p>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="offer-area ">
                      <div className="container">
                        <div className="row">
                          {this.state.data.length !== 0
                            ? this.shuffleArray(this.state.data).map(
                                (item, key) => {
                                  if (
                                    item.airlneName ===
                                    this.props.match.params.airlineName.replace(/-/g, ' ')
                                  ) {
                                    let currentAirline = [
                                      {
                                        AirlineCode: "AA",
                                        airlineLogo:
                                          "https://www.alexatravel.co.uk/wp-content/uploads/2018/09/american-airlines-logo.png",
                                      },
                                    ];

                                    currentAirline = AirlinesData.filter(
                                      (d) => d.AirlineCode === item.airlineCode
                                    );
                                    // console.log(item.airlineName);
                                    if (currentAirline !== undefined) {
                                      return (
                                        <div className="col-lg-12">
                                          <div className="package-card-xl">
                                            <div className="package-thumb-xl">
                                              <img
                                                style={{ height: "40px" }}
                                                src={offer}
                                                alt=""
                                              />

                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  margin: "20px",
                                                  padding: "8px",
                                                  border: "2px solid #eae9e9",
                                                  borderRadius: "100px",
                                                  height: "150px",
                                                  width: "150px",
                                                }}
                                              >
                                                <Link style={{}} to="">
                                                  {currentAirline.length !==
                                                  0 ? (
                                                    <img
                                                      src={
                                                        currentAirline[0]
                                                          .airlineLogo
                                                      }
                                                      alt=""
                                                      className="img-fluid"
                                                    />
                                                  ) : null}
                                                </Link>
                                              </div>
                                            </div>
                                            <div
                                              className="package-details-xl"
                                              style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                width: "100%",
                                              }}
                                            >
                                              <div className="package-info justify-content-lg-end">
                                                <h5>
                                                  {/* <img style={{ height: '50px' }} src={offer} alt="" /> */}
                                                  <span>From</span>
                                                  <span
                                                    style={{
                                                      fontSize: "30px",
                                                      color: "#356ad8",
                                                    }}
                                                  >
                                                    {" "}
                                                    £{item.fares}
                                                  </span>
                                                  /Per Person
                                                  <div
                                                    style={{ fontSize: "12px" }}
                                                  >
                                                    Subject to availability
                                                  </div>
                                                </h5>

                                                {/* <h5><span><span style={{ fontSize: '12px' }}>From</span> £{item.fares}</span>/Per Person</h5> */}
                                                {/* <h5><i className="flaticon-calendar" />5 Days/6 night</h5> */}
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-around",
                                                }}
                                              >
                                                <div>
                                                  <h3
                                                    style={{ color: "#356ad8" }}
                                                  >
                                                    {item.originCode}
                                                  </h3>
                                                  <h6
                                                    style={{
                                                      color: "#9e9e9e",
                                                      fontWeight: "700",
                                                    }}
                                                  >
                                                    {item.deptCity}
                                                  </h6>
                                                  <h6
                                                    style={{
                                                      color: "#000",
                                                      fontWeight: "700",
                                                      marginTop: "8px",
                                                    }}
                                                  >
                                                    {item.deptCountry}
                                                  </h6>
                                                </div>
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    border: "1px dotted #000",
                                                    margin: "10px",
                                                  }}
                                                ></div>

                                                <div>
                                                  <h3
                                                    style={{ color: "#356ad8" }}
                                                  >
                                                    {item.destinationCode}{" "}
                                                  </h3>
                                                  <h6
                                                    style={{
                                                      color: "#9e9e9e",
                                                      fontWeight: "700",
                                                    }}
                                                  >
                                                    {item.arivalCity}
                                                  </h6>
                                                  <h6
                                                    style={{
                                                      color: "#000",
                                                      fontWeight: "700",
                                                      marginTop: "8px",
                                                    }}
                                                  >
                                                    {item.country}
                                                  </h6>
                                                </div>
                                              </div>
                                              <div
                                                style={{
                                                  border: "1px dotted #000",
                                                  margin: "10px",
                                                }}
                                              ></div>
                                              <div className="row text-center">
                                                <div
                                                  className="col-12 col-md-6"
                                                  // onClick={e => {
                                                  //     e.preventDefault();
                                                  //     this.props.currentFlight(item);
                                                  // }}
                                                >
                                                  <Link
                                                    to={`${process.env.PUBLIC_URL}/destination-detail/${item.country.replace(/\s+/g, "-")}/${item.arivalCity.replace(/\s+/g, "-")}/${item.fares}`}
                                                    className={"btn-second"}
                                                  >
                                                    Send inquiry
                                                  </Link>
                                                </div>

                                                <div
                                                  className="col-12  col-md-6 mt-1 num-btn"
                                                  style={{
                                                    color: "#356ad8",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  <a href="tel:02080902417">
                                                    <input
                                                      className="input-submit"
                                                      style={{
                                                        fontSize: "25px",
                                                        borderRadius: "5px",
                                                        border: "none",
                                                        backgroundColor:
                                                          "transparent",
                                                      }}
                                                      type="submit"
                                                      value="0208 090 2417"
                                                      defaultValue="Send inquiry"
                                                    />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  }
                                }
                              )
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="col-md-12 col-lg-4">
                                {airline === "Turkish Airlines" ? <img style={{ width: 'auto', height: "500px" }} src={TurkishAirineHostess} alt="" /> :
                                (airline === "Ethopian Airline") ? <img style={{ width: 'auto', height: "500px" }} src={EthiopaAirineHostess} alt="" /> : (airline === "Brussels Airlines") ? <img style={{ width: 'auto', height: "500px" }} src={BrusselAirineHostess} alt="" /> 
                                :null
                                }

                            </div> */}
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}
// function mapStateToProps(state) {
//     return {
//         currentCountry: state.currentCountry,
//     };
// }
// const currentFlight = (currentState) => ({
//     type: "SET_CURRENT",
//     payload: currentState,
// });
// const mapDispatchToProps = (dispatch) => {
//     return {
//         currentFlight: (payload) => {
//             // console.log(payload)
//             dispatch(currentFlight(payload));
//         },
//     };
// };
export default AirlineDetails;
// export default AirlineDetails;
