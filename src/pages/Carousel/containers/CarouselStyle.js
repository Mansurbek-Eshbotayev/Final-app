import styled from "styled-components";
import exit from "../../../assets/images/exit.svg";
import AddImg from "../../../assets/images/add.jpg";

export const EditBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #e6ebed;
  border-radius: 5px;
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

export const CotegorText = styled.p`
  margin: 0;
  margin-bottom: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const WrapSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const AddorEditBtn = styled.button`
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

export const CotegorForm = styled.form`
  width: 515px;
`;

export const WrapInformation = styled.div`
  display: flex;
`;

export const WrapImg = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  /* margin: 0 auto; */
  border: 1px solid #b3c3ca;
  margin-bottom: 20px;
  position: relative;
`;

export const CarouselOldImg = styled.img`
  width: 200px;
  height: 200px;
  opacity: 0.6;
`;

export const LabelTitle = styled.span`
  position: absolute;
  top: -18px;
  left: 30%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #01384d;
  opacity: 0.7;
`;

export const CarouselLabel = styled.label`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #b3c3ca;
  margin-bottom: 20px;
  background-image: url(${AddImg});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;
`;

export const CarouselInput = styled.input`
  visibility: hidden;
`;

export const NewLabeltitle = styled.span`
  position: absolute;
  top: -18px;
  left: 25%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #01384d;
  opacity: 0.7;
`;

export const PostBtn = styled.button`
  position: absolute;
  top: 90%;
  right: 30px;
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

export const DeleteBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #fbe9e9;
  border-radius: 5px;
`;
