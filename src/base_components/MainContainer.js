import React, { Component } from 'react';

import Home from './inside_components/Home';
import Blog from './inside_components/Blog';
import Portfolio from './inside_components/Portfolio';
import Me from './inside_components/Me';

class MainContainer extends Component {
    render(){
        return(
            <div>
                {this.props.showing === "Home" && (<Home/>)}
                {this.props.showing === "Blog" && (<Blog/>)}
                {this.props.showing === "Portfolio" && (<Portfolio/>)}
                {this.props.showing === "Me" && (<Me/>)}
            </div>
        );
    }
}

export default MainContainer;