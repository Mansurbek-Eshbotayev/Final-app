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
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { DeleteIcon, EditIcon, LocationImg } from "../../assets/images/Icons";
import { GlobalDeletModal, GlobalLocationModal, } from "../../assets/styles/AppGlobalCss";
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
  ProductOneWrapImg,
  ProductOneWrapImgInput,
  ProductOneWrapImgLabel,
  ProductWrapModal,
} from "./LocationStyle";

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Location = () => {
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


  // const categoryRaf = useRef();
  // const getImgRaf = useRef();


  const getLocalImg = useRef();
  const getLocalImgOne = useRef();
  const getProductImgTwo = useRef();
  const getProductName = useRef();
  const getProductLocation = useRef();
  const getTextArea = useRef();

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

    // console.log(getLocalImg.current.files[0])
    // console.log(getLocalImgOne.current.files[0])
    // console.log(getProductImgTwo.current.files[0])
    // console.log(getProductName.current.value)
    // console.log(getProductLocation.current.value)
    // console.log(getTextArea.current.value)

    const formData = new FormData();

    formData.append("location", getProductName.current.value);
    formData.append("geolocation", getProductLocation.current.value);
    formData.append("images", getLocalImg.current.files[0]);
    formData.append("destination", getTextArea.current.value);
    formData.append("isActive", true);

    axios
      .post(`http://localhost:1212/admin/address`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 201) {
          console.log(data)
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
      .get("http://localhost:1212/admin/address", {
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
      .delete(`http://localhost:1212/admin/address/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      window.location.reload(false);
  };

  // Edit category

  const hendlLocationEdit = (evt) => {
    evt.preventDefault();

    // console.log(getLocalImg.current.files[0])
    // console.log(getLocalImgOne.current.files[0])
    // console.log(getProductImgTwo.current.files[0])
    // console.log(getProductName.current.value)
    // console.log(getProductLocation.current.value)
    // console.log(getTextArea.current.value)



    const formData = new FormData();

    formData.append("location", getProductName.current.value);
    formData.append("geolocation", getProductLocation.current.value);
    formData.append("images", getLocalImg.current.files[0]);
    formData.append("destination", getTextArea.current.value);
    formData.append("isActive", true);
    // formData.append("warranty", getProductKafolot.current.value);
    // formData.append("size", getProductRazmer.current.value);
    // formData.append("capacity", getProductSigim.current.value);
    // formData.append("body", getTextArea.current.value);
    // formData.append("cost", getProductPrice.current.value);
    // formData.append("newCost", getProductAksya.current.value);
    // formData.append("discount", event);
    // formData.append("new", eventTwo);
    
   
    axios
      .put(`http://localhost:1212/admin/address/${editId}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
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
                <TableCell sx={{color: "white", borderBottom: "none",   width: "22%",   textAlign:'center'}}>
                Manzil
                </TableCell>
                <TableCell sx={{ color: "white", width: "22%", borderBottom: "none",textAlign:'center'  }} >
                Matn
                </TableCell>
                <TableCell sx={{ color: "white", width: "10%", borderBottom: "none",textAlign:'center'}} >
                Location
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
                    {item.location}
                    </TableCell>
                    <TableCell  key={item.id} sx={{textAlign:'center',overflow:'hidden',textOverflow:'ellipsis',overflowX:'auto'}} >
                    {item.geolacation}
                    </TableCell>
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                    <LocationImg />
                    </TableCell>
                    
                    <TableCell  key={item.id} sx={{textAlign:'center'}} >
                   
                    </TableCell>
                   

           

                    <TableCell sx={{ paddingRight: "0px" }}>
                      <CotegoryDeletBtn onClick={() => {
                        //  const img = item.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[0]
                        //  console.log(img);
                        setEditModal(true)
                        setEditId(item.id)
                        // setEditValue(item.category)
                        // setLabelImg(img)
                        setGetOldName(item.location)
                        setGetOldCost(item.geolacation)
                        // setGetOldweight(item.weight)
                        // setGetOldSize(item.size)
                        // setGetOldWarranty(item.warranty)
                        // setGetOldCapacity(item.capacity)
                        // setGetOldNew_cost(item.new_cost)
                        setGetBody(item.destination)
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
        <Modal sx={{ width: 815 }}  modal={categoryModal} setModal={setCategoryModal} title="Qo’shish"
        >

         <CotegorForm onSubmit={hendlLocationSubmit} >
            <DialogContent dividers sx={{ paddingBottom: '40px' }}>
            
            <CotegorFormInner>

              <ProductDivOne>
                <ProductOneWrapImg>
                  <Slider {...settings}>

                    <ProductOneWrapImgLabel>
                    <ProductOneWrapImgInput ref={getLocalImg} type='file' name="form_img" placeholder="edd img" required/>
                    </ProductOneWrapImgLabel>

                    {/* <ProductOneWrapImgLabel>
                      <ProductOneWrapImgInput ref={getLocalImgOne} type='file'placeholder="edd img" required/>
                    </ProductOneWrapImgLabel>

                    <ProductOneWrapImgLabel>
                      <ProductOneWrapImgInput ref={getProductImgTwo} type='file' placeholder="edd img" required/>
                    </ProductOneWrapImgLabel> */}
                  </Slider>
                  

                </ProductOneWrapImg>
              </ProductDivOne>

              <ProductDivTwo>
             

                  <ProductDivTwoLabel for='product_name'>
                  Manzil
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput ref={getProductName} id="product_name" type={'text'} name='product_name' placeholder="masalan: Toshkent" required />

                   <ProductDivTwoLabel for='product_name'>
                   Location
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput ref={getProductLocation} id="product_price" type={'text'} name='product_name' placeholder="masalan: Buxoro" required />

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

              </ProductDivTwo>

         
              <ProductDivFour>

                <ProductDivTwoLabel>
                   Matn
                   </ProductDivTwoLabel>

                   <ProductDivTwoTextarea ref={getTextArea}  type={'text'} name='product_textarea' placeholder="info..." required />


             <CotegorAddBtn
                type="submit"
              >
                Saqlash
              </CotegorAddBtn>

              </ProductDivFour>
             
            </CotegorFormInner>

            </DialogContent>

           
          </CotegorForm>
          
        </Modal>
        <GlobalLocationModal />
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
        <Modal sx={{ width: 815 }}  modal={editModal} setModal={setEditModal} title="Qo’shish"
        >

         <CotegorForm onSubmit={hendlLocationEdit} >
            <DialogContent dividers sx={{ paddingBottom: '40px' }}>
            
            <CotegorFormInner>

              <ProductDivOne>
                <ProductOneWrapImg>
                  <Slider {...settings}>

                    <ProductOneWrapImgLabel>
                    <ProductOneWrapImgInput ref={getLocalImg} type='file' name="form_img" placeholder="edd img" required/>
                    </ProductOneWrapImgLabel>

                    {/* <ProductOneWrapImgLabel>
                      <ProductOneWrapImgInput ref={getLocalImgOne} type='file' name="form_img" placeholder="edd img" required/>
                    </ProductOneWrapImgLabel> */}

                    {/* <ProductOneWrapImgLabel>
                      <ProductOneWrapImgInput ref={getProductImgTwo} type='file' name="threth_images" placeholder="edd img" required/>
                    </ProductOneWrapImgLabel> */}
                  </Slider>
                  

                </ProductOneWrapImg>
              </ProductDivOne>

              <ProductDivTwo>
             

                  <ProductDivTwoLabel for='product_name'>
                  Manzil
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput defaultValue={getOldName} ref={getProductName} id="product_name" type={'text'} name='product_name' placeholder="masalan: Toshkent" required />

                   <ProductDivTwoLabel for='product_name'>
                   Location
                   </ProductDivTwoLabel>
                   <ProductDivTwoInput defaultValue={getOldCost} ref={getProductLocation} id="product_price" type={'text'} name='product_name' placeholder="masalan: Buxoro" required />

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

              </ProductDivTwo>

         
              <ProductDivFour>

                <ProductDivTwoLabel>
                   Matn
                   </ProductDivTwoLabel>

                   <ProductDivTwoTextarea defaultValue={getBody} ref={getTextArea}  type={'text'} name='product_textarea' placeholder="info..." required />


             <CotegorAddBtn
                type="submit"
              >
                Saqlash
              </CotegorAddBtn>

              </ProductDivFour>
             
            </CotegorFormInner>

            </DialogContent>

           
          </CotegorForm>
          
        </Modal>
        <GlobalLocationModal />
        </ProductWrapModal>

      </Box>
    </CotegorWrapTable>
  );
};
