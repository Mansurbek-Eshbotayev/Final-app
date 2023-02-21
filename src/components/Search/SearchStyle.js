import styled from "styled-components";
import SearchImg from "../../assets/images/icons/search.svg";

export const SerchLabel = styled.label`
  display: block;
  width: 100%;
  max-width: 400px;
`;

export const SerchLabelInput = styled.input`
  width: 100%;
  /* max-width: 400px; */
  padding: 12px 40px 12px 20px;
  border: none;
  background-color: #ffffff;
  border-radius: 7px;
  background-image: url(${SearchImg});
  background-repeat: no-repeat;
  background-position: calc(50% + 170px);
  display: block;
`;
