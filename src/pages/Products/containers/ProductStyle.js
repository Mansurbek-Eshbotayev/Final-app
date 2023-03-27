import styled from "styled-components";
import AddImg from "../../../assets/images/add.jpg";
import AddImglabel from "../../../assets/images/add_img.svg";
import exit from "../../../assets/images/exit.svg";

export const CotegorForm = styled.form``;

export const CotegorFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductWrapImg = styled.div`
  width: 100%;
  max-width: 230px;
`;

export const ProductImgLabel = styled.label`
  display: block;
  max-width: 230px;
  height: 190px;
  border-radius: 8px;
  background-color: #e6ebed;
  background-image: url(${AddImglabel});
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-position: center;
  position: relative;
`;

export const ProductImgInput = styled.input`
  visibility: hidden;
`;

export const ProductSelect = styled.select`
  width: 220px;
  padding: 12px 15px;
  border: none;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ProductSelectOption = styled.option``;

export const WrapInformation = styled.div``;

export const ProductLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const ProductInput = styled.input`
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

export const ProductTextarea = styled.textarea`
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

export const ImgTable = styled.span`
  position: absolute;
  top: 30px;
  left: 23%;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: green;
  opacity: 1;
`;

export const WrapSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.variant ? "30px" : "27px")};
  margin-bottom: 27px;
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

export const EditBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #e6ebed;
  border-radius: 5px;
`;

export const DeleteBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #fbe9e9;
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

export const LabeleError = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: red;
  display: block;
  margin-bottom: 4px;
`;
