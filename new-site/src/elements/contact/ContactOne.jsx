import React, { Component } from "react";

class ContactOne extends Component{
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Me.</h2>
                                <p className="description">I am currently looking for fullstack development work and freelance opportunities at this time.</p>
                                <p> Connect with me via my email below.</p>
                                    <p><a href="mailto:cas@casmcdonald.com"> cas@casmcdonald.com</a></p>
                                    <a href="https://www.casctrl.com/assets/Casandra-McDonald-Resume.pdf"><button className="rn-button-style--2 btn-solid" name="submit" id="mc-embedded-subscribe">Download Resume</button></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                              <img src={`${ process.env.PUBLIC_URL }/assets/images/about/about-6.jpg`} alt="Cas McDonald"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactOne;
