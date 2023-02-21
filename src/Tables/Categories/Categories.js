import {
  Box,
  DialogActions,
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
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DeleteIcon, EditIcon } from "../../assets/images/Icons";
import { Modal } from "../../components/Modal/Modal";
import {
  CotegorAddBtn,
  CotegoreEditForm,
  CotegorForm,
  CotegorSecondForm,
  CotegorText,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegorWrapTable,
  CotegoryBtn,
  CotegoryDeletBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  DeleteButton,
  EditButton,
} from "./CategoriesStyle";


export const Categories = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [secondModal, setSeconModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [event, setEvent] = useState(true);
  const [editValue, setEditValue] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [editId, setEditId] = useState('');
  const categoryRaf = useRef();
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

  //  Post category
  const hendlSubmit = (evt) => {
    evt.preventDefault();
    console.log(categoryRaf.current.value);
    // console.log(event);

    const dataType = {
      category: categoryRaf.current.value,
      isActive: event,
    };

    axios
      .post("http://localhost:1212/admin/categories", dataType, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    window.location.reload(false);
  };

  const [newCotegory, setNewCotegory] = useState([]);

// Get category
  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/categories", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setNewCotegory(data.data))
      .catch((err) => console.log(err));
  }, []);

  // delete Category

  const HandelDeleteButton = (evt) => {
    evt.preventDefault()
    axios
      .delete(`http://localhost:1212/admin/categories/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          setSeconModal(false)
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  // Edit category

  const hendlEditSubmit = (evt) => {
    evt.preventDefault();

    const dataType = {
      category: categoryRaf.current.value,
      isActive: event,
    };

    axios
      .put(`http://localhost:1212/admin/categories/${editId}`,dataType,{
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    window.location.reload(false);
  };

  return (
    <CotegorWrapTable>
      <Box sx={{ borderBottom: "1px solid #B3C3CA", marginBottom: "0" }}>
        <TableContainer>
          <Table>
            <TableHead
              bgcolor="#01384D"
              sx={{ border: "1px solid #B3C3CA", width: "100%" }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    width: "100%",
                    paddingLeft: "40px",
                    borderBottom: "none",
                  }}
                >
                  Toifalar
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                border: "1px solid #B3C3CA",
                width: "100%",
                overflowY: "scroll",
              }}
            >
              {newCotegory.map((item) => (
                <>
                  <TableRow sx={{ width: "100%" }} key={item.id} >
                    <TableCell sx={{ paddingLeft: "40px" }} key={item.id}>
                      {item.category}
                    </TableCell>

                    <TableCell sx={{ paddingRight: "0px" }}>
                      <CotegoryDeletBtn onClick={() => {
                        setEditModal(true)
                        setEditId(item.id)
                        setEditValue(item.category)
                      }}>
                        <EditIcon />
                      </CotegoryDeletBtn>
                    </TableCell>

                    <TableCell sx={{ paddingRight: "30px" }}>
                      <CotegoryBtn onClick={() => {
                        setSeconModal(true)
                        setDeleteId(item.id)
                      }}>
                        <DeleteIcon />
                      </CotegoryBtn>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
          <CotegoryWrapBtn>
            <CotegoryPostBtn onClick={() => setCategoryModal(true)}>
              Qo’shish
            </CotegoryPostBtn>
          </CotegoryWrapBtn>
        </TableContainer>

        {/* qoshish */}

        <Modal
          modal={categoryModal}
          setModal={setCategoryModal}
          title="Qo’shish"
        >
          <CotegorForm onSubmit={hendlSubmit}>
            <DialogContent dividers>
              <CotegorText>Kategoriya nomi</CotegorText>
              <TextField
                sx={{ marginBottom: "20px" }}
                type="text"
                name="category_name"
                inputRef={categoryRaf}
                label="masalan: Model B"
                required
              />
              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginRight: "0px",
                    }}
                  />
                </FormGroup>
              </CotegorWrapSwitch>
            </DialogContent>
            <DialogActions>
              <CotegorAddBtn
                type="submit"
                onClick={() => setCategoryModal(false)}
              >
                Qo’shish
              </CotegorAddBtn>
            </DialogActions>
          </CotegorForm>
        </Modal>

        {/* sexond modal */}

        <Modal  modal={secondModal} setModal={setSeconModal} title="Haqiqatdan ham o’chirmoqchimisiz?" >
      <CotegorSecondForm onSubmit={HandelDeleteButton} >
       <DialogContent dividers sx={{width:'124%', display:'flex' , justifyContent:'flex-end'}} >

        <EditButton type='button' onClick={() => setSeconModal(false)} >
          YO’Q
        </EditButton>

    <DeleteButton type='submit' onClick={() => {
      setSeconModal(false)
    }} >
    ha
    </DeleteButton>

    </DialogContent>
    
    </CotegorSecondForm>
        </Modal>

        {/* Edit */}

        <Modal
          modal={editModal}
          setModal={setEditModal}
          title="O'zgartirish"
        >
          <CotegoreEditForm onSubmit={hendlEditSubmit}>
            <DialogContent dividers>
              <CotegorText>Kategoriya nomi</CotegorText>
              <TextField
                sx={{ marginBottom: "20px" }}
                type="text"
                name="category_name"
                inputRef={categoryRaf}
                label="masalan: Model B"
                defaultValue={editValue}
                required
              />
              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginRight: "0px",
                    }}
                  />
                </FormGroup>
              </CotegorWrapSwitch>
            </DialogContent>
            <DialogActions>
              <CotegorAddBtn
                type="submit"
                onClick={() => setEditModal(false)}
              >
                O'zgartirish
              </CotegorAddBtn>
            </DialogActions>
          </CotegoreEditForm>
        </Modal>




      </Box>
    </CotegorWrapTable>
  );
};
