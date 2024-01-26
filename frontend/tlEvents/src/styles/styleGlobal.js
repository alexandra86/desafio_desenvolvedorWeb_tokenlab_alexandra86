import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
      
}

ul, ol, li{
    list-style: none;
}

a{
    text-decoration:none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}

:root{

    --family-1: 'Inter', sans-serif;
    --family-2: 'Inria Serif', serif;


    --bg-gray-1: #1E1E1E;
    --bg-gray-2: #31343D;
    --bg-gray-3: #545454;
    --bg-gray-4: #D9D9D9;
    --bg-pink: #DA75FF;
    --bg-orange: #FFAB5C;
    --bg-white: #FFFFFF;
    --bg-black: #000000;
    --bg-purple: #191970;

}

`;
