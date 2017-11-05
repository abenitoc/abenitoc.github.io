import React, { Component } from 'react';
import { AppContainer, Header, AppBody } from "../styles/AppStyles";
import Portrait from './Portrait';
import SideSelector from './SideSelector';
import MainContainer from './MainContainer';
import NetworkBar from './NetworkBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showing: 'Home'
        }
        this.changeState = this.changeState.bind(this);
    }


    render() {
        return (
            <AppContainer>
                <Header>
                    <Portrait/>
                    <NetworkBar/>
                </Header>
                <AppBody>
                    <SideSelector changeState={this.changeState}/>
                    <MainContainer showing={this.state.showing}/>
                </AppBody>
            </AppContainer>
        );
    }

    changeState(showing){
        this.setState({showing: showing});
    }

}

export default App;
