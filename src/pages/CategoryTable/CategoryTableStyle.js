import styled from "styled-components";
import exit from "../../assets/images/exit.svg";

export const CostumBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CostumBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #fbe9e9;
  border-radius: 5px;
`;

export const EditButton = styled.button`
  padding: 9px 28px;
  border: none;
  background-color: transparent;
`;

export const DeleteButton = styled.button`
  padding: 9px 28px;
  background: #fbe9e9;
  color: #d61f1f;
  border: none;
  border-radius: 5px;
`;

export const CotegoryEditBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #e6ebed;
  border-radius: 5px;
`;

export const CotegoryWrapBtn = styled.div`
  position: absolute;
  top: 92%;
  right: 30px;
`;

export const CotegoryPostBtn = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  padding: 11px 34px;
  border: none;
  color: #ffffff;
  background-color: #01384d;
  border-radius: 8px;
`;

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

export const CotegoryForm = styled.form`
  width: 270px;
`;

export const CotegorText = styled.p`
  margin: 0;
  margin-bottom: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const CotegorWrapSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CotegorWrapSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const CotegorAddBtn = styled.button`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  border: none;
  background-color: #01384d;
  border-radius: 7px;
  display: block;
  padding: 14px;
`;
