import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

.wrapper{
  display: flex;
  width: 100%;
  height: 100vh;
}
//reset & body css
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family:cursive;
  width: 100%;
  height: 100vh;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
figure,
nav,
a {
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-decoration: none;
  color: inherit;
}
ul,
ol {
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

`;

export default GlobalStyles;
