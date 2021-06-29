import React from 'react'
import ScrollToTop from 'react-scroll-up';
import TextLoop from "react-text-loop";
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp} from "react-icons/fi";
import Header from "../component/header/HeaderThree";
import TabThree from "../elements/tab/TabThree";
import Helmet from "../component/common/Helmet";
import {Link} from "react-router-dom";
import Brand from "../elements/Brand";
import PortfolioList from "../elements/portfolio/PortfolioList";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my Portfolio',
        title: 'Hello, I’m <span>Cas</span> Welcome to my World.',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]

const DesignerPortfolio = () => {
    return (
        <div>
            <Helmet pageTitle="Cas McDonald Portfolio" />
            {/* Start Header Area  */}
            <Header headerPosition="header--static" logo="symbol-dark" color="color-black"/>
            {/* End Header Area  */}

          <div id="home">
            <div className="slider-wrapper">
                {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="designer-thumbnail">
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/about/designer-avatar.png` } alt="Slider Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className={`inner ${value.textPosition}`}>
                                        {value.category ? <span>{value.category}</span> : ''}
                                        <h1 className="title">Hi, I’m Cas McDonald. <br/>
                                        <TextLoop>
                                            <span> Fullstack Dev.</span>
                                            <span> UX Designer.</span>
                                            <span> UI Designer.</span>
                                        </TextLoop>{" "}
                                        </h1>
                                        <h2>based in New York, NY.</h2>
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
                {/* End Single Slide */}
            </div>
          </div>

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`${ process.env.PUBLIC_URL }/assets/images/about/about-8.jpg`} alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">About Me</h2>
                                            <p className="description">NN/g Master Certified UX / UI Designer and Full Stack Developer with over 10+ years of experience based in New York City.</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Designer Portfolio  */}
            <div id="portfolio">
              <div className="designer-portfolio-area ptb--120 bg_color--1">
                  <div className="wrapper plr--70 plr_sm--30 plr_md--30">
                      <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
                  </div>
              </div>
            </div>
            {/* End Designer Portfolio  */}
            <div id ="contact">
              <div className="portfolio-area pb--120 bg_color--1">
                  <ContactOne />
              </div>
            </div>

            {/* Start Footer Style  */}
            <FooterTwo />
            {/* End Footer Style  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default DesignerPortfolio
