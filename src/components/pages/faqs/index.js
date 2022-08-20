import React, { Component } from "react";

export default class privacyPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Privacy policy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details">
                <h1>FAQs</h1>                        </div>
                    </div>
                </div>
                                    <div class="row">
                        <div class="col-md-12">
                            <div class="faqs">
                                <div class="accordion" id="accordionExample">
                                                                            <div class="card">
                                            <div class="card-header" id="heading-0" data-toggle="collapse" data-target="#collapse-0" aria-expanded="false" aria-controls="collapse-0">
                                                <h5 class="mb-0"><button class="btn btn-link" type="button">What Differs Between Charter And Scheduled Flights?</button></h5>
                                            </div>
                                            <div id="collapse-0" class="collapse" aria-labelledby="heading-0" data-parent="#accordionExample">
                                                <div class="card-body"><p>Charter flight: is not provided by an airline necessarily, but an aircraft that is chartered by a holiday company or organization. This is a special service and may operate only on special occasions, events, national holiday or peak seasons, on special routes etc. Seats on a Chartered Flight are sold as part of Holiday package. As the Chartered flight service is for Holidaymakers and businessmen, these flights usually have cheaper fares, but small baggage allowance, less legroom and often require separate payment for onboard meals and drinks. Also, some companies may sell "seats only" at a chartered flight with no accommodations or ground arrangements.</p>
<p>Scheduled flight: is sold under the name of an airline and is operated and marketed by the same airline, its consolidators or travel agents. Such flights can be twice daily or at specific days of the week as per airline’s given schedule. These flights operate for nearly all destinations throughout the year.</p>
</div>
                                            </div>
                                        </div>
                                                                            <div class="card">
                                            <div class="card-header" id="heading-1" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                                <h5 class="mb-0"><button class="btn btn-link" type="button">What Is An E-Ticket And Do Airlines Still Issue Paper Ticket As Well?</button></h5>
                                            </div>
                                            <div id="collapse-1" class="collapse" aria-labelledby="heading-1" data-parent="#accordionExample">
                                                <div class="card-body"><p>The "E" in an "e-ticket" stands for "electronic ticket". As the name suggests, it is a digital or computerized ticket that is sent through email, fax or other channels. The E-ticket bears a long number at the top, this is to be given to the airline desk at check-in time, and the airline is able to trace all the record of the passenger with the help of the long number written on the e-ticket.</p>
<p>In appearance, e-ticket looks like a paper ticket, however, the good part of the deal is, you can lose it, reprint it and get it back again, anytime. International Air Transport Association greatly favors e-ticketing system and all top-notch International airline issue e-tickets only. Once you get an e-ticket you no longer require a paper ticket, as the former is the "modern alternate" of the later.</p>
</div>
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
