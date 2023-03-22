import styled, { keyframes, css } from "styled-components";

import background from "../../assets/overlay/background.png"


const move =  keyframes`
  from {background-position: 0;}
  to {background-position: 1000px;}
`

interface OverlayType {
  show: boolean
  error: boolean
}
export const OverlayStyled = styled.div<OverlayType>`
  width: 100%;
  height: 100%;
  padding: 1rem;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;

  display: ${(props) => props.show ? 'flex': 'none'};
  align-items: center;
  justify-content: center;

  background-image: url(${background});
  background-repeat: repeat;
  background-size: 100px;
  animation: ${move} 40s linear infinite;

  @media (max-width: 500px) {
    overflow: scroll;
  }

  & .grid {
    width: 100%;
    max-width: 1100px;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(2, 220px);
    align-items: center;
    justify-items: center;
    gap: 1rem;
   
    @media (max-width: 500px) {
      grid-template-columns: 100%;
      grid-template-rows: auto 220px 220px;
      height: 100%;
    }
  }

  & .stats {
    width: 100%;
    padding: 1rem;

    background-color: #fdfdfd;
    border-radius: 10px;
  }

  & .image {
    padding: 1rem;
    background-color: #fdfdfd;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    grid-column: span 1;
    grid-row: span 2;
    

    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 500px) {
      grid-row: span none;
      grid-column: span none;
    }
  }
  & .info {
    width: 100%;
    height: 100%;
    background-color: #fdfdfd;
    border-radius: 10px;
    padding: 1rem;
    
    display: flex;
    align-items: flex-start;
    align-items: left;
    justify-content: space-around;
    flex-direction: column;
    gap: 0.6rem;

    font-family: 'Roboto', sans-serif;
    color: #4d565e;
  
    & h1 {
      font-weight: 600;
      text-align: center;
      width: 100%;
    }
    & span {
      font-weight: 500;
      font-size: 1rem;
    }

    ${(props) => props.error
      ?css`
        &::after {
          content: 'No Result';
          width: 100%;
          height: 100%;
          
          display: flex;
          align-items: center;
          justify-content: center;
          
          background-color: rgb(0,0,0);

          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          font-size: 2rem;

          position: absolute;
          top: 0;
          left: 0;
          z-index: 50;
        }
      `
      : ''
    }
  }
`

export const Close = styled.button`
  width: 64px;
  height: 64px;

  border: none;
  background: transparent;

  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 999;

  transition: all .09s ease-in;
  & .icon {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    transform: scale(1.09);
  }
  &:active {
    transform: scale(0.95);
  }
`