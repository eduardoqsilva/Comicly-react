import styled from "styled-components";

interface Type {
  value?: number
  barColor?: string
  barHeight?: number
}

export const WrapperChartStyled = styled.div<Type>`
  display: grid;
  gap: 1rem;
  justify-items: left;
  align-items: center;
  grid-template-columns: auto 2fr;
  grid-template-rows: repeat(auto, ${(props) => props.barHeight + 'px'});

  width: 100%;
`

export const Bar = styled.div<Type>`
  width: 100%;
  height: ${(props) => props.barHeight + 'px'};
  background-color: rgba(0,0,0,0.3);
  grid-column: 2;
  position: relative;
  

  &::after {
    content: '';
    display: block;
    width: ${(props) => props.value + '%'};
    height: 100%;
    background-color: ${(props) => props.barColor};
    transition: all .5s ease-in-out;
  }
  &::before {
    content: '${(props) => props.value === 0 ? 'not defined' : props.value}';
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }

`
export const Legend = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  grid-column: 1;
`