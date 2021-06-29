import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Skill Set",
        tab2 = "Experience",
        tab3 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <strong>Fullstack Development </strong><span> - HTML, CSS, JS, React, Node, SQL, NoSQL</span>
                                                    <p>10+ years experience building websites and applications.</p>
                                                </li>
                                                <li>
                                                    <strong>UX/UI Design </strong><span> - Discovery, User Research, Interviews, Prototyping at all stages</span>
                                                    <p>15+ years professional experience designing delightful user experiences and beautiful UI.</p>
                                                </li>
                                                <li>
                                                    <strong>Graphic / Logo Design </strong><span> - Photoshop, Illustrator</span>
                                                    <p>Background in fine art and technology with 15+ years designing logos and creative direction.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                  <strong>Senior UX/UI Designer, Director </strong><span> - UBS,</span> 2020 - Current
                                               </li>
                                               <li>
                                                     <strong>Mentor in UX/UI Design and Front-End Engineering </strong><span> - Rookie Up, </span>2020 - 2021
                                               </li>
                                               <li>
                                                     <strong>Senior UX/UI Designer, Front-End Engineer </strong><span> - S3 Partners, </span>2016 - 2020
                                               </li>
                                               <li>
                                                  <strong>Senior UX/UI Designer </strong><span> - WorldQuant,</span> 2014- 2016
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <strong>Columbia University Software Engineering Bootcamp </strong><span>- Certificate of Completion,</span> 2020- 2021
                                               </li>
                                               <li>
                                                   <strong>Springboard UX/UI Designer Bootcamp </strong> <span>- Certificate of Completion,</span> 2020- 2021
                                               </li>
                                               <li>
                                                   <strong>Nielsen Norman Group Master Certified UX Designer </strong><span>- 26x UX/UI Certfication,</span> 2018- 2020
                                               </li>
                                               <li>
                                                   <strong>Interaction Design Foundation </strong><span>- 15x UX/UI Certifications,</span> 2019- 2020
                                               </li>
                                               <li>
                                                   <strong>New York University </strong><span>- Principles of UX Design in AR and VR,</span> 2019- 2020
                                               </li>
                                               <li>
                                                   <strong>Scrum Alliance </strong><span>- Scrum Master Certification,</span> 2019- Current
                                               </li>
                                               <li>
                                                   <strong>The Art Institute of NYC </strong><span>- Associate's Degree,</span> 2008- 2010
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>






                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
