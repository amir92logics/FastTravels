import React, { Component } from "react";
import ModalVideo from "react-modal-video";

import about1Img from "../../../assets/images/about-1.png";
import about2Img from "../../../assets/images/about-2.png";
import { Link } from "react-router-dom";

class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {/* ===============  About wrapper area start =============== */}
        <div className="about-wrapper mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="about-wrapper-left">
                  <div className="about-img">
                    <img src={about1Img} alt="" className="img-fluid" />
                  </div>
                  <div className="about-video">
                    <img src={about2Img} alt="" className="img-fluid" />
                    <i
                      onClick={() => this.setState({ isOpen: true })}
                      class="flaticon-play-button-arrowhead"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-wrapper-right section-head head-left">
                  <h1>About Fast Travels UK</h1>
                  <p className=" pb-40">
                    Welcome to{" "}
                    <a href="http://fasttravels.co.uk/">Fast Travels</a> (UK)
                    Ltd. We deliver the finest travel-related services in the
                    United Kingdom and help you search and compare the best
                    flights, hotels, and cars from hundreds of airlines, agents,
                    and travel providers. With our innovative technology, we
                    make finding the <strong>airlines ticket</strong> prices
                    quick and easy. We're offering you comfort, reliability, and
                    value-for-money <strong>saving</strong> services
                    internationally. Having served millions of valued customers,
                    we're still dedicated to achieving the milestone of customer
                    satisfaction. Fast Travels has ranked within the top 30
                    independent UK travel companies. If you already know where
                    and when you want to travel or are seeking{" "}
                    <strong>airline online ticket booking in UK</strong>, Fast
                    Travels is 24/7 available to search for and plan the best
                    trip. Breaking down the barriers to low-cost travel and
                    making the world open and accessible for all, we believe
                    everyone should be free to experience the world. " Where
                    Next?" we help you to fly more often to more places at your{" "}
                    <strong>reliable</strong> convenience!
                  </p>
                  <h4>Our Vision:</h4>
                  <p className=" pb-40">
                    We are a team of highly focused professionals to identify
                    the customers' needs and suggest the best possible solution
                    to meet the requirement. We have the dedication to achieving
                    customers' trust and satisfaction.
                  </p>
                  <h4>Our Mission:  </h4>
                  <p className=" pb-40">
                    Our ultimate goal is to take the real pain and give value to
                    every customer who is seeking travel services at their
                    doorstep. Being an Online Travel Agency London, we are unique among
                    other market competitors by providing the best rates for
                    flights, holiday packages and other luxury services as per
                    your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="-tJYN-eG1zk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </React.Fragment>

        {/* ===============  About wrapper area end =============== */}
      </>
    );
  }
}

export default AboutWrapper;
