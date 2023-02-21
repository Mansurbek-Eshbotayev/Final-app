import styled from "styled-components";
import man from '../../assets/images/icons/man.svg'
import Lock from '../../assets/images/icons/Lock.svg'

export const Loginwrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

export const FormStyle = styled.form`
position: absolute;
top: 160px;
  width: 330px;
  border: 1px solid #01384D;
border-radius: 10px;
padding: 35px 30px 30px 30px;
`

export const FormTitleStyle = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #01384D;
text-align: center;
margin: 0;
margin-bottom: 40px;
`

export const FormLabelStyle = styled.label`
    background-image: url(${man});
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 16px 20px;
    background-position: calc(50% - 105px);
    margin-bottom: 13px;
    display: block;
`

export const FormLabelStyleSecond = styled.label`
    background-image: url(${Lock});
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 16px 20px;
    background-position: calc(50% - 105px);
    display: block;
    margin-bottom: 35px;
`

export const FormInputStyle = styled.input`
  width: 100%;
  padding: 16px 50px;
  border: none;
  border: 1px solid #01384D;
border-radius: 7px; 
opacity: 0.7;


  ::placeholder{
    color: #01384D;
opacity: 0.5;
  }
`

export const FormButton = styled.button`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
background-color: #01384D;
border-radius: 7px;
padding: 17px;
width: 100%;
`

