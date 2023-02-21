import {
  Box,
  FormControlLabel,
  FormGroup,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const OrderTable = () => {
  const token = localStorage.getItem("token");

  // Mui
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  // end Mui

  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/orders/1", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setOrder(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box>
        <TableContainer>
          <Table>
            <TableHead bgcolor="#01384D" sx={{ border: "1px solid #B3C3CA" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>ID</TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Ismi
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Telefon Raqami
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  mahsulot nomlari
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  miqdor
                </TableCell>
                <TableCell sx={{ color: "white", textAlign: "center" }}>
                  Qayta aloqa
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ border: "1px solid #B3C3CA" }}>
              {order.map((item) => (
                <TableRow sx={{ width: "100%" }} key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.number}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.product_name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.count}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={<IOSSwitch defaultChecked={false} />}
                        sx={{
                          textAlign: "center",
                          display: "block",
                          marginRight: "0px",
                        }}
                      />
                    </FormGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};
