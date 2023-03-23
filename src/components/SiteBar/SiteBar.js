import React from "react";
import {
  SiteBarItem,
  SiteBarList,
  SiteBarSpan,
  SiteBarStyle,
  SiteLogoWrap,
} from "./SiteBarStyle";
import Logo from "../../assets/images/admin_logo.svg";
import { NavLink } from "react-router-dom";
import {
  Homebar,
  HomebarCaro,
  HomebarMan,
  HomebarManzil,
  HomebarMaxsulot,
  HomebarTex,
  HomebarToifa,
} from "../../assets/images/Icons";
import { useTranslation } from "react-i18next";

export const SiteBar = () => {
  const { t } = useTranslation();
  return (
    <SiteBarStyle>
      <SiteLogoWrap>
        <img src={Logo} alt="site logo" />
      </SiteLogoWrap>
      <SiteBarList>
        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/buyurtmalar"
          >
            <SiteBarSpan>
              <Homebar />
            </SiteBarSpan>
            {t("nav.order")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/customers"
          >
            <SiteBarSpan>
              <HomebarMan />
            </SiteBarSpan>
            {t("nav.customers")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/toifalar"
          >
            <SiteBarSpan>
              <HomebarToifa />
            </SiteBarSpan>
            {t("nav.category")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/mahsulotlar"
          >
            <SiteBarSpan>
              <HomebarMaxsulot />
            </SiteBarSpan>
            {t("nav.product")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/texnologiyalar"
          >
            <SiteBarSpan>
              <HomebarTex />
            </SiteBarSpan>
            {t("nav.texhnology")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/manzil"
          >
            <SiteBarSpan>
              <HomebarManzil />
            </SiteBarSpan>
            {t("nav.location")}
          </NavLink>
        </SiteBarItem>

        <SiteBarItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activ_link" : "site_link"
            }
            to="/carousel"
          >
            <SiteBarSpan>
              <HomebarCaro />
            </SiteBarSpan>
            {t("nav.carousel")}
          </NavLink>
        </SiteBarItem>
      </SiteBarList>
    </SiteBarStyle>
  );
};
