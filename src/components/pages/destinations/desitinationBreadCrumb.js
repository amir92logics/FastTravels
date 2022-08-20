import React, { Component } from "react";

class BreadCrumb extends Component {
  render() {
    return (
       <>
           {/* ===============  breadcrumb area start =============== */}
           <div className="breadcrumb-area">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="breadcrumb-wrap">
                               <h2>All Destinations</h2>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           {/* ===============  breadcrumb area end =============== */}
       </>
    );
  }
}

export default BreadCrumb;
