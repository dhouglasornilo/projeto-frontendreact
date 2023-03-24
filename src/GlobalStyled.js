import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Courier New', Courier, monospace;
    line-height: 1.5em;
    font-weight: 400;

    color: #fff;
  }
`

export const Main = styled.div`
  background-color: #1771E6;
  display: flex;
`
