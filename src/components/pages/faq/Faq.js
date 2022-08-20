import React, { Component } from "react";
class Faq extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>FAQ</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="faq-wrap">
                  <div className="accordion-box">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            // aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                           Is it cheaper to book my tickets through Fast Travels Travel or online myself?{" "}
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Usually, we have access to better fares than you can get online. We are consolidators and source these fares at bulk rates. Plus, due to our volume of sales, we are given discounts and have availability to fares and seats that may not be available on some online portals. However, it should be noted that consolidator tickets whilst saving you money can have conditions associated with them.

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            // aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Can Fast Travels Travel provide discounts on the economy, business and first-class fares?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          We have the best prices in the market to provide to our customers because we are appointed agents to most of the world’s leading global airline carriers, we can offer the best discounts on the economy, premium economy, business and first-class cabins.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            // aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            How can I book my air travel most efficiently?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          You can email us at <a href="mailto:info@fasttravels.co.uk">info@fasttravels.co.uk</a>, book online at Fast Travels Travel’s website using your debit or credit card, contact us via our Online Chat online, or give us a call on<strong> 02080902417</strong>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            // aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            How can I change the details of my booking?

                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          If you wish to amend a booking/order or wish to enquire if a specific change can be made, then please get in touch with our team for further assistance. We will then be able to check the booking details and get back to you as soon as possible to advise if the amendment is possible and if it will incur a refund or additional charge. In case of any additional cost involved, it will be advised before any amendment occurs.

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            // aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            My name is spelt incorrectly on my flight ticket, what can I do?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          It is not possible to change your name on an airline ticket. The ticket will have to be cancelled and a new ticket will need to be issued (cancellation penalties will apply). When booking, please review your information carefully and ensure that the name of each passenger is entered correctly. If there is a minor error after you have placed a booking, please immediately contact our team member for the correction. We will need to contact the airline to request a name change and we cannot guarantee that they will be able to make the change.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            // aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            How do I cancel my ticket?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Lower priced tickets are mostly non-refundable, but in some cases, airlines will charge a cancellation fee if you wish to cancel you’re booking. However, we recommend that you take out adequate travel insurance before booking to avoid any extra deduction. All cancellations must be sent in writing to `.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            // aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            What is the refund process and how long should I expect to wait for a refund?

                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          A typical hotel or airline reservation takes 8 to 18 weeks to process, depending on where you book and when you travel. We handle the whole process from our end to ensure you receive your refund as quickly as possible. Once we have received the money, and we have processed it, you will receive it. This varies depending on the airline and due to the pandemic, there are still delays with us receiving refunds, however, we do take the stress away by chasing the airlines for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse7"
                            // aria-expanded="false"
                            aria-controls="collapse7"
                          >
                           What are your hotel cancellation charges?

                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          These can vary by room type within each hotel, we will always display the exact cancellation policy on the payment page before the booking is finalized. The most common cancellation policies are: -
<strong>Non-Refundable:</strong> These are typically the cheapest available room rates with the strictest conditions, full payment is required at the time of booking and no refund is provided for cancellations.
<strong>Pay at Hotel:</strong> These rooms can usually be cancelled up until the day before arrival free of charge, a valid payment card is required to secure the room but the actual payment is collected locally by the property. The hotel will collect payment in the local currency so the exact amount charged by the hotel is subject to daily exchange rate fluctuations.
<strong>Hotel Specific:</strong> In this scenario, the hotel will provide a cancellation policy for the room being viewed in real-time, in most cases this will mean that any cancellation after booking will incur a penalty charge levied as a fixed amount or as a percentage of the total price.
<strong>Flexible:</strong> Full payment is still required to reserve the room but the reservation can be cancelled and refunded usually up to 7 days before arrival.

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse8"
                            // aria-expanded="false"
                            aria-controls="collapse8"
                          >
                            What is the minimum age requirement to book a hotel?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The lead guest booking on Fast Travels Travel needs to be at least 18 years of age, some hotels have higher minimum age requirements, should a higher age restriction apply then this will be specified in the hotel description.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse9"
                            // aria-expanded="false"
                            aria-controls="collapse9"
                          >
                            Do Fast Travels Travel tour prices include air travel?

                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The costs listed on our itineraries include the cost of international airfares, by a reputable airline. Occasionally, our itineraries do not include air travel within the country you may be travelling, but these are added in as "options" and will be highlighted to you if it is needed.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse10"
                            // aria-expanded="false"
                            aria-controls="collapse10"
                          >
                           What insurance should I consider for my air ticket?

                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          It is advisable to take out insurance, especially as it forms such a small part of the holiday expense. Insurance will cover you for land and air costs, in most circumstances. Our recommended trip insurance includes baggage insurance which covers losses not covered by the airlines as well as trip interruption which may entail repurchasing tickets or obtaining reimbursement for overnight accommodation.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse11"
                            // aria-expanded="false"
                            aria-controls="collapse11"
                          >
                            What are the airline policies for future bookings?


                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse11"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Most airlines are fully flexible for customers who are looking to book within the next month for travel in the next 120 days. They are offering free changes and refunds. Our team has a list of all the airlines and policies so please feel free to contact them if you are thinking of booking any future travel.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse12"
                            // aria-expanded="false"
                            aria-controls="collapse12"
                          >
                           Does Fast Travels Travel arrange visas for different countries?


                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse12"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Fast Travels Travel can arrange visa applications for tourists visiting any country. Our fees are GBP20 per passport. On top of this, the High Commission charges are applicable and available on this website depending on the type of visa required. If sending the payment by cheque to our Office, please make all cheques payable to Fast Travels, and post to Fast Travels, London England.
The visa forms can be downloaded from the same link, and they need to be accompanied by two passport photos of the applicant as well as the duly completed and signed visa form. When sending the passport please remember that your passport must have six-month validity, and if this is a brand new passport then kindly attach the old passport to expedite the visa process. We will endeavor to obtain the visa within five working days of receiving the application.
If you pick up the passports from our offices at the above address, then there are no additional charges. If the passports are to be returned* these will be by Royal Mail Special Delivery which is GBP6 on top of the above fees (alternatively you can choose to send us a special delivery self-addressed envelope).
If you are sending your passports to us it is suggested, that you do it only by a courier company or through Royal Mail Special Delivery (with the compensation box ticked).
Fast Travels Travel does not accept any liability for the passports if they are lost in transit with the courier company, and any compensation claims due to the passports being lost will have to be taken up between the traveler and the relevant courier company.

</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse14"
                            // aria-expanded="false"
                            aria-controls="collapse14"
                          >
                            How do I register a query or concern? <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse14"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          All queries or concerns are required to be in writing. To submit a comment or complaint please e-mail us at info@fasttravels.co.uk and this will then get submitted to the correct team and dealt with accordingly.
You may also prefer to directly walk-in or post your queries or concerns on our address as follow:
Fast Travels, 
London,
United Kingdom
Regarding any queries, Fast Travels would like to take this opportunity to apologize if you are unhappy with any part of your experience. We aim to resolve the complaint within 28 days pending a full investigation, please be aware that during peak seasons this may take a little longer.
 </div>
                        </div>
                      </div>
                      <h1 className="py-5" >Covid-19</h1>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse15"
                            // aria-expanded="false"
                            aria-controls="collapse15"
                          >
                           My flight has been cancelled. Will I be able to change my dates free of charge or ask for a refund?
                            <i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse15"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The majority of airlines are allowing a first date change fee waiver; however, there may potentially be a difference in prices on fares and taxes for future bookings.
In most cases, if your flight is cancelled by the airline then the airline will give you a full refund. However, in other scenarios airlines may offer you a credit voucher worth the value of the ticket to be used for future travel. These vouchers can be valid for travel permitted within a 12 month or 24-month period of the original travel dates. Periods do vary per airline. Please contact our team to understand the specific policy for your booking.
 </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse16"
                            // aria-expanded="false"
                            aria-controls="collapse16"
                          >
                           I have booked my flights to a destination that has recently proposed a travel ban/travel restriction. What does this mean for my booking?<i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse16"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          This means that due to the travel ban you cannot enter the destination country. You will have to postpone your trip to a future date or cancel it altogether. In some cases, airlines are offering refunds or credit vouchers worth the value of the ticket to be used for future travel. Feel free to contact our team to understand the specific policy for your booking.
 </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse17"
                            // aria-expanded="false"
                            aria-controls="collapse17"
                          >
                           I have booked my flights and now I am notified that I will be placed in quarantine for 14 days if I travel to that location. What should I do?<i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse17"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          Unless you can quarantine, we recommend that you postpone your trip to a later date. Many global airlines are offering complimentary date changes. Please do contact a member of our team on 02080902417
About the options you have with the airline you are flying with.
</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse18"
                            // aria-expanded="false"
                            aria-controls="collapse18"
                          >
                          I need to travel for an emergency. Will I still be able to do this?
</button>
                        </h2>
                        <div
                          id="collapse18"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The British government have advised against all but essential travel. If your travel is for an emergency, please do check the entry requirements for your destination. Please also check the guidelines from here: https://www.gov.uk/foreign-travel-advice Please also check with a member of our team for any flights to your destination. </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse19"
                            // aria-expanded="false"
                            aria-controls="collapse19"
                          >
                           What happens if my re-scheduled trip is affected by a travel ban or cancelled by the airline?
<i className="bx bx-chevron-down" />
                          </button>
                        </h2>
                        <div
                          id="collapse19"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          The same rules apply as if it had been the original trip. You should receive a free date change or a full refund in the form of your original payment method or a refund credit voucher worth the value of the ticket to be used for future travel. These vouchers can be valid for travel permitted within a 12-month or 24-month period of the original travel dates. Periods do vary per airline. Please contact our team to understand the specific policy for your booking. </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  faq wrapper end =============== */}
      </div>
    );
  }
}

export default Faq;
