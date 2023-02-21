import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-display: swap; 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/montserrat-v25-latin-500.woff2') format('woff2'),
       url('../fonts/montserrat-v25-latin-500.woff') format('woff');
}

@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/montserrat-v25-latin-600.woff2') format('woff2'),
       url('../fonts/montserrat-v25-latin-600.woff') format('woff');
}

html {
	height: 100%;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: inherit;
	scroll-behavior: smooth;
}

body {
	font-family:'Montserrat' , 'Arial', 'sans-serif';
	margin: 0;
	padding: 0;
  overflow-y: hidden;
}




img {
	vertical-align: middle;
}

hr{
	margin: 0;
}

.site_link{
  display: flex;
  align-items: center;
  padding: 15px 0 15px 32px ;
  text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
/* background-color: #EABF9F; */
}

.activ_link{
  display: flex;
  align-items: center;
  padding: 15px 0 15px 32px ;
  text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
background-color: #EABF9F;
}


`;

export const GlobalModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 1110px !important;
}
`;

export const GlobalDeletModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 330px !important;
}
`;

export const GlobalLocationModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 815px !important;
}
`;

export const GlobalTechnologyModal = createGlobalStyle`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
max-height: calc(100% - 64px);
min-width: 530px !important;
}
`;
