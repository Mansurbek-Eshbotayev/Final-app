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
  CarouselLabelImg,
  CarouselLabelOneSpan,
  CarouselLabelTwoSpan,
  CarouselWrap,
  CarouselWrapInput,
  CarouselWrapLabel,
  CarouselWrapLabelTwo,
  CarouselWrapLabelTwoDiv,
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
} from "./CarouselStyle";


export const Carousel = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [secondModal, setSeconModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [event, setEvent] = useState(true);
  const [editValue, setEditValue] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [editId, setEditId] = useState('');
  const [labelImg, setLabelImg] = useState('');
  const categoryRaf = useRef();
  const getImgRaf = useRef();
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
  const hendlCarouselSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append("title", categoryRaf.current.value);
    formData.append("image", getImgRaf.current.files[0]);

    axios
      .post("http://localhost:1212/admin/carousel", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    window.location.reload(false);
  };

  // Get category
  const [newCotegory, setNewCotegory] = useState([]);
  // console.log(newCotegory);
  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/carousel", {
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
      .delete(`http://localhost:1212/admin/carousel/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      window.location.reload(false);
  };

  // Edit category

  const hendlCarouselEditSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append("title", categoryRaf.current.value);
    formData.append("image", getImgRaf.current.files[0]);

    axios
      .put(`http://localhost:1212/admin/carousel/${editId}`,formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

    
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
                    borderBottom: "none",
                    width: "5%",
                    textAlign:'center'
                  }}
                >
                  id
                </TableCell>
                <TableCell sx={{ color: "white", width: "35%", borderBottom: "none",textAlign:'center'  }} >
                  Title
                </TableCell>
                <TableCell sx={{ color: "white", width: "30%", borderBottom: "none",textAlign:'center'}} >
                  Image
                </TableCell>

                <TableCell sx={{ color: "white", width: "25%", borderBottom: "none",textAlign:'center'  }} >
                  Is Active
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
                  <TableRow sx={{ width: "100%" }} key={item.id}  >
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                     {item.id}
                    </TableCell>
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                    {item.title}
                    </TableCell>

                    <TableCell  key={item.id} sx={{textAlign:'center'}}>
                    {item.image}
                    </TableCell>

                    <TableCell sx={{textAlign:'center'}}>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch  defaultChecked={true} />}
                      sx={{textAlign:'center',display:'block',marginRight:'0px'}}
                    />
                  </FormGroup>
                  </TableCell>

                    <TableCell sx={{ paddingRight: "0px" }}>
                      <CotegoryDeletBtn onClick={() => {
                        setEditModal(true)
                        setEditId(item.id)
                        setEditValue(item.title)
                        setLabelImg(item.image)
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
          <CotegorForm onSubmit={hendlCarouselSubmit}>
            <DialogContent dividers>
              <CotegorText>Carousel uchun title</CotegorText>
              <TextField
                sx={{ marginBottom: "20px", width:'100%' }}
                type="text"
                name="title"
                inputRef={categoryRaf}
                label="Masalan: Kechalari sokin dam oling"
                required
              />

              <CarouselWrapLabel>
               <CarouselWrapInput type='file' name='image' placeholder="add img" ref={getImgRaf} required  />
              </CarouselWrapLabel>



              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginLeft: "20px",
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

        {/* delete modal */}

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
          <CotegorForm onSubmit={hendlCarouselEditSubmit}>
            <DialogContent dividers>
              <CotegorText>Carousel uchun yangi title</CotegorText>
              <TextField
                sx={{ marginBottom: "40px", width:'100%' }}
                type="text"
                name="title"
                inputRef={categoryRaf}
                defaultValue={editValue}
                label="Masalan: Kechalari sokin dam oling"
                required
              />

              <CarouselWrap>
              <CarouselWrapLabelTwoDiv>
                
               <CarouselLabelImg  src={`http://localhost:1212/carousel/${labelImg}`} alt='Matras' />
                
               <CarouselLabelTwoSpan>
                Old Photo
               </CarouselLabelTwoSpan>
              </CarouselWrapLabelTwoDiv>

              <CarouselWrapLabel>
              <CarouselWrapInput type='file' name='image' placeholder="add img" ref={getImgRaf} required  />
              <CarouselLabelOneSpan>
                Add New Photo
               </CarouselLabelOneSpan>
              </CarouselWrapLabel>
              </CarouselWrap>

              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginLeft: "20px",
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

      </Box>
    </CotegorWrapTable>
  );
};
