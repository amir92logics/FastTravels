import React, { Component } from "react";
import { Link } from "react-router-dom";

import 'react-rangeslider/lib/index.css';
import AirlinesData from './../../../airlines.json';
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from 'firebase/firestore';
import Pagination from "../pagination";
import '../index.css';

class PackageSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10,
            numberToShow: 8,
            manageState: '',
            bookType: 'economy',
            data: [],
            selectedCountry: [],
            storeData: [],
            currentCountries: [],
            currentPage: null,
            totalPages: null,
            numberToShowAirline: 8
        }
    }
    componentDidMount() {
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({ storeData: JSON.parse(doc.data().Data), data: JSON.parse(doc.data().Data), selectedCountry: JSON.parse(doc.data().Data) });

            })
        })


    }
    filteredData = e => {
        let _temp = this.state.selectedCountry;
        let name = e.target.value;
        console.log(_temp);
        console.log(name);
        let res = _temp.filter(d => d.airlneName === name)
        this.setState({ data: res })
        console.log(res);
        const currentCountries = res;

        this.setState({ currentCountries });
    }
    filteredData1 = e => {
        let name = e.target.value;
        let res = this.state.storeData.filter(d => d.country === name)
        this.setState({ data: res, selectedCountry: res })
        const currentCountries = res;

        this.setState({ currentCountries });
    }
    onPageChanged = d => {
        const { data } = this.state;
        const { currentPage, totalPages, pageLimit } = d;

        const offset = (currentPage - 1) * pageLimit;
        const currentCountries = data.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentCountries, totalPages });
    };

    render() {
        const {
            data,
            currentCountries,
            currentPage,
            totalPages
        } = this.state;
        const totalCountries = data.length;

        if (totalCountries === 0) return null;

        const headerClass = [
            "text-dark py-2 pr-4 m-0",
            currentPage ? "border-gray border-right" : ""
        ]
            .join(" ")
            .trim();
        let countryList = this.state.data.filter((v, i, a) => a.findIndex(v2 => (v2.country === v.country)) === i);
        let airlineList = this.state.data.filter((v, i, a) => a.findIndex(v2 => (v2.airlneName === v.airlneName)) === i);
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Business Class Flights</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="package-sidebar-wrapper pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="package-sidebar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="sidebar-searchbox">
                                                <div className="input-group search-box d-flex justify-content-between">
                                                    <span className="">Sort & filter </span><span role="button" onClick={e => this.setState({ data: this.state.storeData, currentCountries: this.state.storeData })} className="text-primary " >Show All</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="sidebar-categorie mt-40">
                                                <h5 className="categorie-head">Destinations</h5>
                                                <div className="durations-option radio-box">
                                                    {this.state.data.length !== 0 ? countryList.slice(0, this.state.numberToShow).map((item, key) => {
                                                        return <div className="single-option" key={key}>
                                                            <input onClick={(e) => this.filteredData1(e)} value={item.country} type="radio" name="categorie" id={item.country} />
                                                            <label htmlFor={item.country}>{item.country}</label>
                                                        </div>
                                                    }) : null}
                                                    {
                                                        this.state.numberToShow === 8 ? <button onClick={() => this.setState({ numberToShow: countryList.length })} style={{ backgroundColor: '#356ad8', color: '#fff', fontWeight: 'bold', border: 'none', height: '50px', width: '100%', borderRadius: '5px' }}>
                                                            Show More
                                                        </button> :
                                                            <button onClick={() => this.setState({ numberToShow: 8 })} style={{ backgroundColor: '#356ad8', color: '#fff', fontWeight: 'bold', border: 'none', height: '50px', width: '100%', borderRadius: '5px' }}>
                                                                Show Less
                                                            </button>
                                                    }
                                                    {/* <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="United States" type="radio" name="categorie" id="categorieus" />
                                                        <label htmlFor="categorieus">United States</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="Australia" type="radio" name="categorie" id="categorieas" />
                                                        <label htmlFor="categorieas">Australia</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="Nigeria" type="radio" name="categorie" id="categorieni" />
                                                        <label htmlFor="categorieni">Nigeria</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="Pakistan" type="radio" name="categorie" id="categoriepa" />
                                                        <label htmlFor="categoriepa">Pakistan</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="Jamaica" type="radio" name="categorie" id="categorieja" />
                                                        <label htmlFor="categorieja">Jamaica</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData1(e)} value="Ghana" type="radio" name="categorie" id="categoriegh" />
                                                        <label htmlFor="categoriegh">Ghana</label>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="sidebar-categorie mt-40">
                                                <h5 className="categorie-head">Airlines</h5>
                                                <div className="durations-option radio-box">
                                                    {this.state.data.length !== 0 ? airlineList.slice(0, this.state.numberToShowAirline).map((item, key) => {
                                                        return <div className="single-option" key={key}>
                                                            <input onClick={(e) => this.filteredData(e)} value={item.airlneName} type="radio" name="categorie" id={item.airlneName} />
                                                            <label htmlFor={item.airlneName}>{item.airlneName}</label>
                                                        </div>
                                                    }) : null}
                                                    {
                                                        this.state.numberToShowAirline === 8 ? <button onClick={() => this.setState({ numberToShowAirline: airlineList.length })} style={{ backgroundColor: '#356ad8', color: '#fff', fontWeight: 'bold', border: 'none', height: '50px', width: '100%', borderRadius: '5px' }}>
                                                            Show More
                                                        </button> :
                                                            <button onClick={() => this.setState({ numberToShowAirline: 8 })} style={{ backgroundColor: '#356ad8', color: '#fff', fontWeight: 'bold', border: 'none', height: '50px', width: '100%', borderRadius: '5px' }}>
                                                                Show Less
                                                            </button>
                                                    }
                                                    {/* <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="KL" type="radio" name="categorie1" id="categorie1" />
                                                        <label htmlFor="categorie1">KLM</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="BA" type="radio" name="categorie1" id="categorie2" />
                                                        <label htmlFor="categorie2">British Airways</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="UA" type="radio" name="categorie1" id="categorie3" />
                                                        <label htmlFor="categorie3">United Airlines</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="DA" type="radio" name="categorie1" id="categorie4" />
                                                        <label htmlFor="categorie4">Delta Airlines</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="VA" type="radio" name="categorie1" id="categorie5" />
                                                        <label htmlFor="categorie5">Virgin Altlantic</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="AA" type="radio" name="categorie1" id="categorie6" />
                                                        <label htmlFor="categorie6">American Airlines</label>
                                                    </div>
                                                    <div className="single-option">
                                                        <input onClick={(e) => this.filteredData(e)} value="AF" type="radio" name="categorie1" id="categorie7" />
                                                        <label htmlFor="categorie7">Air France</label>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="sidebar-banner mt-40">
                                                <div className="sidebar-banner-overlay">
                                                    <div className="overlay-content">
                                                        <h3>Get 50% Off
                                                            In Dubai Tour</h3>
                                                        <div className="sidebar-banner-btn">
                                                            <Link to={"#"} >Send inquiry</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="container">
                                    <div className="row d-flex flex-row">
                                        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                <h2 className={headerClass}>
                                                    <strong className="text-secondary">
                                                        {totalCountries}
                                                    </strong>{" "}
                                                    Fares
                                                </h2>{" "}
                                                {currentPage && (
                                                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                                        Page{" "}
                                                        <span className="font-weight-bold">
                                                            {currentPage}
                                                        </span>{" "}
                                                        /{" "}
                                                        <span className="font-weight-bold">
                                                            {totalPages}
                                                        </span>
                                                    </span>
                                                )}
                                            </div>
                                            <div className="d-flex flex-row py-4 align-items-center">
                                                <Pagination
                                                    totalRecords={totalCountries}
                                                    pageLimit={10}
                                                    pageNeighbours={1}
                                                    onPageChanged={this.onPageChanged}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="offer-area ">
                                        <div className="container">
                                            <div className="row">
                                                {this.state.data.length !== 0 ?
                                                    currentCountries.map((item, key) => {
                                                        let currentAirline = [{
                                                            "AirlineCode": "AA",
                                                            "airlineLogo": "https://www.alexatravel.co.uk/wp-content/uploads/2018/09/american-airlines-logo.png"
                                                        }];
                                                        currentAirline = AirlinesData.filter(d => d.AirlineCode === item.airlineCode)
                                                        return (
                                                            <div className="col-lg-12" key={key}>
                                                                <div className="package-card-xl">
                                                                    <div className="package-thumb-xl">
                                                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "20px", padding: "8px", border: '2px solid #eae9e9', borderRadius: '100px', height: "150px", width: "150px" }}>
                                                                            <Link style={{}} to=''>
                                                                                {currentAirline.length !== 0 ? <img src={currentAirline[0].airlineLogo} alt="" className="img-fluid" /> : null}
                                                                            </Link>
                                                                        </div>

                                                                    </div>
                                                                    <div className="package-details-xl" style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", width: '100%' }}>
                                                                        <div className="package-info justify-content-lg-end">
                                                                            <h5><span style={{ fontSize: '12px' }} >From</span><span style={{ fontSize: '30px', color: '#356ad8' }}> £{item.fares}</span>/Per Person<div style={{ fontSize: "12px" }}>Subject to availability</div></h5>
                                                                        </div>
                                                                        <div style={{ display: 'flex', justifyContent: "space-around" }}>
                                                                            <div>
                                                                                <h3 >{item.originCode}</h3>
                                                                                <h6 style={{ color: '#9e9e9e', fontWeight: '700' }} >
                                                                                    {item.deptCity}
                                                                                </h6>
                                                                                <h6 style={{ color: '#000', fontWeight: '700', marginTop: '8px' }}>{item.deptCountry}</h6>
                                                                            </div>
                                                                            <div style={{ display: 'flex', border: '1px dotted #000', margin: "10px" }}>
                                                                            </div>

                                                                            <div>
                                                                                <h3>{item.destinationCode} </h3>
                                                                                <h6 style={{ color: '#9e9e9e', fontWeight: '700' }}>{item.arivalCity}</h6>
                                                                                <h6 style={{ color: '#000', fontWeight: '700', marginTop: '8px' }}>{item.country}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{ border: '1px dotted #000', margin: "10px" }}>
                                                                        </div> <div className="row text-center">

                                                                            <div className="col-lg-6 mt-1"
                                                                                onClick={e => {
                                                                                    e.preventDefault();
                                                                                    this.props.currentFlight(item);
                                                                                }}
                                                                            >
                                                                                <Link to={`${process.env.PUBLIC_URL}/destination-detail/${item.country.replace(/\s+/g, "-")}/${item.arivalCity.replace(/\s+/g, "-")}/${item.fares}`}

                                                                                    className="btn-second">Send inquiry</Link>
                                                                            </div>
                                                                            <div className="col-lg-6 mt-1 num-btn" style={{ fontWeight: 'bold' }}>
                                                                                <a href="tel:02080902417"><input className="input-submit" style={{ fontSize: '25px', borderRadius: '5px', border: 'none', backgroundColor: 'transparent' }} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>

                                                                            </div>
                                                                            {/* <div className="col-lg-6 mt-1" style={{ color: '#356ad8', fontWeight: '700' }}>
                                                                                <a href="tel:02080902417" className="btn-second">0208 090 2417</a>
                                                                            </div> */}
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        )
                                                    })
                                                    : null}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="about-wrapper mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className=" pb-40">
                                    <h1 className="py-3" > Business Class Flights From UK</h1>
                                    <h4>Wish to share Luxury and Affordability <strong>of Business Class Flights</strong>?</h4>
                                    <p className=" pb-40">
                                        Come and give it a try our Business Class <strong>Flights</strong> Deals with indefinite perks. The benefits of flying business class <a href="http://fasttravels.co.uk/" >with Fast Travels</a> include More Check-In Luggage – At No Extra Cost, Priority Check-In Queue, Club Lounge Access, Early Boarding on The Aircraft, Hearty Meals, Sweet Dreams in a Flat Bed, and many more. This time when it’s cool to brag about how many steps you did on the weekend than to recall how many Espresso Martinis you sank while flying thousands of feet above the sky. Why do statistics show business-class luxury to be sharply increasing? Exercising your choice of business class airline tickets brings you extra high-end lines of services. Come with us and gather some inspiration to lose your business class virginity. Put simply: business class is your safe space to indulge in new life experiences and claim to be “indulging without judgement”  </p>




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
const mapDispatchToProps = (dispatch) => {
    return {
        currentFlight: (payload) => {
            dispatch(currentFlight(payload));
        },
    };
};
export default connect(null, mapDispatchToProps)(PackageSidebar);
