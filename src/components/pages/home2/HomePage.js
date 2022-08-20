import React, { Component } from "react";
import MainBanner from "./MainBanner";
import Aboutus from "./Aboutus";
import Destinations from "./Destinations";
import Review from "./Review";
import OtherComponents from "./OtherComponents";


class HomePageTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
       <div>
        
           <div className="preloader">
               <div className="loader loader1">
                   <span style={{'--i': 1}} />
                   <span style={{'--i': 2}}/>
                   <span  style={{'--i': 3}}/>
                   <span  style={{'--i': 4}}/>
                   <span  style={{'--i': 5}}/>
                   <span  style={{'--i': 6}}/>
                   <span  style={{'--i': 7}} />
                   <span  style={{'--i': 8}}/>
                   <span  style={{'--i': 9}}/>
                   <span  style={{'--i': 10}}/>
                   <span  style={{'--i': 11}}/>
                   <span  style={{'--i': 12}}/>
                   <span  style={{'--i': 13}}/>
                   <span  style={{'--i': 14}}/>
                   <span  style={{'--i': 15}}/>
                   <span  style={{'--i': 16}}/>
                   <span  style={{'--i': 17}}/>
                   <span  style={{'--i': 18}}/>
                   <span  style={{'--i': 19}}/>
                   <span  style={{'--i': 20}}/>
                   <div className="rocket" />
               </div>
           </div>
            <MainBanner/>
            <Destinations/>
            <OtherComponents/>
            <Aboutus/>
            {/* <Review/> */}
       </div>
    );
  }
}

export default HomePageTwo;
