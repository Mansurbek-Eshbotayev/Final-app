import {
  Box,
  DialogContent,
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
import { DeleteIcon } from "../../assets/images/Icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CostumBtn,
  DeleteButton,
  DeleteSecondForm,
  EditButton,
} from "./CustomerTableStyle";
import { Modal } from "../../components/Modal/Modal";

export const CustomerTable = () => {
  const token = localStorage.getItem("token");
  const [deleteNumModal, setDeleteNumModal] = useState(false);
  const [deleteNumId, setDeleteNumId] = useState("");
  // console.log(deleteNumId);

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

  const [costum, setCostum] = useState([]);
  // console.log(costum);

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/contact/1", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setCostum(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  // delete Number

  const HandelDeleteNumber = (evt) => {
    evt.preventDefault();
    axios
      .delete(`http://localhost:1212/admin/contact/${deleteNumId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setDeleteNumModal(false);
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead bgcolor="#01384D" sx={{ border: "1px solid #B3C3CA" }}>
            <TableRow>
              <TableCell sx={{ color: "white", width: "80px" }}>ID</TableCell>
              <TableCell
                sx={{ color: "white", textAlign: "center", width: "170px" }}
              >
                Sana
              </TableCell>
              <TableCell
                sx={{ color: "white", textAlign: "center", width: "210px" }}
              >
                Telefon Raqami
              </TableCell>
              <TableCell
                sx={{ color: "white", textAlign: "center", width: "130px" }}
              >
                Qayta aloqa
              </TableCell>
              <TableCell
                sx={{ color: "white", textAlign: "center" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: "1px solid #B3C3CA" }}>
            {costum.map((item) => (
              <TableRow sx={{ width: "100%" }} key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{item.time}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {item.number}
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
                <TableCell sx={{ textAlign: "end" }}>
                  <CostumBtn
                    onClick={() => {
                      setDeleteNumId(item.id);
                      setDeleteNumModal(true);
                    }}
                  >
                    <DeleteIcon />
                  </CostumBtn>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Number */}

      <Modal
        modal={deleteNumModal}
        setModal={setDeleteNumModal}
        title="Haqiqatdan ham o’chirmoqchimisiz?"
      >
        <DeleteSecondForm onSubmit={HandelDeleteNumber}>
          <DialogContent
            dividers
            sx={{ width: "124%", display: "flex", justifyContent: "flex-end" }}
          >
            <EditButton type="button" onClick={() => setDeleteNumModal(false)}>
              YO’Q
            </EditButton>

            <DeleteButton
              type="submit"
              onClick={() => {
                setDeleteNumModal(false);
              }}
            >
              ha
            </DeleteButton>
          </DialogContent>
        </DeleteSecondForm>
      </Modal>
    </Box>
  );
};
