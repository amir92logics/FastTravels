import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CircularProgress from "@mui/material/CircularProgress";

class Index extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      departureDate: "",
      returnDate: "",
      type: false,
      isClicked: false,
    };
    this.sendEmail = this.sendEmail.bind(this);
  }
  sendEmail = (e, data) => {
    e.preventDefault();
    this.setState({ isClicked: true });
    console.log(this.form);
    emailjs
      .sendForm(
        "service_1d21p96", "template_mqvxf7a", this.form.current, 'tL_Vpyj5WxQRqs6ec'
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({ sent: true, isClicked: false });
        },
        (error) => {
          console.log(error.text);
          this.setState({ sent: true, isClicked: false });
        }
      );
  };

  changeDatepickerHandeller = (date) => {
    this.setState({ departureDate: date });
  };
  handleReturnDate = (date) => {
    this.setState({ returnDate: date });
  };

  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const departureDate = this.state.departureDate;
    const returnDate = this.state.returnDate;
    // console.log(this.props.currntObj);
    const data = this.props.currntObj;
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Beat My Quote</h2>
                  <p style={{ color: "#fff" }}>
                    Thanks to our dedicated team of professionals, we have
                    mastered finding you the best flight quotes for your trip
                    and make sure that you'll never have that nagging doubt that
                    you've missed out on a better deal elsewhere. To beat your
                    quotes of worldwide <string>airline booking</string> and
                    destinations <strong>tour package</strong>, we take this a
                    bit further of affordable travel available for everyone. As
                    professionals, we're changing ways we travel to make a more
                    open and tolerant atmosphere. This form allows you to submit
                    a request to beat an offer you found online. Fill out the
                    form below and one of our experts will Beat Your Quote!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="package-details-wrapper pt-120">
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
                          <h5 className="package-d-head">Book This Package</h5>
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
                            {/* <div className="col-lg-12">
                                                <input className="inputContainer" name="budget" type="number" placeholder="How much your budget?" />
                                            </div> */}
                            <div className="col-lg-12">
                              <div
                                className="calendar-input"
                                id="packageCalenderMainDiv"
                              >
                                <label
                                  htmlFor="duration1"
                                  style={{fontSize: "14px", color: '#a5a5a5'}}
                                >
                                  Departure Date
                                </label>
                                <DatePicker
                                  selected={departureDate}
                                  minDate={new Date()}
                                  name="depDate"
                                  onChange={(date) =>
                                    this.changeDatepickerHandeller(date)
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
                                <label
                                  htmlFor="duration1"
                                  style={{fontSize: "14px", color: '#a5a5a5'}}
                                >
                                  Return Date
                                </label>
                                <DatePicker
                                  selected={returnDate}
                                  minDate={new Date()}
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
                                  style={{ background: "#356ad8" }}
                                  type="submit"
                                  value="Send Inquiry"
                                  defaultValue="Send inquiry"
                                />
                              ) : (
                                <Link to="" className="btn-second">
                                  <CircularProgress style={{ color: "#fff" }} />
                                </Link>
                              )}
                            </div>
                          </div>
                        </form>
                        {this.state.sent ? (
                          <p className="mt-5">
                            Your message has been sent. We will contact you
                            soon.
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
      </>
    );
  }
}
export default Index;
