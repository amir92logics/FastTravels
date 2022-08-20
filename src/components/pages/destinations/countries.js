import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from 'firebase/firestore';
import { ContactSupportOutlined } from "@mui/icons-material";
import AirlinesData from './../../../airlines.json';


class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // this.intiScripts();
        window.scrollTo(0, 0)
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({ data: JSON.parse(doc.data().Data) });

            })
        })


    }
    render() {
        let currCountry = this.props.match.params.countryName;
currCountry = currCountry.replace(/-/g, ' ');

// console.log(myString);
        const AllCities = this.state.data.filter(item => item.country === currCountry).filter((v, i, a) => a.findIndex(v2 => (v2.airlineCode === v.airlineCode)) === i);
        console.log(AllCities)
        const destinationsOptions = {
            stagePadding: 1,
            items: 3,
            loop: true,
            margin: 20,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    dost: false,
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        };
        return (
            <>
                <BreadCrumb data={currCountry} />

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
                                    <img src={`/assets/images/${currCountry}.jpg`} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <strong>{currCountry}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {AllCities.map(item => {
                                        console.log(item);
                                        let en_conuntry = item.country.replace(/\s+/g, "-");
                                        let en_city = item.arivalCity.replace(/\s+/g, "-");
                                        return (
                                            <div className="package-card">
                                                <div className="package-thumb">
                                                    <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                        <img src={`/assets/images/${item.arivalCity}.png`} alt="" className="img-fluid" />
                                                    </Link>
                                                </div>
                                                <div className="package-details">
                                                    <div className="package-info">
                                                    <Link to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                    <h5><span>From</span><span style={{ fontSize: "18px" }}> £{item.fares}</span>/Per Person
                                                            <img style={{ height: '50px' }} src={AirlinesData.filter(d => d.AirlineCode === item.airlineCode)[0].airlineLogo} alt="" />
                                                        </h5>
                                                            </Link>
                                                        
                                                    </div>
                                                    <h3><i className="flaticon-arrival" />
                                                        <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`} style={{ fontSize: "15px" }}>{item.arivalCity + " " + "(" + item.destinationCode + ")" + " - " + item.country}</Link>
                                                    </h3>
                                                    <div className="num-btn" style={{color: '#356ad8', fontWeight: 'bold'}}>
                                                <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                  
                                                </div>
                                                </div>
                                            </div>
                                        )
                                        //   }
                                    })}
                                </OwlCarousel> : null}
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============== Destinations area end =============== */}
            </>
        );
    }
}
function mapStateToProps(state) {
    return {
        currentCountry: state.currentCountry,
    };
}
const currentFlight = (currentState) => ({
    type: "SET_CURRENT",
    payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currentFlight: (payload) => {
            dispatch(currentFlight(payload));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
