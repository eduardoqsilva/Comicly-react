import styled from "styled-components";

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  padding: 1rem;
  
  @media (max-width: 700px) {
    width: 100%;
    & img {
      width: 100%;
    }
  }
  
  /* width: 100%; */
`