import styled from "styled-components";
import exit from "../../../assets/images/exit.svg";
import AddImglabel from "../../../assets/images/add_img.svg";

export const DeleteBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #fbe9e9;
  border-radius: 5px;
`;

export const EditBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #e6ebed;
  border-radius: 5px;
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
  width: 100%;
`;

export const CotegorFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LocationFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LocationLabelWrapImg = styled.label`
  display: block;
  max-width: 230px;
  height: 222px;
  border-radius: 8px;
  background-color: #e6ebed;
  background-image: url(${AddImglabel});
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-position: center;
  position: relative;
`;

export const LocationImgInput = styled.input`
  visibility: hidden;
`;

export const WrapInformation = styled.div``;

export const LabelTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const LocationInput = styled.input`
  width: 100%;
  max-width: 220px;
  padding: 12px 15px;
  border: none;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: block;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 220px;
  height: 127px !important;
  padding: 13px 15px;
  border: none;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: block;
  margin-bottom: 23px;
  resize: none;
`;

export const LabelError = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: red;
  display: block;
  margin-bottom: 5px;
`;
