import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
        category: 'Web Application',
        link: 'https://uxfol.io/project/03c0ede6/Queu-ed--Video-Game-Tracker-Application',
        title: 'Video Game Tracking app using Front end, SQL, & Express & RAWG API.'

    },
    {
        image: '02',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Web Application',
        link:'https://www.casctrl.com/starwars/index.html',
        title: 'Star Wars Personality Test built in HTML, CSS, & JS. Uses GIPHY and SWAPI.'
    },
    {
        image: '03',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Web Application',
        link: 'https://defy1x.github.io/c06-weather-app/',
        title: 'Weather App built in JS that uses OpenWeatherApi.'
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'UX/ UI Design',
        link: 'https://uxfol.io/project/040d8f47/S3-Partners-Website--Branding----Application-Design',
        title: 'S3 Partners Website, Branding, & Application Design'
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'UX/ UI Design',
        link: 'https://uxfol.io/project/040d8f48/Websim-iOS-Application',
        title: 'Websim iOS Application'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'UX/ UI Design',
        link: 'https://uxfol.io/project/045f5511/Jolt-UX-Case-Study',
        title: 'Jolt UX React Native Application'
    },
    {
        image: '07',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        category: 'UX/ UI Design',
        link: 'https://uxfol.io/project/0489b407/Thrive-UX-Case-Study-',
        title: 'Thrive UX React Native Application'
    },
    {
        image: '08',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        category: 'UX/ UI Design',
        link: 'https://uxfol.io/project/04b1f8e7/Website---Mobile-Design--Multiple-Projects-',
        title: 'Collection of UI, and webdesign work'
    },
    {
        image: '09',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Logo Design',
        link: 'https://uxfol.io/project/04be405e/Logos---Illustration---Concept-Art--Multiple-Projects-',
        title: 'Collection of logos, Illustration, & Concept Art'
    },

]


const TabTwo = [
  {
      image: '01',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-01.jpg',
      category: 'Web Application',
      link: 'https://uxfol.io/project/03c0ede6/Queu-ed--Video-Game-Tracker-Application',
      title: 'Video Game Tracking app using Front end, SQL, & Express & RAWG API.'

  },
  {
      image: '02',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
      category: 'Web Application',
      link:'https://www.casctrl.com/starwars/index.html',
      title: 'Star Wars Personality Test built in HTML, CSS, & JS. Uses GIPHY and SWAPI.'
  },
  {
      image: '03',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
      category: 'Web Application',
      link: 'https://defy1x.github.io/c06-weather-app/',
      title: 'Weather App built in JS that uses OpenWeatherApi.'
  },
]

const TabThree = [
  {
      image: '04',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
      category: 'UX/ UI Design',
      link: 'https://uxfol.io/project/040d8f47/S3-Partners-Website--Branding----Application-Design',
      title: 'S3 Partners Website, Branding, & Application Design'
  },
  {
      image: '05',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
      category: 'UX/ UI Design',
      link: 'https://uxfol.io/project/040d8f48/Websim-iOS-Application',
      title: 'Websim iOS Application'
  },
  {
      image: '06',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
      category: 'UX/ UI Design',
      link: 'https://uxfol.io/project/045f5511/Jolt-UX-Case-Study',
      title: 'Jolt UX React Native Application'
  },
  {
      image: '07',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
      category: 'UX/ UI Design',
      link: 'https://uxfol.io/project/0489b407/Thrive-UX-Case-Study-',
      title: 'Thrive UX React Native Application'
  },
  {
      image: '08',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
      category: 'UX/ UI Design',
      link: 'https://uxfol.io/project/04b1f8e7/Website---Mobile-Design--Multiple-Projects-',
      title: 'Collection of UI, and webdesign work'
  },
]

const TabFour = [
  {
      image: '09',
      bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
      category: 'Logo Design',
      link: 'https://uxfol.io/project/04be405e/Logos---Illustration---Concept-Art--Multiple-Projects-',
      title: 'Collection of logos, Illustration, & Concept Art'
  },
]

class TabStyleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, tab2, tab3, tab4, isOpen } = this.state;
        return (
            <div>
                <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab><span>All Projects</span></Tab>
                                    <Tab><span>Web Application</span></Tab>
                                    <Tab><span>UX/UI Design</span></Tab>
                                    <Tab><span>Logo Design</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>

                    <TabPanel className="row row--35">
                        {TabOne.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                        prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.link}>
                                                      <img src={`${ process.env.PUBLIC_URL }/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                  </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={value.link}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabTwo.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabTwo[tab2].bigImage}
                                        nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                        prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab2: (tab2 + 1) % TabTwo.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab2: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.link}>
                                                        <img src={`${ process.env.PUBLIC_URL }/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={value.link}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabThree.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabThree[tab3].bigImage}
                                        nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                        prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab3: (tab3 + 1) % TabThree.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab3: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                      <a href={value.link}>
                                                        <img src={`${ process.env.PUBLIC_URL }/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={value.link}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFour.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFour[tab4].bigImage}
                                        nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                                        prevSrc={TabFour[(tab4 + TabFour.length - 1) % TabFour.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab4: (tab4 + 1) % TabFour.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab4: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.link}>
                                                        <img src={`${ process.env.PUBLIC_URL }/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={value.link}>{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>



                </Tabs>
            </div>
        )
    }
}


export default TabStyleThree
