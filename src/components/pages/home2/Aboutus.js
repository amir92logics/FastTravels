import React, { Component } from "react";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import Helmet from "react-helmet";

export default class Aboutus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      data: [],
    };
  }
  componentDidMount() {
    const q = query(collection(db, "FaresData"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        this.setState({ data: JSON.parse(doc.data().Data) });
      });
    });
  }

  render() {
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
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
    let countryList = this.state.data.filter(
      (v, i, a) => a.findIndex((v2) => v2.country === v.country) === i
    );
    console.log(countryList);
    return (
      <>
        <Helmet>
          <meta
            property="og:title"
            content="Book Airline Ticket Online from UK | Flight Fares"
          />
          <meta property="og:site_name" content="Fast Travels" />
          <meta property="og:url" content="https://fasttravels.co.uk/" />
          <meta
            property="og:description"
            content="At Fast Travels Ltd London, UK you can easily compare cheapest flight fares booking of worldwide Airlines for the safest city break, holidays travel and tours."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://fasttravels.co.uk/static/media/fastflight.7c76f328.png"
          />
          <meta
            name="keywords"
            content="Fast Travels, Fast Travel UK, Fast Travel London, Fast Travel office, Fast Travel London Airline Ticket, Airline Ticket Online UK, Flight Fares UK"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Book Airline Ticket Online from UK | Flight Fares"
          />
          <meta
            name="twitter:description"
            content="Welcome to Traveler’s Table, we are a globally-inspired eatery, where we share our passion for exploring the world through food and drink, by serving modern versions of hand-selected dishes from around the world."
          />
          <meta
            name="twitter:image"
            content="https://fasttravels.co.uk/static/media/fastflight.7c76f328.png"
          />
          <link rel="canonical" href="https://fasttravels.co.uk/" />
          <meta name="Revisit-After" content="5 Days" />
          <meta name="Distribution" content="Global" />
          <meta name="Rating" content="General" />
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <div className="about-wrapper mt-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className=" pb-40">
                    <h1>About Fast Travels UK</h1>
                    <p className=" pb-40">
                      Welcome to{" "}
                      <a href="http://fasttravels.co.uk/">Fast Travels</a> (UK)
                      Ltd. We deliver the finest travel-related services in the
                      United Kingdom and help you search and compare the best
                      flights, hotels, and cars from hundreds of airlines,
                      agents, and travel providers. With our innovative
                      technology, we make finding the{" "}
                      <strong>airlines ticket</strong> prices quick and easy.
                      We're offering you comfort, reliability, and
                      value-for-money <strong>saving</strong> services
                      internationally. Having served millions of valued
                      customers, we're still dedicated to achieving the
                      milestone of customer satisfaction. Fast Travels has
                      ranked within the top 30 independent UK travel companies.
                      If you already know where and when you want to travel or
                      are seeking{" "}
                      <strong>airline online ticket booking in UK</strong>, Fast
                      Travels is 24/7 available to search for and plan the best
                      trip. Breaking down the barriers to low-cost travel and
                      making the world open and accessible for all, we believe
                      everyone should be free to experience the world. " Where
                      Next?" we help you to fly more often to more places at
                      your <strong>reliable</strong> convenience!
                    </p>
                    <h4>Our Vision:</h4>
                    <p className=" pb-40">
                      We are a team of highly focused professionals to identify
                      the customers' needs and suggest the best possible
                      solution to meet the requirement. We have the dedication
                      to achieving customers' trust and satisfaction.
                    </p>
                    <h4>Our Mission:  </h4>
                    <p className=" pb-40">
                      Our ultimate goal is to take the real pain and give value
                      to every customer who is seeking travel services at their
                      doorstep. Being an Online Travel Agency London, we are unique
                      among other market competitors by providing the best rates
                      for flights, holiday packages and other luxury services as
                      per your inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Helmet>
        <div className="about-wrapper mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className=" pb-40">
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

        {/* <React.Fragment>
                <div className="destinations-area">
               <div className="container">
                            <div className="row">

                                 <div className="col-lg-3 col-md-3">
                                    <div className="package-slider-wrap">
                                        <img src={about2Img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                        {countryList.map(item => {
                                            // console.log(item.arivalCity)
                                                    return (
                                                        <div className="package-card">
                                                            <div className="package-thumb">
                                                                <Link to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`}>
                                                                    <img src={`/assets/images/${item.arivalCity}.png`} alt="" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="package-details">
                                                                <div className="package-info">
                                                                    <Link to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`}>
                                                                    <h4><span style={{fotSize: '12px'}}>From</span><span style={{fotSize: '30px', color: '#356ad8' }}> £{item.fares}</span>/Per Person
                                            <img style={{ height: '50px' }} src={AirlinesData.filter(d => d.AirlineCode === item.airlineCode)[0].airlineLogo} alt="" />
                                            </h4>
                                             </Link>
                                          
                                        </div>
                                                                <h3><i className="flaticon-arrival" />
                                                                    <Link onClick={() => this.props.currentCountry(item.country)} to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`} style={{fontSize: '15px'}}>{item.arivalCity}</Link>
                                                                </h3>
                                                                <div className="col-lg-6" style={{color: '#356ad8', fontWeight: '700'}}>
                                                <a href="tel:02080902417"><input  style={{borderRadius: '5px', border: 'none'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                </div> </div>
                                                        </div>
                                                    )
                                        })}
                                    </OwlCarousel> : null}
                                </div>
                            </div>
                            </div>
                            </div>
                </React.Fragment> */}
      </>
    );
  }
}
