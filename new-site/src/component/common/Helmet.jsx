import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Cas McDonald Portfolio </title>
                    <meta name="description" content="Portfolio Website of Cas McDonald." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
