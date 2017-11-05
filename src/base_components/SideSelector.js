import React, { Component } from 'react';
import {SideCarrousel, SingleElementCarrousel} from "../styles/AppStyles";

class SideSelector extends Component {
    render(){
        return(<SideCarrousel>
            <SingleElementCarrousel><a
                onClick={(e)=>{
                    this.props.changeState('Me');
                }
                }
            >Me</a></SingleElementCarrousel>

            <SingleElementCarrousel><a
                onClick={(e)=>{
                    this.props.changeState('Blog');
                }
                }
            >Blog</a></SingleElementCarrousel>
            <SingleElementCarrousel><a
                onClick={(e)=>{
                    this.props.changeState('Home');
                }
                }
            >Home</a></SingleElementCarrousel>
            <SingleElementCarrousel><a
                onClick={(e)=>{
                    this.props.changeState('Portfolio');
                }
                }
            >Portfolio</a></SingleElementCarrousel>

        </SideCarrousel>);
    }
}

export default SideSelector;