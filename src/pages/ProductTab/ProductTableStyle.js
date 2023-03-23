import styled from "styled-components";
import AddImg from "../../assets/images/add.jpg";
import AddImglabel from "../../assets/images/add_img.svg";
import exit from "../../assets/images/exit.svg";

export const CotegoryBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #fbe9e9;
  border-radius: 5px;
`;

export const CotegoryDeletBtn = styled.button`
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

export const CotegorForm = styled.form`
  /* width: 1090px !important;  */
`;

export const CotegorFormInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductDivOne = styled.div`
  width: 100%;
  max-width: 230px;
`;

export const ProductOneWrapImg = styled.div``;

export const ProductOneWrapImgLabel = styled.label`
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

export const ProductOneWrapImgInput = styled.input`
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

// ProductDivTwo
export const ProductDivTwo = styled.div``;

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

export const ProductDivTwoTextarea = styled.textarea`
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

export const ProductWrapModal = styled.div``;

export const ProductDivThre = styled.div``;

export const ProductDivFour = styled.div``;

export const CotegoreEditForm = styled.form`
  width: 270px;
`;

export const CotegorSecondForm = styled.form`
  width: 300px;
`;

export const CarouselWrap = styled.div`
  display: flex;
`;

export const CarouselLabelImg = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.6;
`;

export const CarouselWrapLabelTwoDiv = styled.div`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  /* border: 1px solid #B3C3CA; */
  margin-bottom: 20px;
  border-radius: 5px;
  /* background-image:url(${AddImg});
  background-repeat: no-repeat;
  background-size: cover; */
  position: relative;
`;

export const CarouselLabelTwoSpan = styled.span`
  position: absolute;
  top: 48px;
  left: 12%;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: red;
  opacity: 1;
`;

export const CarouselLabelfirstSpan = styled.span`
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

export const CarouselLabelOneSpan = styled.span`
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

export const CotegorText = styled.p`
  margin: 0;
  margin-bottom: 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

export const CotegorWrapSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

export const CotegorWrapSwitchTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39px;
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

export const CotegorWrapTable = styled.div`
  width: 100%;
  height: 592px;
  margin-bottom: 30px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
    /* border-bottom: 1px solid #B3C3CA; */
  }
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

export const CotegoryEditBtn = styled.button`
  width: 34px;
  height: 34px;
  border: none;
  background-color: #e6ebed;
  border-radius: 5px;
`;

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
