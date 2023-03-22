import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 600px;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;


  & input {
    padding: 0 1rem; 
    font-family: 'Roboto', sans-serif;
    font-size: 1.7rem;
    outline: none;
    border: none;
    width: 100%;
  }
`