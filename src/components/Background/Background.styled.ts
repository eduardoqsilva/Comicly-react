import styled from "styled-components";
import { keyframes } from "styled-components";

import background from "../../assets/background/background.webp"
import right from "../../assets/background/comic.jpg"
import favicon  from "/favicon.svg"


const move =  keyframes`
  from {background-position: 0;}
  to {background-position: -500px;}
`

export const BackgroundStyled = styled.header`
  width: 100vw;
  height: 100vh;
  /* background-color: gray; */

  background-image: url(${background});
  background-repeat: repeat;
  background-size: 500px;
  animation: ${move} 20s linear infinite;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: #0D9BEB;
    opacity: 0.8;
  }
 
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: none;
  align-items: center;
  justify-items: center;

  width: 100%;
  height: 100%;

  position: relative;
  z-index: 10;

  &::before {
    content: '';
    width: 60px;
    height: 60px;
    background-image: url(${favicon});
    background-size: cover;

    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }

  & .leftDecal {
    height: 100%;
    width: 30%;

    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;

    clip-path: polygon(19% 0, 100% 0%, 100% 100%, 0 100%);
    background-image: url(${right});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    background-color: white;

    &::before {
      content: '';
      display: block;

      height: 100%;
 
      background-color: #fff;
      clip-path: polygon(19% 0, 23% 0, 4% 100%, 0 100%);
    }

    @media (max-width: 700px) {
      display: none;
    }
  }
`