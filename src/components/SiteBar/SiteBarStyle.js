import styled from "styled-components";

export const SiteBarStyle = styled.div`
  width: 100%;
  max-width: 220px;
  position: relative;
  height: 100vh;
  background-color: #01384d;
`;

export const SiteLogoWrap = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 20px 0 20px 0;
  box-shadow: 0px 0px 0px 1px #022837;
  border-right: 1px solid #022837;
`;

export const SiteBarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SiteBarItem = styled.li``;

export const SiteBarSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const LogOutWrap = styled.div`
  width: 100%;

  position: absolute;
  top: 90.5%;
  padding: 10px 0;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const LogOutBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 0 15px 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background-color: #159895;
  border: none;
  cursor: pointer;
`;
