import { Switch } from "@mui/material";
import React from "react";

export const SwitchTable = ({ status }) => {
  return (
    <Switch
      sx={{ textAlign: "center" }}
      defaultChecked={status}
      color="primary"
      onChange={(defaultChecked) => {
        defaultChecked = !defaultChecked;
      }}
    />
  );
};
