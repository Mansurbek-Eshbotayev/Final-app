import styled from "styled-components";

export const SelectStyle = styled.select`
  padding: 10px;
  border-radius: 7px;
  list-style: none;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#2C3333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const OptionStyle = styled.option``;
