// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import DesignerPortfolio from './home/DesignerPortfolio';

// Element Layout
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';


class Root extends Component{
    render(){
        return(
            <BrowserRouter>
                <PageScrollTop>
                    <Switch>
                        <Route component={DesignerPortfolio}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
