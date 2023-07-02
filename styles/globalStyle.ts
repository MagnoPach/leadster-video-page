import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  *::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #707070;
    background-clip: padding-box;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
      cursor: pointer;
    }
`;
