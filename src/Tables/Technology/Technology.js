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
} from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DeleteIcon, EditIcon, LocationImg } from "../../assets/images/Icons";
import { GlobalDeletModal, GlobalLocationModal, GlobalTechnologyModal, } from "../../assets/styles/AppGlobalCss";
import { Modal } from "../../components/Modal/Modal";
import {
  CotegorAddBtn,
  CotegorForm,
  CotegorFormInner,
  CotegorSecondForm,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegorWrapTable,
  CotegoryBtn,
  CotegoryDeletBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  DeleteButton,
  EditButton,
  ProductDivFour,
  ProductDivOne,
  ProductDivTwo,
  ProductDivTwoInput,
  ProductDivTwoLabel,
  ProductDivTwoTextarea,
  ProductLabelImg,
  ProductOneWrapImg,
  ProductOneWrapImgInput,
  ProductOneWrapImgLabel,
  ProductWrapModal,
  TechImgInput,
  WrapperSwitch,
} from "./TechnologyStyle.js";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Technology = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [secondModal, setSeconModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [event, setEvent] = useState(true);
  const [deleteId, setDeleteId] = useState('');
  // for edit
  const [editId, setEditId] = useState('');
  const [getOldName, setGetOldName] = useState('');
  const [getBody, setGetBody] = useState('');
  const [getOldCost, setGetOldCost] = useState('');
  const [getOldVideo, setGetOldVideo] = useState('');


  // const categoryRaf = useRef();
  // const getImgRaf = useRef();


  const getLocalImg = useRef();
  const getProductName = useRef();
  const getProductDec = useRef();
  const getTextVideo = useRef();

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
  const hendlLocationSubmit = (evt) => {
    evt.preventDefault();


    // console.log(getProductName.current.value)
    // console.log(getLocalImg.current.value)
    // console.log(getTextVideo.current.value)
    // console.log(getProductDec.current.value)

    axios
      .post(`http://localhost:1212/admin/technology`, {
        "name": getProductName.current.value,
        "thumbnail": getTextVideo.current.value,
        "link": getLocalImg.current.value,
        "description": getProductDec.current.value,
        "isActive": true,
      }, 
      {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        console.log(data)
        if (data.status === 201) {
          setCategoryModal(false)
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

    
  };

  // Get category
  const [newProducts, setNewProducts] = useState([]);
  // console.log(newCotegory);
  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/technology", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data) {
        setNewProducts(data.data)
        console.log(data.data)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // delete Category

  const HandelDeleteButton = (evt) => {
    evt.preventDefault()
    axios
      .delete(`http://localhost:1212/admin/technology/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      window.location.reload(false);
  };

  // Edit category

  const hendlTexEdit = (evt) => {
    evt.preventDefault();


    // console.log(getProductName.current.value)
    // console.log(getLocalImg.current.value)
    // console.log(getTextVideo.current.value)
    // console.log(getProductDec.current.value)

    axios
      .put(`http://localhost:1212/admin/technology/${editId}`, {
        "name": getProductName.current.value,
        "thumbnail": getTextVideo.current.value,
        "link": getLocalImg.current.value,
        "description": getProductDec.current.value,
        "isActive": true,
      }, 
      {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        console.log(data)
        if (data.status === 200) {
          setEditModal(false)
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));

    
  };



    // slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
                <TableCell sx={{color: "white", borderBottom: "none",   width: "18%",   textAlign:'center'}}>
                Nomlari
                </TableCell>
                <TableCell sx={{ color: "white", width: "20%", borderBottom: "none",textAlign:'center'  }} >
                id
                </TableCell>
                <TableCell sx={{ color: "white", width: "15%", borderBottom: "none",textAlign:'center'}} >
                Video
                </TableCell>

                <TableCell sx={{ color: "white", width: "100%", borderBottom: "none",textAlign:'center'  }} >
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
              {newProducts.map((item) => (
                <>
                  <TableRow sx={{ width: "100%" }} key={item.id}  >
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                    {item.name}
                    </TableCell>
                    <TableCell  key={item.id} sx={{textAlign:'center',overflow:'hidden',textOverflow:'ellipsis',overflowX:'auto'}} >
                    {item.id}
                    </TableCell>
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                    {item.thumbnail}
                    </TableCell>
                    
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                   
                    </TableCell>
                   

                    <TableCell sx={{ paddingRight: "0px" }}>
                      <CotegoryDeletBtn onClick={() => {
                        setEditModal(true)
                        setEditId(item.id)
                        setGetOldName(item.name)
                        setGetOldCost(item.description)
                        setGetBody(item.thumbnail)
                        setGetOldVideo(item.link)
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

        <ProductWrapModal>
        <Modal sx={{ width: 515 }}  modal={categoryModal} setModal={setCategoryModal} title="Qo’shish"
        >

         <CotegorForm onSubmit={hendlLocationSubmit} >
            <DialogContent dividers sx={{ paddingBottom: '20px', overflowX:'hidden' }}>
            
            <CotegorFormInner>

              <ProductDivOne>
              <ProductDivTwoLabel for='product_name'>
                Nomi
              </ProductDivTwoLabel>
                <ProductDivTwoInput ref={getProductName} id="product_name" type={'text'} name='product_name' placeholder="masalan: Memoriform" required />

                <ProductDivTwoLabel for='product_name'>
                Matn
              </ProductDivTwoLabel>
                <ProductDivTwoInput ref={getProductDec} id="product_name" type={'text'} name='product_dec' placeholder="masalan: Memoriform" required />
              </ProductDivOne>
              
              <ProductDivOne>
              <ProductDivTwoLabel for='product_name'>
                  Rasm
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput ref={getLocalImg} id="product_img" type={'text'} name='product_name' placeholder="masalan: Video code" required />

                <ProductDivTwoLabel for='product_name'>
                  Video
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput ref={getTextVideo} id="product_video" type={'text'} name='product_name' placeholder="masalan: Video code" required />
              </ProductDivOne>
              
            </CotegorFormInner>

            </DialogContent>

            <DialogActions sx={{display:'flex', justifyContent:'space-between'}}>

              <WrapperSwitch>
              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginLeft: "0px",
                    }}
                  />
                </FormGroup>

                </CotegorWrapSwitch>
              </WrapperSwitch>

              <WrapperSwitch>
              <CotegorAddBtn
                  type="submit"
                >
                  Saqlash
                </CotegorAddBtn>
              </WrapperSwitch>

              </DialogActions>
           
          </CotegorForm>
        </Modal>
        <GlobalTechnologyModal />
        </ProductWrapModal>

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
    <GlobalDeletModal />
        </Modal>

        {/* Edit */}

        <ProductWrapModal>
        <Modal sx={{ width: 515 }}  modal={editModal} setModal={setEditModal} title="O'zgartirish"
        >

         <CotegorForm onSubmit={hendlTexEdit} >
            <DialogContent dividers sx={{ paddingBottom: '20px', overflowX:'hidden' }}>
            
            <CotegorFormInner>

              <ProductDivOne>
              <ProductDivTwoLabel for='product_name'>
                Nomi
              </ProductDivTwoLabel>
                <ProductDivTwoInput defaultValue={getOldName} ref={getProductName} id="product_name" type={'text'} name='product_name' placeholder="masalan: Memoriform" required />

                <ProductDivTwoLabel for='product_name'>
                Matn
              </ProductDivTwoLabel>
                <ProductDivTwoInput defaultValue={getOldCost} ref={getProductDec} id="product_name" type={'text'} name='product_dec' placeholder="masalan: Memoriform" required />
              </ProductDivOne>
              
              <ProductDivOne>
              <ProductDivTwoLabel for='product_name'>
                  Rasm
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput defaultValue={getBody} ref={getLocalImg} id="product_img" type={'text'} name='product_name' placeholder="masalan: Video code" required />

                <ProductDivTwoLabel for='product_name'>
                  Video
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput defaultValue={getOldVideo} ref={getTextVideo} id="product_video" type={'text'} name='product_name' placeholder="masalan: Video code" required />
              </ProductDivOne>
              
            </CotegorFormInner>

            </DialogContent>

            <DialogActions sx={{display:'flex', justifyContent:'space-between'}}>

              <WrapperSwitch>
              <CotegorWrapSwitch>
                <CotegorWrapSpan>Holat</CotegorWrapSpan>
                <FormGroup>
                  <FormControlLabel
                    onChange={() => setEvent(!event)}
                    control={<IOSSwitch defaultChecked={event} />}
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginLeft: "0px",
                    }}
                  />
                </FormGroup>

                </CotegorWrapSwitch>
              </WrapperSwitch>

              <WrapperSwitch>
              <CotegorAddBtn
                  type="submit"
                >
                  O'zgartirish
                </CotegorAddBtn>
              </WrapperSwitch>

              </DialogActions>
           
          </CotegorForm>
        </Modal>
        <GlobalTechnologyModal />
        </ProductWrapModal>

      </Box>
    </CotegorWrapTable>
  );
};
