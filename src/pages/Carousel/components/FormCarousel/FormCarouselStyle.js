import styled from "styled-components";

import AddImg from "../../../../assets/images/add.jpg";

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