import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      sent: false,
    };
    this.sendEmail = this.sendEmail.bind(this);
  }
  componentDidMount() {
    this.scrollTop();
  }
  sendEmail = (e, data) => {
    e.preventDefault();
    console.log(this.form);
    emailjs
      .sendForm(
       "service_1d21p96", "template_mqvxf7a", this.form.current, 'tL_Vpyj5WxQRqs6ec'
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({ sent: true });
        },
        (error) => {
          this.setState({ sent: false });
          console.log(error.text);
        }
      );
  };

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Contact US</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="contact-wrapper pt-90">
          <div className="contact-cards">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-arrival" />
                    </div>
                    <div className="contact-info">
                      <h5>Address</h5>
                      <p>
                        Fast Travels 34-35 Hatton Garden, Suite 2040 Unit 3A,
                        Holborn, London EC1N 8DX United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-customer-service" />
                    </div>
                    <div className="contact-info pr-5">
                      <h5>Email &amp; Phone</h5>
                      <a href="tel:02080902417" style={{ fontSize: "14px", color: '#A5A5A5', fontWeight: '500' }}>0208 090 2417</a>
                      {/* <p style={{ fontSize: "14px" }}>0208 090 2417 </p> */}
                      <p style={{ fontSize: "14px" }}>
                        {" "}
                        info@fasttravels.co.uk
                      </p>
                      <p style={{ fontSize: "14px" }}>
                        booking@fasttravels.co.uk
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-thumbs-up" />
                    </div>
                    <div className="contact-info">
                      <h5>Social Media</h5>
                      <ul className="contact-icons">
                        <li>
                          <a
                            href="https://www.facebook.com/fasttravelsofficial"
                            target="_blank"
                          >
                            <i className="bx bxl-facebook" />
                          </a>

                          {/* <a href="https://www.facebook.com/fastflightofficial" target="_blank"><i className="bx bxl-facebook" /></a> */}
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/86709132"
                            target="_blank"
                          >
                            <i className="bx bxl-linkedin" />
                          </a>
                          {/* <a href="https://www.facebook.com/fastflightofficial" target="_blank"><i className="bx bxl-facebook" /></a> */}
                        </li>

                        <li>
                          {/* <a href="#" ><i className="bx bxl-twitter" /></a> */}
                          <a
                            href="https://twitter.com/fasttravels_"
                            target="_blank"
                          >
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          {/* <a href="#" ><i className="bx bxl-facebook" /></a> */}
                          {/* <a href="https://www.instagram.com/fastflightofficial/" target="_blank"><i className="bx bxl-instagram" /></a> */}
                        </li>
                        <li>
                          {/* <a href="#" ><i className="bx bxl-youtube" /></a> */}
                          {/* <a href="https://www.youtube.com/channel/UCSZpGqHBtA5pqwQpZK7hNIQ" target="_blank"><i className="bx bxl-youtube" /></a> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-inputs pt-100">
              <div className="row">
                <div className="col-lg-6 pb-5">
                  <div className="contact-details">
                    <ul className="office-clock">
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>Open Hour</h5>
                          <p>24/7</p>
                          
                        </div>
                      </li>
                    </ul>
                  </div>
                  <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6284823733577!2d-0.10812539999999998!3d51.520031599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b08b7c4a9ad%3A0xf8bda992f02c0265!2sFast%20Travels!5e0!3m2!1sen!2s!4v1659050599924!5m2!1sen!2s"
                          
                            style={{width: '100%', height: '80%' ,border: 0}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                </div>
                <div className="col-lg-6 pt-5">
                  <div className="contact-form">
                    <form ref={this.form} onSubmit={(e) => this.sendEmail(e)}>
                      <h5
                        className="contact-d-head"
                      >
                        Contact Us
                      </h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <lable style={{fontSize: "14px", fontWeight: 'bold'}}>Full Name</lable>
                          <input
                            className="inputContainer"
                            name="name"
                            type="text"
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <lable style={{fontSize: "14px", fontWeight: 'bold'}}>Subject</lable>
                          <input
                            className="inputContainer"
                            type="text"
                            // placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <lable style={{fontSize: "14px", fontWeight: 'bold'}}>Your Email</lable>
                          <input
                            className="inputContainer"
                            name="email"
                            type="email"
                            // placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-lg-6">
                          <lable style={{fontSize: "14px", fontWeight: 'bold'}}>Phone</lable>
                          <input
                            className="inputContainer"
                            name="phone"
                            type="text"
                            // placeholder="Phone"
                            required
                          />
                        </div>
                        <div className="col-lg-12">
                          <lable style={{fontSize: "14px", fontWeight: 'bold'}}>Subject</lable>
                          <textarea
                            cols={30}
                            rows={7}
                            name="message"
                            // placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" defaultValue="Submit Now" />
                        </div>
                      </div>
                    </form>
                    {this.state.sent ? (
                      <p className="mt-5">
                        Your message has been sent. We will contact you soon.
                      </p>
                    ) : null}
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

export default AboutUs;
