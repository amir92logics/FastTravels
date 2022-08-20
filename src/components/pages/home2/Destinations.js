import React, { Component } from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';
import AirlinesData from './../../../airlines.json';

class Destinations extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: []

    };
  }
  componentDidMount() {
    const q = query(collection(db, 'FaresData'))
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.forEach(doc => {
            this.setState({data: JSON.parse(doc.data().Data)});

        })
    })


}
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
  render() {
      
      const destinationsOptions = {
          stagePadding: 1,
          items: 3,
          loop: true,
          margin:20,
          smartSpeed: 1500,
          autoplay: false,
          dots: false,
          nav: true,
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:2,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:true
              }
          }
      };
        let countryList1 = this.state.data.filter((v, i, a) => a.findIndex(v2 => (v2.continent === v.continent)) === i);
        let countryList = this.state.data.filter((v,i,a)=>a.findIndex(v2=>(v2.country === v.country))===i);
// console.log(countryList);
    const AllContinent = [...this.state.data.reduce((set,{continent}) => {
        set.add(continent);
        return set;
      }, new Set())];
    return (
       <>
           <div className="destinations-area pt-105">
               <div className="container">
               {AllContinent.map(con => (
                            <div className="row">

                                {(con !== "United State of America" && con !== "Australia" && con !== "South America") ? <div className="col-lg-3 col-md-3">
                                    <div className="package-slider-wrap">
                                        <img src={`/assets/images/${con}.jpg`} alt="" className="img-fluid" />
                                        <div className="pakage-overlay">
                                            <strong>{con}</strong>
                                        </div>
                                    </div>
                                </div> : null}
                                <div className="col-lg-9 col-md-9">
                                    {this.state.data ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                        { this.shuffleArray(countryList).map(item => {
                                            if (item.continent === con) {
                                                if (item.continent !== "United State of America" && item.continent !== "Australia" && item.continent !== "South America") {
                                                    let en_conuntry = item.country.replace(/\s+/g, "-");
                                                    return (
                                                        <div className="package-card">
                                                            <div className="package-thumb">
                                                                <Link to={`${process.env.PUBLIC_URL}/country/${en_conuntry}`}>
                                                                    <img src={`/assets/images/${item.country}.jpg`} alt="" className="img-fluid" />
                                                                </Link>
                                                            </div>
                                                            <div className="package-details">
                                                                <h3><i className="flaticon-arrival" />
                                                                    <Link onClick={() => this.props.currentCountry(item.country)} to={`${process.env.PUBLIC_URL}/country/${en_conuntry}`} style={{ fontSize: "15px" }}>{item.country}</Link>
                                                                </h3>
                                                                <div className="num-btn" style={{color: '#356ad8', fontWeight: 'bold'}}>
                                                <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                  
                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                        })}
                                    </OwlCarousel> : null}
                                </div>
                            </div>
                        ))}
               <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="package-slider-wrap">
                                    <img src={`/assets/images/United State of America.jpg`} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <strong>United State of America</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {this.shuffleArray(countryList1).map(item => {
                                        if (item.continent === 'United State of America') {
                                            let usaCountries = this.state.data.filter(d => d.continent === 'United State of America');
                                            let countryLisData = usaCountries.filter((v, i, a) => a.findIndex(v2 => (v2.arivalCity === v.arivalCity)) === i);
                                            let en_conuntry = item.country.replace(/\s+/g, "-");
                                            let en_city = item.arivalCity.replace(/\s+/g, "-");
                                            return countryLisData.map(cont => {
                                                return (
                                                    <div className="package-card">
                                                        <div className="package-thumb">
                                                            <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                                <img src={`/assets/images/${cont.arivalCity}.png`} alt="" className="img-fluid" />
                                                            </Link>
                                                        </div>
                                                        <div className="package-details">
                                                            <div className="package-info">
                                                            <Link to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                            <h5><span style={{ fotSize: '12px' }}>From</span><span style={{ fontSize: '30px', color: '#356ad8' }}> £{item.fares}</span>/Per Person<div style={{fontSize: "12px"}}>Subject to availability</div>
                                            <img style={{ height: '50px' }} src={AirlinesData.filter(d => d.AirlineCode === item.airlineCode)[0].airlineLogo} alt="" />                                                            
                                                            </h5>
                                                            </Link>
                                                           
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`} style={{ fontSize: "15px" }}>{cont.arivalCity + " " + "(" + cont.destinationCode + ")" + " - " + cont.country}</Link>
                                                            </h3>
                                                            <div className="num-btn" style={{color: '#356ad8', fontWeight: 'bold'}}>
                                                <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                  
                                                </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    })}
                                </OwlCarousel> : null}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="package-slider-wrap">
                                    <img src={`/assets/images/Australia.jpg`} alt="" className="img-fluid" />
                                    <div className="pakage-overlay">
                                        <strong>Australia</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                                    {this.shuffleArray(countryList1).map(item => {
                                        if (item.continent === 'Australia') {
                                            let usaCountries = this.state.data.filter(d => d.continent === 'Australia');
                                            let countryLisData = usaCountries.filter((v, i, a) => a.findIndex(v2 => (v2.arivalCity === v.arivalCity)) === i);
                                            let en_conuntry = item.country.replace(/\s+/g, "-");
                                            let en_city = item.arivalCity.replace(/\s+/g, "-");
                                            return countryLisData.map(cont => {
                                                return (
                                                    <div className="package-card">
                                                        <div className="package-thumb">
                                                            <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                                <img src={`/assets/images/${cont.arivalCity}.png`} alt="" className="img-fluid" />
                                                            </Link>
                                                        </div>
                                                        <div className="package-details">
                                                            <div className="package-info">
                                                            <Link to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`}>
                                                            <h5><span><span style={{ fotSize: '5px' }}>From</span> <span style={{fotSize: '30px', color: '#356ad8' }}> £{item.fares}</span></span>/Per Person
                                            <img style={{ height: '50px' }} src={AirlinesData.filter(d => d.AirlineCode === item.airlineCode)[0].airlineLogo} alt="" />                                                            
                                                                </h5>
                                                            </Link>
                                                               
                                                            </div>
                                                            <h3><i className="flaticon-arrival" />
                                                                <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/destination-detail/${en_conuntry}/${en_city}/${item.fares}`} style={{ fontSize: "15px" }}>{cont.arivalCity + " " + "(" + cont.destinationCode + ")" + " - " + cont.country}</Link>
                                                            </h3>
                                                            <div className="num-btn" style={{color: '#356ad8', fontWeight: 'bold'}}>
                                                <a href="tel:02080902417"><input className="input-submit"   style={{fontSize: '25px', color: 'red',borderRadius: '5px', border: 'none' , backgroundColor: 'transparent'}} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                                  
                                                </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    })}
                                </OwlCarousel> : null}
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
export default connect(null, mapDispatchToProps)(Destinations);

