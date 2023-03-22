import styled from "styled-components";

interface LoadingWrapperType {
  visible: boolean
}

export const LoadingWrapper = styled.div<LoadingWrapperType>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;

  background-color: rgba(0,0,0,0.9);

  display: ${(props) => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  & .img {
    width: 200px;
    height: 200px;
  }
`