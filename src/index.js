import React                             from "react";
import ReactDOM                          from "react-dom";
import { hydrate, render } from 'react-dom'
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import SimpleReactLightbox               from 'simple-react-lightbox'
import secondLayout                     from "./components/layouts/main-two";
import Layout                           from "./components/app";
import aboutUs                          from "./components/pages/about-us/AboutUs";
import destinations                     from "./components/pages/destinations/Destinations";
import countries                     from "./components/pages/destinations/countries";
import contact                          from "./components/pages/contact/Contact";
import airlines                            from "./components/pages/guide/AirlinesComponent";
import airlineDetails                            from "./components/pages/guide/AirlineDetails";
import packageSidebar                   from "./components/pages/package/PackageSidebar";
import packageDetails                   from "./components/pages/package/PackageDetails";
import beatMyQuote                      from "./components/pages/beatmyquote";
import termsConditons                      from "./components/pages/termsConditons";
import privacy                      from "./components/pages/privacy/privacyPage";
import cookiesPolicy                      from "./components/pages/cookiesPolicy";
import bookingConditons                      from "./components/pages/package/bookingConditons";
import faqs                      from "./components/pages/faq/Faq.js";
import {store} from './redux/store';
import {Provider} from 'react-redux';
import './index.css';
import './index.scss';
class Root extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
            <BrowserRouter basename={"/"}>
                    <Switch>
                        <Route exact path='/' component={secondLayout} />
                        <Layout>
                            <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs} />
                            <Route path={`${process.env.PUBLIC_URL}/all-destinations`} component={destinations} />
                            <Route path={`${process.env.PUBLIC_URL}/country/:countryName`} component={countries} />
                            <Route path={`${process.env.PUBLIC_URL}/business-class-flights`} component={packageSidebar} />
                            <Route path={`${process.env.PUBLIC_URL}/destination-detail/:countryName/:cityName/:fare`} component={packageDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/airlines`} component={airlines} />
                            <Route path={`${process.env.PUBLIC_URL}/airline/:airlineName`} component={airlineDetails} />
                            <Route path={`${process.env.PUBLIC_URL}/beat-my-quote`} component={beatMyQuote} />
                            <Route path={`${process.env.PUBLIC_URL}/terms-conditons`} component={termsConditons} />
                            <Route path={`${process.env.PUBLIC_URL}/privacy-policy`} component={privacy} />
                            <Route path={`${process.env.PUBLIC_URL}/contact`} component={contact} />
                            <Route path={`${process.env.PUBLIC_URL}/booking-conditons`} component={bookingConditons} />
                            <Route path={`${process.env.PUBLIC_URL}/faqs`} component={faqs} />
                            <Route path={`${process.env.PUBLIC_URL}/cookies-policy`} component={cookiesPolicy} />
                        </Layout>
                    </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Root/>, rootElement);
} else {
  render(<Root/>, rootElement);
}

// ReactDOM.render(
//     <React.StrictMode>
//         <SimpleReactLightbox>
//             <Root />
//         </SimpleReactLightbox>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

