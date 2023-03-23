import React from "react";
import Man from "../../assets/images/me.jpg";
import { Search } from "../Search";
import { HeaderStyle, HeaderStyleMan, HeaderWrapBox } from "./HeaderStyle";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { SelectLang } from "../SelectLang";
import { SelectTheme } from "../../theme/SelectTheme";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const Header = ({ setThemeMode }) => {
  return (
    <HeaderStyle>
      <HeaderWrapBox>
        <Search />
        <SelectLang />
        <SelectTheme />
      </HeaderWrapBox>

      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Mansurbek" src={Man} />
        </StyledBadge>
        <HeaderStyleMan>Mansurbek</HeaderStyleMan>
      </Stack>
    </HeaderStyle>
  );
};
