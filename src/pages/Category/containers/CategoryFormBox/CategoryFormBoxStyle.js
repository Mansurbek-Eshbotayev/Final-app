import styled from "styled-components";
import exit from "../../../../assets/images/exit.svg";

export const ExitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #01384d;
  background-image: url(${exit});
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: center;
  border: none;
  cursor: pointer;
`;
