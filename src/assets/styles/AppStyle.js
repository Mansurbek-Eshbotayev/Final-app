import styled from "styled-components";
export const AppStyle = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#2C3333")};
  color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;
