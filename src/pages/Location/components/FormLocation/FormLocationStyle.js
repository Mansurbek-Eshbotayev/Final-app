import styled from "styled-components";
import AddImglabel from "../../../../assets/images/add_img.svg";

export const LabelError = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: red;
  display: block;
  margin-bottom: 5px;
`;

export const WrapInformation = styled.div``;

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

export const SwitchTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
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

export const LocationImgInput = styled.input`
  visibility: hidden;
`;

export const LocationFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const CotegorForm = styled.form`
  width: 100%;
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

export const WrapSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
