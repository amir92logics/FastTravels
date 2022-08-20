import React, { Component } from "react";
import { Link } from "react-router-dom";
import AirlinesData from './../../../airlines.json';
import emailjs from '@emailjs/browser';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from 'firebase/firestore';
import CheckModal from './checkModal';
import Modal from "@mui/material/Modal";


class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            departureDate: '',
            returnDate: '',
            type: false,
            sent: false,
            isClicked: false,
            data: [],
            errorModal: {
                status: true,
                message: "",
            }
        };
        this.sendEmail = this.sendEmail.bind(this)
    }
    sendEmail = (e, data) => {
        e.preventDefault();
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
            this.setState({ isClicked: true })
            console.log(this.form)
            emailjs.sendForm("service_1d21p96", "template_mqvxf7a", this.form.current, 'tL_Vpyj5WxQRqs6ec')
                .then((result) => {
                    console.log(result.text);
                    this.setState({ sent: true, isClicked: false, errorModal: { status: true, message: "Your message has been sent. We will contact you soon." } });
                }, (error) => {
                    this.setState({ sent: true, isClicked: false, errorModal: { status: true, message: error.text } })
                    console.log(error.text);
                });
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }

    };
    changeDatepickerHandeller = (date) => {
        this.setState({ departureDate: date });
    }
    handleReturnDate = (date) => {
        this.setState({ returnDate: date });
    }
    componentDidMount() {
        // window.onscroll = function() {
        //     if(window.pageYOffset === 0) {
        //     }
        //   };
        window.scrollTo(0, 0);
        loadCaptchaEnginge(6);
        this.scrollTop();
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({ data: JSON.parse(doc.data().Data) });

            })
        })

    }
    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    handleScroll = (e) => {
        window.onscroll = () =>
        window.pageYOffset === 0 && console.log("back at top");
        // console.log(e)
        // if(e.target.scrollTop === 0) {
        //    alert("on top")
        // }
    } 
    render() {
        const departureDate = this.state.departureDate;
        const returnDate = this.state.returnDate;
        const de_country = this.props.match.params.countryName.replace(/-/g, ' ');
        const de_city = this.props.match.params.cityName.replace(/-/g, ' ');
        const data = this.state.data?.filter(d => d.country === de_country && d.arivalCity === de_city && d.fares === this.props.match.params.fare)
        // console.log(data)
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Booking Request Form</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="package-details-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">


                                {data.length !== 0 ? <div className="package-details">
                                    <div className="package-thumb">
                                        <div className="row item-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80px", width: "180px" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="package-header">
                                        <div className="package-title">

                                            <img src={AirlinesData.filter(d => d.AirlineCode === data[0].airlineCode)[0].airlineLogo} alt="" />

                                            <h3>{data.AirlineCode}</h3>
                                            <strong><i className="flaticon-arrival" />
                                                {data.arivalCity}
                                            </strong>
                                        </div>
                                        <div className="pd-review">
                                            <p>Excellent</p>
                                            <ul>
                                                <li><i className="bx bxs-star" /></li>
                                                <li><i className="bx bxs-star" /></li>
                                                <li><i className="bx bxs-star" /></li>
                                                <li><i className="bx bxs-star" /></li>
                                                <li><i className="bx bx-star" /></li>
                                            </ul>
                                            <p>800 Review</p>
                                        </div>
                                    </div>
                                    <div className="p-short-info">
                                    {/* <div className="single-info">
                                            <div className="info-texts">
                                                <strong style={{fontSize: '12px', color: '#356ad8'}}>From</strong>
                                            </div>
                                        </div> */}
                                        <div className="single-info">
                                        <strong style={{fontSize: '12px', color: '#356ad8', paddingRight: '5px'}}>From</strong>
                                            <i className="flaticon-clock" />
                                            <div className="info-texts">
                                                <strong>{data[0].originCode}</strong>
                                                <p>{data[0].deptCity}</p>
                                            </div>
                                        </div>
                                        <div className="single-info">
                                            <div className="info-texts">
                                                <strong style={{fontSize: '40px', color: '#356ad8'}}>To</strong>
                                            </div>
                                        </div>
                                        <div className="single-info">
                                            <i className="flaticon-footprints" />
                                            <div className="info-texts">
                                                <strong>{data[0].destinationCode}</strong>
                                                <p>{data[0].arivalCity}</p>
                                            </div>
                                        </div>
                                        <div className="single-info">
                                            <i className="flaticon-traveller" />
                                            <div className="info-texts">
                                                <h5><span>From</span><span style={{ fontSize: '30px', color: '#356ad8', fontWeight: 'bold' }}> £{this.state.type ? data[0].fares : data[0].fares}</span>/Per Person<div style={{ fontSize: "12px" }}>Subject to availability</div></h5>
                                                <div><span>Economy</span> <Switch
                                                    checked={this.state.type}
                                                    onChange={() => this.setState({ type: !this.state.type })}
                                                    name="loading"
                                                    color="primary"
                                                /><span>Businesss</span>
                                                </div>
                                                <a href="tel:02080902417"><input style={{ borderRadius: '10px', border: 'none' }} type="submit" value='0208 090 2417' defaultValue="Send inquiry" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="package-tab">

                                    </div>
                                </div> : null}
                                <div className="newsletter-area pt-80">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="newsletter-wrapper">
                                                    <h2>Need Help ? Call Now <span style={{ color: '#356ad8', fontSize: '25px' }}>02080902417</span></h2>
                                                    <p className="text-white" style={{ fontSize: '15px' }}>Note : If the requested fare will not be available then we will offer you the best alternate fare.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="package-d-sidebar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-form">
                                                <form ref={this.form} onSubmit={e => this.sendEmail(e)}>
                                                    <h5 className="package-d-head">Passenger Detail</h5>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <input className="inputContainer" name="fname" type="text" placeholder="First Name" />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input className="inputContainer" name="lname" type="text" placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input className="inputContainer" name="email" type="email" placeholder="Your Email" />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input className="inputContainer" name="phone" type="tel" placeholder="Phone" />
                                                        </div>
                                                        {/* <div className="col-lg-12">
                                                <input className="inputContainer" name="budget" type="number" placeholder="How much your budget?" />
                                            </div> */}
                                                        <div className="col-lg-12">
                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                <label htmlFor="duration1">Departure Date</label>
                                                                <DatePicker selected={departureDate} minDate={new Date()} name='depDate' onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in inputContainer" />
                                                                <i className="flaticon-calendar mt-3" id="packageCalenderIcon" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                <label htmlFor="duration1">Return Date</label>
                                                                <DatePicker selected={returnDate} minDate={new Date()} name='returnDate' onChange={(date) => this.handleReturnDate(date)} className="input-field check-in inputContainer" />
                                                                <i className="flaticon-calendar mt-3" id="packageCalenderIcon" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <textarea cols={30} rows={7} name="message" placeholder="Message" defaultValue={""} />
                                                        </div>
                                                        <LoadCanvasTemplate />
                                                        <div className="col-lg-12">
                                                            <input className="inputContainer" id="user_captcha_input" name="user_captcha_input" type="text" placeholder="Enter Captcha Value" />
                                                        </div>
                                                        <div className="col-lg-12">

                                                            {!this.state.isClicked ? <input type="submit" value='Send Request' defaultValue="Send inquiry" /> :
                                                                <Link to='' className="btn-second">
                                                                    <CircularProgress style={{ color: "#fff" }} /></Link>}
                                                        </div>
                                                    </div>
                                                </form>
                                                {this.state.sent ? <Modal
                                                    anchorEl={this.state.errorModal.status}
                                                    open={Boolean(this.state.errorModal.status)}
                                                    onClose={() => {
                                                        this.setState({ errorModal: { status: false, message: "" } });
                                                    }}
                                                    onBackdropClick={() => {
                                                        this.setState({ errorModal: { status: false, message: "" } });
                                                    }}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <CheckModal
                                                        closeModal={() => {
                                                            this.setState({ errorModal: { status: false, message: "" } });
                                                        }}
                                                        errorMsg={this.state.errorModal.message}
                                                    />
                                                </Modal> : null}

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
function mapStateToProps(state) {
    return {
        currntObj: state.currntObj,
    };
}
export default connect(mapStateToProps, null)(PackageDetails);
