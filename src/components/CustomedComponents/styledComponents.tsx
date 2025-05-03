import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
      --color-blue: rgb(25, 133, 200);
      --color-blue-fade: rgb(154, 207, 239);
      --color-blue-white: rgb(190, 225, 246);
      --color-blue-dark: rgb(15, 112, 172);
      --color-gray-1: rgb(103, 102, 102);
      --color-gray-2: #777;
      --color-green: rgb(18, 181, 18);
      --color-green-dark: rgb(7, 139, 7);
      --color-green-fade: rgb(133, 228, 133);
      --color-green-2: rgb(13, 159, 111);
      --color-red-fade: rgb(255, 147, 133);
      --color-red: rgb(218, 65, 9);
      --color-orange-fade: rgb(250, 180, 126);
      --breakpoint-tablet: 1200px;
      --breakpoint-phone: 500px;
      --breakpoint-phone-min: 350px;
      --color-green-2-fade: rgb(135, 240, 205);
    }
`;

export const CustomTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 27em;
  color: var(--color-gray-2);
  caret-color: var(--color-blue-dark);
  font-weight: 600;
  border: 3px solid var(--color-blue);
  border-radius: 10px;
  resize: none;

  &::placeholder {
    color: rgba(129, 127, 127, 0.7);
  }

  &:focus {
    outline: none;
    -moz-box-shadow: 0 0 5px var(--color-blue);
    -webkit-box-shadow: 0 0 5px var(--color-blue);
    -o-box-shadow: 0 0 5px var(--color-blue);
    -ms-box-shadow: 0 0 5px var(--color-blue);
    box-shadow: 0 0 5px var(--color-blue);
  }

  &::-webkit-scrollbar {
    padding: 5px;
    width: 15px;
    border-radius: 50px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 3px var(--color-blue-dark) solid;
    border-radius: 10px;
    background-color: var(--color-blue-fade);
  }
`;
