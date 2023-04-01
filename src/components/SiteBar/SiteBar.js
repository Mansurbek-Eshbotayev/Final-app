import React from "react";
import {
  LogOutBtn,
  LogOutWrap,
  SiteBarItem,
  SiteBarList,
  SiteBarSpan,
  SiteBarStyle,
  SiteLogoWrap,
} from "./SiteBarStyle";
import Logo from "../../assets/images/admin_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "../../config/Navbar";

export const SiteBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <SiteBarStyle>
      <SiteLogoWrap>
        <img src={Logo} alt="site logo" />
      </SiteLogoWrap>
      <SiteBarList>
        {Navbar.map((item, index) => (
          <SiteBarItem key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activ_link" : "site_link"
              }
              to={item.to}
            >
              <SiteBarSpan>{item.icon}</SiteBarSpan>
              {t(`nav.${item.name}`)}
            </NavLink>
          </SiteBarItem>
        ))}
      </SiteBarList>
      <LogOutWrap>
        <LogOutBtn
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
            window.location.reload(false);
          }}
        >
          {t(`login.log`)}
        </LogOutBtn>
      </LogOutWrap>
    </SiteBarStyle>
  );
};
