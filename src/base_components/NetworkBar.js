import React, { Component } from 'react';
import {NetworkElements, NetworkElement} from "../styles/AppStyles";
import TwitterLogo from '../assets/twitter-logo.png';
import LinkedinLogo from '../assets/linkedin-logo.png';
import GithubLogo from '../assets/github-logo.png';

class NetworkBar extends Component {
    render(){
        return(
            <NetworkElements>
                <NetworkElement style={{alignSelf:'flex-end', marginLeft: '15px'}} href={"https://twitter.com/beertoben"}><img src={TwitterLogo}></img></NetworkElement>
                <NetworkElement style={{alignSelf:'flex-end', marginLeft: '15px'}} href={"https://www.linkedin.com/in/abenitoc/"}><img src={LinkedinLogo}></img></NetworkElement>
                <NetworkElement style={{alignSelf:'flex-end', marginLeft: '15px'}} href={"https://github.com/abenitoc"}><img src={GithubLogo}></img></NetworkElement>
            </NetworkElements>
        );
    }
}

export default NetworkBar;