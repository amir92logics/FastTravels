import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import AirlinesData from "./../../../airlines.json";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import MuiAutocomplete from "@mui/material/Autocomplete";
import emailjs from "@emailjs/browser";
import Pagination from "../pagination";
import "../index.css";

const Autocomplete = styled(MuiAutocomplete)({
  ".MuiAutocomplete-inputRoot": {
    "& .MuiInputAdornment-root": {
      color: "#000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});
class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      departure: "",
      destination: "",
      outBond: "",
      returnBond: "",
      adults: 1,
      child: 0,
      infants: 0,
      bookType: "economy",
      list: [],
      result: [],
      anchorEl: null,
      outBondDatePickerIsOpen: false,
      piker: false,
      plusPadding: "13px",
      plusPadding1: "13px",
      data: [],
      departureDate: "",
      returnDate: "",
      type: false,
      isClicked: false,
      currentCountries: [],
      currentPage: null,
      totalPages: null,
      numberToShowAirline: 8,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeOutBond = this.handleChangeOutBond.bind(this);
    this.openDatePickerOutBond = this.openDatePickerOutBond.bind(this);
    this.handleChangeReturnBond = this.handleChangeReturnBond.bind(this);
    this.openDatePickerReturnBond = this.openDatePickerReturnBond.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({ isClicked: true });
    console.log(this.form);
    emailjs
      .sendForm(
        "service_mvzun0t",
        "template_mx08mb9",
        this.form.current,
        "tL_Vpyj5WxQRqs6ec"
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

  componentDidMount() {
    window.scrollTo(0, 0);
    const q = query(collection(db, "FaresData"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        this.setState({
          storeData: JSON.parse(doc.data().Data),
          data: JSON.parse(doc.data().Data),
          selectedCountry: JSON.parse(doc.data().Data),
        });
      });
    });
  }
  handleClick = (event) => {
    console.log(event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  handleSearch = () => {
    let resultArr = [];
    let tempArr = [...this.state.data];

    resultArr = tempArr.filter(
      (val) =>
        val?.destinationCode?.toLowerCase() ===
          this.state.destination?.toLowerCase() && val?.originCode === "LON"
    );
    if (resultArr.length !== 0) {
      window.scrollTo(900, 900);
    }
    this.setState({
      list: resultArr,
      result: resultArr,
      currentCountries: resultArr,
    });
  };
  filteredData = (e) => {
    let name = e.target.value;
    let res = this.state.storeData.filter((d) => d.airlneName === name);
    this.setState({ result: res });
    const currentCountries = res;

    this.setState({ currentCountries });
  };
  changeHandeller = (date) => {
    this.setState({ outBond: date });
  };
  handleChangeOutBond(date) {
    this.setState({
      outBond: date,
    });
    this.setState({ plusPadding: "4px" });
  }

  openDatePickerOutBond() {
    this.setState({
      outBondDatePickerIsOpen: true,
    });
  }
  checkDateValidation(startDate, endDate) {
    if (
      new Date(startDate) > new Date(endDate) ||
      new Date(endDate) < new Date(startDate)
    ) {
      alert("Please select correct return date;");
    } else {
      console.log("else");
      this.setState({
        returnBond: endDate,
      });
      this.setState({ plusPadding1: "4px" });
    }
  }
  handleChangeReturnBond(date) {
    this.checkDateValidation(this.state.outBond, date);
    console.log(date);
  }

  openDatePickerReturnBond() {
    this.setState({
      outBondDatePickerIsOpen: false,
    });
    this.setState({
      returnBondDatePickerIsOpen: true,
    });
  }
  onTagsChange = (event, values) => {
    console.log(values);
  };
  onPageChanged = (d) => {
    const { result } = this.state;
    const { currentPage, totalPages, pageLimit } = d;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = result.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries, totalPages });
  };

  render() {
    // console.log(this.state.data);
    const arr1 = [1, 1, 1, 1, 2, 2, 4];
    // console.log([...new Set(arr1)]);
    arr1.filter((item, index) => arr1.indexOf(item) === index);

    // console.log();
    const { result, currentCountries, currentPage, totalPages } = this.state;
    const totalCountries = result.length;

    // if (totalCountries === 0) return null;

    // const headerClass = [
    // 	"text-dark py-2 pr-4 m-0",
    // 	currentPage ? "border-gray border-right" : ""
    // ]
    // 	.join(" ")
    // 	.trim();
    const open = Boolean(this.state.anchorEl);
    let destinationList = this.state.data.filter(
      (v, i, a) =>
        a.findIndex((v2) => v2.destinationCode === v.destinationCode) === i
    );

    let airlineList = this.state.data.filter(
      (v, i, a) => a.findIndex((v2) => v2.airlneName === v.airlneName) === i
    );

    const {
      outBond,
      returnBond,
      adults,
      child,
      infants,
      bookType,
      list,
      anchorEl,
    } = this.state;
    return (
      <>
        <div className="main-banner-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="main-banner-content-2">
                  <div className="find-form-2">
                    <form className="findfrom-wrapper">
                      <div className="row">
                        <div className="col-md-12 col-lg-10">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-6 mb-2">
                              <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                  <Autocomplete
                                    id="combo-box-demo"
                                    options={destinationList}
                                    getOptionLabel={(option) => {
                                      // console.log(option);
                                      if(option.deptCountry === "United Kingdom"){
                                      return (
                                        option.deptCity 
                                        +
                                        "-" +
                                        "(" +
                                        option.deptCountry +
                                        ")"
                                        //  +
                                        // " - " +
                                        // option.country
                                      );
                                      }
                                    }}
                                    onChange={(e, v) =>
                                      this.setState({ departure: v.originCode })
                                    }
                                    style={{ border: "none" }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        className="inputContainer"
                                        placeholder="Departure..."
                                      />
                                    )}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                  <Autocomplete
                                    id="combo-box-demo"
                                    options={destinationList}
                                    onChange={(e, v) =>
                                      this.setState({
                                        destination: v.destinationCode,
                                      })
                                    }
                                    getOptionLabel={(option) => {
                                      return (
                                        option.arivalCity +
                                        " " +
                                        "(" +
                                        option.destinationCode +
                                        ")" +
                                        " - " +
                                        option.country
                                      );
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        className="inputContainer"
                                        placeholder="Arival..."
                                      />
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-2">
                                                    <div className="col-lg-12 mb-3">
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            options={destinationList}
                                                            onChange={(e, v) => this.setState({ destination: v.destinationCode })}

                                                            getOptionLabel={(option) => {
                                                                return option.arivalCity + " " + "(" + option.destinationCode + ")" + " - " + option.country
                                                            }}
                                                            renderInput={(params) => <TextField {...params} className="inputContainer" placeholder="Arival..." />}
                                                        />
                                                    </div>
                                                </div> */}
                            <div className="col-12 col-md-3 col-lg-3 mb-2">
                              <div className="row">
                                <div className="col-6">
                                  <div className="calendar-input">
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        this.openDatePickerOutBond();
                                        this.setState({
                                          returnBondDatePickerIsOpen: false,
                                        });
                                      }}
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: "#fff",
                                        borderRadius: "5px",
                                        padding: this.state.plusPadding,
                                        cursor: "pointer",
                                      }}
                                    >
                                      {!outBond ? (
                                        <>
                                          {" "}
                                          <img
                                            style={{ width: "17px", marginRight: "5px" }}
                                            src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/plus.png"
                                            alt="plus icons"
                                          />
                                          <label
                                            style={{
                                              fontWeight: 700,
                                              fontSize: "9px",
                                              lineHeight: "16px",
                                              color: "#262339",
                                            }}
                                            class="placehold"
                                          >
                                            Outbound
                                          </label>
                                        </>
                                      ) : (
                                        <>
                                          <div
                                            style={{
                                                display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                              color: "#356ad8",
                                              fontSize: "25px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {("0" + outBond.getDate()).slice(
                                              -2
                                            )}
                                          </div>
                                          <div>
                                            {outBond.toLocaleString("default", {
                                              month: "long",
                                            })}
                                          </div>
                                        </>
                                      )}

                                      <div class="">
                                        <DatePicker
                                          selected={outBond}
                                          onChange={this.handleChangeOutBond}
                                          onClickOutside={() =>
                                            this.setState({
                                              outBondDatePickerIsOpen: false,
                                            })
                                          }
                                          minDate={new Date()}
                                          open={
                                            this.state.outBondDatePickerIsOpen
                                          }
                                          className="my-class"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="calendar-input">
                                    <div
                                      onClick={(e) => {
                                        e.preventDefault();
                                        this.openDatePickerReturnBond();
                                      }}
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: "#fff",
                                        borderRadius: "5px",
                                        padding: this.state.plusPadding1,
                                        cursor: "pointer",
                                      }}
                                    >
                                      {!returnBond ? (
                                        <>
                                          {" "}
                                          <img
                                            style={{ width: "17px", marginRight: "5px" }}
                                            src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/plus.png"
                                            alt="plus icons"
                                          />
                                          <label
                                            style={{
                                              fontWeight: 700,
                                              fontSize: "9px",
                                              lineHeight: "16px",
                                              color: "#262339",
                                            }}
                                            class="placehold"
                                          >
                                            Returnbond
                                          </label>
                                        </>
                                      ) : (
                                        <>
                                          <div
                                            style={{
                                              color: "#356ad8",
                                              fontSize: "25px",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            {("0" + returnBond.getDate()).slice(
                                              -2
                                            )}
                                          </div>
                                          <div>
                                            {returnBond.toLocaleString(
                                              "default",
                                              { month: "long" }
                                            )}
                                          </div>
                                        </>
                                      )}

                                      <div class="plus-checkIn sameclass">
                                        <DatePicker
                                          selected={returnBond}
                                          minDate={new Date()}
                                          onChange={this.handleChangeReturnBond}
                                          onClickOutside={() =>
                                            this.setState({
                                              returnBondDatePickerIsOpen: false,
                                            })
                                          }
                                          open={
                                            this.state
                                              .returnBondDatePickerIsOpen
                                          }
                                          className="my-class"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-2 mb-3">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="calendar-input"  >
                                                                <div onClick={e => {
                                                                    e.preventDefault();
                                                                    this.openDatePickerReturnBond()
                                                                }} style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: "center",
                                                                    background: '#fff',
                                                                    borderRadius: '5px',
                                                                    padding: this.state.plusPadding1,
                                                                    cursor: 'pointer'
                                                                }}>
                                                                    {!returnBond ? <img style={{width: "17px"}} src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/plus.png" alt="plus icons" />
                                                                            :
                                                                            <>
                                                                                <div style={{ color: '#356ad8', fontSize: '30px', fontWeight: 'bold' }}>
                                                                                    {('0' + returnBond.getDate()).slice(-2)}
                                                                                </div>
                                                                                <div>
                                                                                    {


                                                                                        returnBond.toLocaleString('default', { month: 'long' })}
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    <label style={{
                                                                        fontWeight: 700,
                                                                        fontSize: '9px',
                                                                        lineHeight: '16px',
                                                                        color: '#262339',
                                                                    }} class="placehold">Returnbond</label>
                                                                    <div class="plus-checkIn sameclass" >
                                                                        <DatePicker
                                                                            selected={returnBond}
                                                                            minDate={new Date()}
                                                                            onChange={this.handleChangeReturnBond}
                                                                            onClickOutside={ () => this.setState({returnBondDatePickerIsOpen: false})}
                                                                            open={this.state.returnBondDatePickerIsOpen}
                                                                            className="my-class"
                                                                        />
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                            <div className="col-12 col-md-3 col-lg-3 mb-2">
                              <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                  <div className="calendar-input">
                                    <div
                                      className="inputContainer"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({
                                          returnBondDatePickerIsOpen: false,
                                          outBondDatePickerIsOpen: false,
                                        });
                                        this.handleClick(e);
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          fontWeight: 700,
                                          fontSize: "9px",
                                          color: "#262339",
                                          cursor: "pointer",
                                        }}
                                        id="demo-positioned-button"
                                        aria-controls={
                                          open
                                            ? "demo-positioned-menu"
                                            : undefined
                                        }
                                        aria-haspopup="true"
                                        aria-expanded={
                                          open ? "true" : undefined
                                        }
                                      >
                                        {adults} Adt - {child} Chd - {infants}{" "}
                                        Inf
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => {
                                    this.setState({
                                      returnBondDatePickerIsOpen: false,
                                      outBondDatePickerIsOpen: false,
                                    });
                                  }}
                                  className="col-12 col-md-6 col-lg-6"
                                >
                                  <select
                                    onChange={(e) => {
                                      this.setState({
                                        returnBondDatePickerIsOpen: false,
                                        outBondDatePickerIsOpen: false,
                                      });
                                      this.setState({
                                        bookType: e.target.value,
                                      });
                                    }}
                                    value={bookType}
                                  >
                                    <option value="economy">Economy</option>
                                    <option value="business">Business</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-2">
                                                   
                                                    <div onClick={() => {
                                                        this.setState({
                                                            returnBondDatePickerIsOpen: false,
                                                            outBondDatePickerIsOpen: false
                                                        });
                                                    }} className="col-lg-12">
                                                        <select onChange={e => {
                                                            this.setState({
                                                                returnBondDatePickerIsOpen: false,
                                                                outBondDatePickerIsOpen: false
                                                            });
                                                            this.setState({ bookType: e.target.value })
                                                        }} value={bookType}>
                                                            <option value='economy'>Economy</option>
                                                            <option value="business">Business</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-2">
                          {/* <div className="d-grid justify-content-lg-end"> */}

                          <Link
                            to=""
                            onClick={(e) => {
                              e.preventDefault();
                              this.setState({
                                returnBondDatePickerIsOpen: false,
                                outBondDatePickerIsOpen: false,
                              });
                              this.handleSearch();
                            }}
                            className="btn-search"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <i className="bx bx-search-alt pr-5" /> Find now
                          </Link>
                        </div>
                        {/* </div> */}
                      </div>
                    </form>
                  </div>
                  <h2>
                    Amazing Tour In <br />
                    <span className="element">Hampshire</span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => this.handleClose()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <img
                  src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/adult-icon.png"
                  alt="adult icon"
                ></img>
              </ListItemIcon>
              <div class="passenger">
                <span class="label">Adult(s)</span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    if (adults !== 1) {
                      this.setState({ adults: adults - 1 });
                    }
                  }}
                  class="minus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "30px",
                    height: "26px",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  -
                </span>
                <input
                  style={{ width: "50px" }}
                  class="passengerInput totalAdult"
                  type="number"
                  min={0}
                  value={adults}
                  onChange={(inf) =>
                    this.setState({ adults: inf.target.value })
                  }
                />

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ adults: adults + 1 });
                  }}
                  class="plus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "30px",
                    height: "26px",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  +
                </span>
              </div>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <img
                  src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/adult-icon.png"
                  alt="adult icon"
                ></img>
              </ListItemIcon>
              <div class="passenger">
                <span class="label">Child(s)</span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    if (child !== 0) {
                      this.setState({ child: child - 1 });
                    }
                  }}
                  class="minus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "30px",
                    height: "26px",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  -
                </span>
                <input
                  style={{ width: "50px" }}
                  class="passengerInput totalChild"
                  type="number"
                  min={0}
                  value={child}
                  onChange={(inf) => this.setState({ child: inf.target.value })}
                />

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ child: child + 1 });
                  }}
                  class="plus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "30px",
                    height: "26px",
                    fill: "black",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  +
                </span>
              </div>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <img
                  src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/infant-icon.png"
                  alt="adult icon"
                ></img>
              </ListItemIcon>
              <div class="passenger">
                <span class="label">Infant(s)</span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    if (infants !== 0) {
                      this.setState({ infants: infants - 1 });
                    }
                  }}
                  class="minus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "25px",
                    height: "26px",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  -
                </span>
                <input
                  style={{ width: "50px" }}
                  class="passengerInput totalChild"
                  type="number"
                  min={0}
                  value={infants}
                  onChange={(inf) =>
                    this.setState({ infants: inf.target.value })
                  }
                />

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({ infants: infants + 1 });
                  }}
                  class="plus"
                  style={{
                    fontFamily: "GothamMedium",
                    fontSize: "18px",
                    color: "#db2027",
                    width: "30px",
                    height: "26px",
                    backgroundColor: "#f4f4f4",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "26px",
                    cursor: "pointer",
                  }}
                >
                  +
                </span>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {list.length !== 0 ? (
          <div className="offer-area pt-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="package-sidebar">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="sidebar-searchbox">
                          <div className="input-group search-box">
                            Sort & Filter
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="sidebar-categorie mt-40">
                          <h5 className="categorie-head">Airlines</h5>
                          <div className="durations-option radio-box">
                            {this.state.data.length !== 0
                              ? airlineList
                                  .slice(0, this.state.numberToShowAirline)
                                  .map((item, key) => {
                                    return (
                                      <div className="single-option" key={key}>
                                        <input
                                          onClick={(e) => this.filteredData(e)}
                                          value={item.airlneName}
                                          type="radio"
                                          name="categorie"
                                          id={item.airlneName}
                                        />
                                        <label htmlFor={item.airlneName}>
                                          {item.airlneName}
                                        </label>
                                      </div>
                                    );
                                  })
                              : null}
                            {this.state.numberToShowAirline === 8 ? (
                              <button
                                onClick={() =>
                                  this.setState({
                                    numberToShowAirline: airlineList.length,
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
                                onClick={() =>
                                  this.setState({ numberToShowAirline: 8 })
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
                                Show Less
                              </button>
                            )}
                            {/* <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="KL" type="radio" name="categorie" id="categorie1" />
                                                            <label htmlFor="categorie1">KLM</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="BA" type="radio" name="categorie" id="categorie2" />
                                                            <label htmlFor="categorie2">British Airways</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="UA" type="radio" name="categorie" id="categorie3" />
                                                            <label htmlFor="categorie3">United Airlines</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="DA" type="radio" name="categorie" id="categorie4" />
                                                            <label htmlFor="categorie4">Delta Airlines</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="VA" type="radio" name="categorie" id="categorie5" />
                                                            <label htmlFor="categorie5">Virgin Altlantic</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="AA" type="radio" name="categorie" id="categorie6" />
                                                            <label htmlFor="categorie6">American Airlines</label>
                                                        </div>
                                                        <div className="single-option">
                                                            <input onClick={(e) => this.filteredData(e)} value="AF" type="radio" name="categorie" id="categorie7" />
                                                            <label htmlFor="categorie7">Air France</label>
                                                        </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="sidebar-banner mt-40">
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
                <div className="col-lg-9">
                  {this.state.result.length !== 0 ? (
                    <div className="container mb-5">
                      <div className="row d-flex flex-row py-5">
                        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <h2>
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
                  ) : null}
                  <div className="row">
                    {currentCountries.map((item) => {
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
                      return (
                        <div className="col-lg- col-md-12">
                          <div className="package-card-xl ">
                            <div className="package-thumb-xl">
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
                                  {currentAirline.length !== 0 ? (
                                    <img
                                      src={currentAirline[0].airlineLogo}
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
                                  <span style={{ fontSize: "12px" }}>From</span>
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
                                  <div style={{ fontSize: "12px" }}>
                                    Subject to availability
                                  </div>
                                </h5>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                <div>
                                  <h3>{item.originCode}</h3>
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
                                  <h3>{item.destinationCode} </h3>
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
                                  className="col-lg-6 mt-1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    this.props.currentFlight(item);
                                  }}
                                >
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/destination-detail/${item.country}/${item.arivalCity}/${item.fares}`}
                                    className="btn-second"
                                  >
                                    Send inquiry
                                  </Link>
                                </div>

                                <div
                                  className="col-lg-6 mt-1"
                                  style={{
                                    color: "#356ad8",
                                    fontWeight: "700",
                                  }}
                                >
                                  <a
                                    href="tel:02080902417"
                                    className="btn-second"
                                  >
                                    0208 090 2417
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    currntObj: state.currntObj,
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
export default connect(mapStateToProps, mapDispatchToProps)(MainBanner);
