import styled from "styled-components";
import AddImg from '../../assets/images/add.jpg'



export const CotegoryBtn = styled.button`
width: 34px;
height: 34px;
border: none;
background-color: #FBE9E9;
border-radius: 5px;
`

export const CotegoryDeletBtn = styled.button`
width: 34px;
height: 34px;
border: none;
background-color: #E6EBED;
border-radius: 5px;
`

export const CotegoryWrapBtn = styled.div`
  position: absolute;
  top: 92%;
  right: 30px;
`

export const CotegoryPostBtn = styled.button`
  font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
text-align: center;
padding: 11px 34px;
border: none;
color: #FFFFFF;
background-color: #01384D;
border-radius: 8px;
`

export const CotegorForm = styled.form`
  width: 570px;
`

export const CotegoreEditForm = styled.form`
  width: 270px;
`

export const CotegorSecondForm = styled.form`
  width: 300px;
`

export const CarouselWrap = styled.div`
 display: flex;
`

export const CarouselLabelImg = styled.img`
width: 200px;
height: 200px;
opacity: 0.6;
`

export const CarouselWrapLabelTwoDiv = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #B3C3CA;
  margin-bottom: 20px;
  /* background-image:url(${AddImg});
  background-repeat: no-repeat;
  background-size: cover; */
  position: relative;
 
`

export const CarouselLabelTwoSpan = styled.span`
  position: absolute;
  top: -18px;
  left: 30%;
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #01384D;
opacity: 0.7;
`

export const CarouselWrapLabel = styled.label`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #B3C3CA;
  margin-bottom: 20px;
  background-image:url(${AddImg});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;
`

export const CarouselLabelOneSpan = styled.span`
  position: absolute;
  top: -18px;
  left: 25%;
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #01384D;
opacity: 0.7;
`



export const CarouselWrapInput = styled.input`
  visibility: hidden;
`



export const CotegorText = styled.p`
  margin: 0;
  margin-bottom: 22px;
  font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
color: #000000;
`

export const CotegorWrapSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CotegorWrapSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
`

export const CotegorAddBtn = styled.button`
width: 100%;
 font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
border: none;
background-color: #01384D;
border-radius: 7px;
display: block;
padding: 14px;
`

export const CotegorWrapTable = styled.div`

 width: 100%;
 height: 592px;
 margin-bottom: 30px;
 overflow-y: scroll;
 ::-webkit-scrollbar {
  display: none;
  /* border-bottom: 1px solid #B3C3CA; */
 }
`

export const EditButton = styled.button`
  padding: 9px 28px;
  border: none;
  background-color: transparent;
`

export const DeleteButton = styled.button`
  padding: 9px 28px;
  background: #FBE9E9;
  color: #D61F1F;
  border: none;
  border-radius: 5px;
`