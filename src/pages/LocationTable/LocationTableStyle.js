import styled from "styled-components";
import exit from "../../assets/images/exit.svg";
import AddImg from "../../assets/images/add.jpg";
import AddImglabel from "../../assets/images/add_img.svg";

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

export const CotegorForm = styled.form`
  width: 100%;
`;

export const CotegorFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDivOne = styled.div`
  width: 100%;
  max-width: 230px;
`;

export const ProductDivTwoLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const ProductDivTwoInput = styled.input`
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

export const WrapperSwitch = styled.div`
  width: 220px;
  padding-left: 20px;
`;

export const LocationWrap = styled.div`
  display: flex;
`;

export const LocationWrapLabelTwoDiv = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  /* margin: 0 auto; */
  border: 1px solid #b3c3ca;
  margin-bottom: 20px;
  position: relative;
`;

export const LocationLabelImg = styled.img`
  width: 200px;
  height: 200px;
  opacity: 0.6;
`;

export const LocationLabelTwoSpan = styled.span`
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

export const LocationWrapLabel = styled.label`
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

export const LocationWrapInput = styled.input`
  visibility: hidden;
`;

export const LocationLabelOneSpan = styled.span`
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

export const LocationFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LocationDivOne = styled.div`
  width: 100%;
  max-width: 230px;
`;

export const LocationOneWrapImg = styled.div``;

export const LocationOneWrapImgLabel = styled.label`
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

export const LocationOneWrapImgInput = styled.input`
  visibility: hidden;
`;

export const ProductDivTwo = styled.div``;

export const LocationDivTwoLabel = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const locationDivTwoInputspace = styled.input`
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

export const LocationDivTwoLabelspace = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const LocationDivTwoInput = styled.input`
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

export const LocationNewDivTwoInput = styled.input`
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

export const ProductDivFour = styled.div``;

export const LocationDiv = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const LocationDivTwoTextarea = styled.textarea`
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
