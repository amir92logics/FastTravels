import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import AirLinesData from '../../../airlines.json'
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from 'firebase/firestore';

class SendQuery extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            departure: '',
            destination: '',
            outBond: '',
            returnBond: '',
            adults: 1,
            child: 0,
            infants: 0,
            bookType: 'economy',
            list: [],
            result: [],
            anchorEl: null,
            outBondDatePickerIsOpen: false,
            piker: false,
            plusPadding: '21px',
            plusPadding1: '21px',
            data: [],
            departureDate: '',
            returnDate: '',
            type: false,
            isClicked: false

        };
        this.sendEmail = this.sendEmail.bind(this)
    }
    sendEmail = (e, data) => {
        e.preventDefault();
        this.setState({ isClicked: true })
        console.log(this.form)
        emailjs.sendForm("service_1d21p96", "template_mqvxf7a", this.form.current, 'tL_Vpyj5WxQRqs6ec')
            .then((result) => {
                console.log(result.text);
                this.setState({ sent: true, isClicked: false })
            }, (error) => {
                console.log(error.text);
                this.setState({ sent: true, isClicked: false })

            });
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                this.setState({ data: JSON.parse(doc.data().Data) });

            })
        })


    }
    changeDatepickerHandeller = (date) => {
        this.setState({ departureDate: date });
    }
    handleReturnDate = (date) => {
        this.setState({ returnDate: date });
    }
    // checkDateValidation(startDate, endDate) {
    //     if ((new Date(startDate) > new Date(endDate)) || (new Date(endDate) < new Date(startDate))) {
    //         alert('Please select correct return date;')
    //     } else {
    //         console.log("else")
    //         this.setState({
    //             returnBond: endDate
    //         });
    //         this.setState({ plusPadding1: '4px' })
    //     }
    // }
    render() {
        return (
            <>
                <div className="guide-wrapper pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-40">
                                    <h5>Airlines</h5>
                                    <h2>Our Airlines</h2>
                                </div>
                            </div>
                            {AirLinesData ?

                                AirLinesData.map((item, i) => {
                                    let en = this.state.data?.filter(
                                        (d) => d.airlineCode === item.AirlineCode
                                      )[0]?.airlneName
                                        console.log(en)
                                    if (i < 30) {
                                        return <div className="col-4 col-sm-3 col-md-2">

                                            <div className="guide-card">
                                                <div className="guide-thumb p-3" style={{ border: '2px solid lightgrey' }}>
                                                    <Link onClick={() => this.props.currentCountry(item.AirlineCode)} to={`${process.env.PUBLIC_URL}/airline/${
                                en != null ? en.replace(/\s+/g, "-") : "send-inquiry"
                              }`}>
                                                        <img src={item.airlineLogo} alt={item.AirlineCode} className="img-fluid" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                }) : null}
                        </div>
                    </div>
                </div>
                <div className="package-details-wrapper pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="package-d-sidebar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="p-sidebar-form">
                                                <form ref={this.form} onSubmit={e => this.sendEmail(e)}>
                                                    <h5 className="package-d-head">Send Inquiry</h5>
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
                                                                <label htmlFor="duration1" style={{fontSize: "14px", color: '#a5a5a5'}}>Departure Date</label>
                                                                <DatePicker selected={this.state.departureDate} minDate={new Date()} name='depDate' onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in inputContainer" />
                                                                <i className="flaticon-calendar mt-3" id="packageCalenderIcon" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="calendar-input" id="packageCalenderMainDiv">
                                                                <label htmlFor="duration1" style={{fontSize: "14px", color: '#a5a5a5'}}>Return Date</label>
                                                                <DatePicker selected={this.state.returnDate} minDate={new Date()} name='returnDate' onChange={(date) => this.handleReturnDate(date)} className="input-field check-in inputContainer" />
                                                                <i className="flaticon-calendar mt-3" id="packageCalenderIcon" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <textarea cols={30} rows={7} name="message" placeholder="Message" defaultValue={""} />
                                                        </div>
                                                        <div className="col-lg-12">
                                                            {!this.state.isClicked ? <input style={{background: '#356ad8'}} type="submit" value='Send Inquiry' defaultValue="Send inquiry" /> :
                                                                <Link to='' className="btn-second">
                                                                    <CircularProgress style={{ color: "#fff" }} /></Link>}
                                                        </div>
                                                    </div>
                                                </form>
                                                {this.state.sent ? <p className="mt-5">Your message has been sent. We will contact you soon.</p> : null}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
const currentCountry = (currentState) => ({
    type: "SET_CURRENT_COUNTRY",
    payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currentCountry: (payload) => {
            dispatch(currentCountry(payload));
        },
    };
};
export default connect(null, mapDispatchToProps)(SendQuery);
