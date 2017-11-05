import styled, { keyframes } from 'styled-components';
import { pulse, wobble } from 'react-animations';
const wobbleAnimation = keyframes`${wobble}`
const pulseAnimation = keyframes`${pulse}`;

export const AppBody = styled.div`
    font-size: large;
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #222;
  height: 20vh;
  padding: 20px;
  color: white;
`;

export const NetworkElements = styled.div`
    display: flex;
    float: right;
    height: 100%;
`;

export const NetworkElement = styled.a`
    &:hover{
        animation: 2s ${wobbleAnimation};
    }
`;

export const PortraitImg = styled.img`
    height: 20vh;
    width: 20vw;
    float: left;
`;

export const SideCarrousel = styled.div`
    width: 15vw;
    height: 70vh;
    float: left;
    margin: 20px
    -webkit-clip-path: polygon(34% 4%, 100% 4%, 100% 96%, 15% 96%);
    clip-path: polygon(34% 4%, 100% 4%, 100% 96%, 15% 96%);
    background-color: red;
`;

export const SingleElementCarrousel = styled.div`
    text-align: right;
    font-size: 200%;
    color: white;
    cursor: pointer;
    padding: 6vh;
    &:hover{
        animation: 1s ${pulseAnimation};
    }
`;

export const BodySquared = styled.div`
    display: inline-block;
    width: 80vw;
    height: 64vh;
    background-color: red;
    margin: 1.5%;
`;