import styled from "styled-components";
import SearchImg2 from "../../assets/images/icons/search2.svg";
// import SearchImg from "../../assets/images/icons/search.svg";

export const SerchLabel = styled.label`
  display: block;
  width: 100%;
  min-width: 350px;
  margin-right: 20px;
`;

export const SerchLabelInput = styled.input`
  width: 100%;
  /* max-width: 400px; */
  padding: 12px 40px 12px 20px;
  border: none;
  background-color: #ffffff;
  border-radius: 7px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#2C3333")};
  background-image: url(${SearchImg2});

  background-repeat: no-repeat;
  background-position: calc(50% + 150px);
  display: block;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#2C3333")};
  ::placeholder {
    color: ${({ theme }) => (theme === "light" ? "#000" : "#EEEEEE")};
  }
`;
