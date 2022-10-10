import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a, em, img, strong, 
b, u, i, center,
ol, ul, li, form, label,
article, aside, figure, figcaption, footer, header, 
menu, nav, section, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
	font-family: 'Inter', sans-serif;
	color: white;
	background-color: #181818;
	box-sizing: border-box;
	
}

body::-webkit-scrollbar {
  width: 12px;
}

/* Track */
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
body::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}


ol, ul {
	list-style: none;
}

`;
