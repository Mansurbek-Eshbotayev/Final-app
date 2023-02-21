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
import {
  GlobalDeletModal,
  GlobalModal,
} from "../../assets/styles/AppGlobalCss";
import { Modal } from "../../components/Modal/Modal";
import {
  CarouselLabelfirstSpan,
  CarouselLabelImg,
  CarouselLabelTwoSpan,
  CarouselWrap,
  CarouselWrapLabelTwoDiv,
  CotegorAddBtn,
  CotegorForm,
  CotegorFormInner,
  CotegorSecondForm,
  CotegorText,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegorWrapSwitchTwo,
  CotegorWrapTable,
  CotegoryBtn,
  CotegoryDeletBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  DeleteButton,
  EditButton,
  ProductDivFour,
  ProductDivOne,
  ProductDivThre,
  ProductDivTwo,
  ProductDivTwoInput,
  ProductDivTwoLabel,
  ProductDivTwoTextarea,
  ProductOneWrapImg,
  ProductOneWrapImgInput,
  ProductOneWrapImgLabel,
  ProductSelect,
  ProductSelectOption,
  ProductWrapModal,
} from "./ProductStyle.js";

export const Product = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [secondModal, setSeconModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [event, setEvent] = useState(true);
  const [eventTwo, setEventTwo] = useState(true);
  const [editValue, setEditValue] = useState("");
  const [deleteId, setDeleteId] = useState("");
  // for edit
  const [editId, setEditId] = useState("");
  const [labelImg, setLabelImg] = useState("");
  const [getOldName, setGetOldName] = useState("");
  const [getBody, setGetBody] = useState("");
  const [getOldCapacity, setGetOldCapacity] = useState("");
  const [getOldCost, setGetOldCost] = useState("");
  const [getOldNew_cost, setGetOldNew_cost] = useState("");
  const [getOldSize, setGetOldSize] = useState("");
  const [getOldWarranty, setGetOldWarranty] = useState("");
  const [getOldweight, setGetOldweight] = useState("");

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  // const categoryRaf = useRef();
  // const getImgRaf = useRef();

  const getProductImg = useRef();
  const getProductSelect = useRef();
  const getProductName = useRef();
  const getProductPrice = useRef();
  const getProductHight = useRef();

  const getProductRazmer = useRef();
  const getProductKafolot = useRef();
  const getProductSigim = useRef();
  const getProductAksya = useRef();

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
  const hendlProductSubmit = (evt) => {
    evt.preventDefault();

    // console.log(getProductImg.current.files[0])
    // console.log(getProductSelect.current.value)
    // console.log(getProductName.current.value)
    // console.log(getProductPrice.current.value)
    // console.log(getProductHight.current.value)
    // console.log(getProductRazmer.current.value)
    // console.log(getProductKafolot.current.value)
    // console.log(getProductSigim.current.value)
    // console.log(getProductAksya.current.value)
    // console.log(getTextArea.current.value)
    // console.log(event)
    // console.log(eventTwo)

    // let findOption = getCategory.find(item => {
    //   return item.id == getProductSelect.current.value
    // })

    // console.log(findOption);

    const formData = new FormData();

    formData.append("name", getProductName.current.value);
    formData.append("category", productName);
    formData.append("weight", getProductHight.current.value);
    formData.append("images", getProductImg.current.files[0]);
    formData.append("isActive", true);
    formData.append("warranty", getProductKafolot.current.value);
    formData.append("size", getProductRazmer.current.value);
    formData.append("capacity", getProductSigim.current.value);
    formData.append("body", getTextArea.current.value);
    formData.append("cost", getProductPrice.current.value);
    formData.append("newCost", getProductAksya.current.value);
    formData.append("discount", event);
    formData.append("new", eventTwo);

    axios
      .post(`http://localhost:1212/admin/products/${productId}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 201) {
          console.log(data);
          setCategoryModal(false);
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
      .get("http://localhost:1212/admin/products", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data) {
          setNewProducts(data.data.products);
          console.log(data.data.products);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // delete Category

  const HandelDeleteButton = (evt) => {
    evt.preventDefault();
    axios
      .delete(`http://localhost:1212/admin/products/${deleteId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    window.location.reload(false);
  };

  // Edit category

  const hendlProductEdit = (evt) => {
    evt.preventDefault();

    // console.log(getProductImg.current.files[0])
    // console.log(getProductSelect.current.value)
    // console.log(getProductName.current.value)
    // console.log(getProductPrice.current.value)
    // console.log(getProductHight.current.value)
    // console.log(getProductRazmer.current.value)
    // console.log(getProductKafolot.current.value)
    // console.log(getProductSigim.current.value)
    // console.log(getProductAksya.current.value)
    // console.log(getTextArea.current.value)
    // console.log(event)
    // console.log(eventTwo)

    // let findOption = getCategory.find(item => {
    //   return item.id == getProductSelect.current.value
    // })

    // console.log(productName);

    const formData = new FormData();

    formData.append("name", getProductName.current.value);
    formData.append("category", productName);
    formData.append("weight", getProductHight.current.value);
    formData.append("images", getProductImg.current.files[0]);
    formData.append("isActive", true);
    formData.append("warranty", getProductKafolot.current.value);
    formData.append("size", getProductRazmer.current.value);
    formData.append("capacity", getProductSigim.current.value);
    formData.append("body", getTextArea.current.value);
    formData.append("cost", getProductPrice.current.value);
    formData.append("newCost", getProductAksya.current.value);
    formData.append("discount", event);
    formData.append("new", eventTwo);

    axios
      .put(`http://localhost:1212/admin/products/${editId}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        if (data.status === 202) {
          console.log(data);
          setEditModal(false);
          window.location.reload(false);
        }
      })
      .catch((err) => console.log(err));
  };

  // get select
  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/categories", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setGetCategory(data.data))
      .catch((err) => console.log(err));
  }, []);

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
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  Mahsulot nomlari
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    width: "15%",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  Toifalar
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    width: "19%",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  Narxi
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    width: "13%",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  Yuklama
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    width: "17%",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
                  Razmeri
                </TableCell>

                <TableCell
                  sx={{
                    color: "white",
                    width: "20%",
                    borderBottom: "none",
                    textAlign: "center",
                  }}
                >
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
              {newProducts.map((item) => (
                <>
                  <TableRow sx={{ width: "100%" }} key={item.id}>
                    <TableCell key={item.id} sx={{ textAlign: "center" }}>
                      {item.name}
                    </TableCell>
                    <TableCell key={item.id} sx={{ textAlign: "center" }}>
                      {item.category}
                    </TableCell>
                    <TableCell key={item.id} sx={{ textAlign: "center" }}>
                      {item.cost} so'm
                    </TableCell>
                    <TableCell key={item.id} sx={{ textAlign: "center" }}>
                      {item.weight} kg
                    </TableCell>

                    <TableCell key={item.id} sx={{ textAlign: "center" }}>
                      {item.size}
                    </TableCell>

                    <TableCell sx={{ textAlign: "center" }}>
                      <FormGroup>
                        <FormControlLabel
                          control={<IOSSwitch defaultChecked={true} />}
                          sx={{
                            textAlign: "center",
                            display: "block",
                            marginRight: "0px",
                          }}
                        />
                      </FormGroup>
                    </TableCell>

                    <TableCell sx={{ paddingRight: "0px" }}>
                      <CotegoryDeletBtn
                        onClick={() => {
                          const img = item.product_images
                            .replaceAll("[", "")
                            .replaceAll("]", "")
                            .replaceAll('"', "")
                            .split(",")[0];
                          //  console.log(img);
                          setEditModal(true);
                          setEditId(item.id);
                          setEditValue(item.category);
                          setLabelImg(img);
                          setGetOldName(item.name);
                          setGetOldCost(item.cost);
                          setGetOldweight(item.weight);
                          setGetOldSize(item.size);
                          setGetOldWarranty(item.warranty);
                          setGetOldCapacity(item.capacity);
                          setGetOldNew_cost(item.new_cost);
                          setGetBody(item.body);
                        }}
                      >
                        <EditIcon />
                      </CotegoryDeletBtn>
                    </TableCell>

                    <TableCell sx={{ paddingRight: "30px" }}>
                      <CotegoryBtn
                        onClick={() => {
                          setSeconModal(true);
                          setDeleteId(item.id);
                        }}
                      >
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
          <Modal
            sx={{ width: 1110 }}
            modal={categoryModal}
            setModal={setCategoryModal}
            title="Qo’shish"
          >
            <CotegorForm onSubmit={hendlProductSubmit}>
              <DialogContent dividers>
                <CotegorFormInner>
                  <ProductDivOne>
                    <ProductOneWrapImg>
                      <ProductOneWrapImgLabel>
                        <ProductOneWrapImgInput
                          ref={getProductImg}
                          type="file"
                          name="image_one"
                          placeholder="edd img"
                          required
                        />
                      </ProductOneWrapImgLabel>
                    </ProductOneWrapImg>
                  </ProductDivOne>

                  <ProductDivTwo>
                    <ProductDivTwoLabel>Toifalar</ProductDivTwoLabel>
                    <ProductSelect
                      defaultValue={""}
                      ref={getProductSelect}
                      onChange={() => {
                        let findOption = getCategory.find((item) => {
                          return item.id == getProductSelect.current.value;
                        });
                        setProductId(findOption.id);
                        setProductName(findOption.category);
                      }}
                    >
                      <ProductSelectOption disabled value={""}>
                        Kategorya tanlang
                      </ProductSelectOption>
                      {getCategory.map((item) => (
                        <ProductSelectOption value={item.id} key={item.id}>
                          {item.category}
                        </ProductSelectOption>
                      ))}
                    </ProductSelect>

                    <ProductDivTwoLabel for="product_name">
                      Tovar nomi
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductName}
                      id="product_name"
                      type={"text"}
                      name="product_name"
                      placeholder="masalan: Lux Soft Memory"
                      required
                    />

                    <ProductDivTwoLabel for="product_name">
                      Narxi
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductPrice}
                      id="product_price"
                      type={"number"}
                      name="product_name"
                      placeholder="masalan: 20 000"
                      required
                    />

                    <ProductDivTwoLabel for="product_downd">
                      Yuklama
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductHight}
                      id="product_name"
                      type={"text"}
                      name="product_name"
                      placeholder="masalan: 200 kg"
                      required
                    />
                  </ProductDivTwo>

                  <ProductDivThre>
                    <ProductDivTwoLabel>Razmeri</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductRazmer}
                      type={"text"}
                      name="product_size"
                      placeholder="masalan: 200 x 140 x 40"
                      required
                    />

                    <ProductDivTwoLabel>Kafolat</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductKafolot}
                      type={"text"}
                      name="product_garant"
                      placeholder="masalan: 1 yil"
                      required
                    />

                    <ProductDivTwoLabel>Sig’m</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductSigim}
                      type={"text"}
                      name="product_area"
                      placeholder="masalan: 2"
                      required
                    />

                    <ProductDivTwoLabel>Aksiya Narxi</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductAksya}
                      type={"number"}
                      name="product_newprise"
                      placeholder="masalan: 1 200 000"
                      required
                    />
                  </ProductDivThre>

                  <ProductDivFour>
                    <ProductDivTwoLabel>Ma’lumot</ProductDivTwoLabel>

                    <ProductDivTwoTextarea
                      ref={getTextArea}
                      type={"text"}
                      name="product_textarea"
                      placeholder="info..."
                      required
                    />

                    <CotegorWrapSwitch>
                      <CotegorWrapSpan>Navinla</CotegorWrapSpan>
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

                    <CotegorWrapSwitchTwo>
                      <CotegorWrapSpan>Active</CotegorWrapSpan>
                      <FormGroup>
                        <FormControlLabel
                          onChange={() => setEventTwo(!eventTwo)}
                          control={<IOSSwitch defaultChecked={event} />}
                          sx={{
                            textAlign: "center",
                            display: "block",
                            marginLeft: "0px",
                          }}
                        />
                      </FormGroup>
                    </CotegorWrapSwitchTwo>

                    <CotegorAddBtn type="submit">Qo’shish</CotegorAddBtn>
                  </ProductDivFour>
                </CotegorFormInner>
              </DialogContent>
            </CotegorForm>
          </Modal>
          <GlobalModal />
        </ProductWrapModal>

        {/* delete modal */}

        <Modal
          modal={secondModal}
          setModal={setSeconModal}
          title="Haqiqatdan ham o’chirmoqchimisiz?"
        >
          <CotegorSecondForm onSubmit={HandelDeleteButton}>
            <DialogContent
              dividers
              sx={{
                width: "124%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <EditButton type="button" onClick={() => setSeconModal(false)}>
                YO’Q
              </EditButton>

              <DeleteButton
                type="submit"
                onClick={() => {
                  setSeconModal(false);
                }}
              >
                ha
              </DeleteButton>
            </DialogContent>
          </CotegorSecondForm>
          <GlobalDeletModal />
        </Modal>

        {/* Edit */}

        <ProductWrapModal>
          <Modal
            sx={{ width: 1110 }}
            modal={editModal}
            setModal={setEditModal}
            title="O'zgartirish"
          >
            <CotegorForm onSubmit={hendlProductEdit}>
              <DialogContent dividers>
                <CotegorFormInner>
                  <ProductDivOne>
                    <ProductOneWrapImg>
                      <ProductOneWrapImgLabel>
                        <ProductOneWrapImgInput
                          ref={getProductImg}
                          type="file"
                          name="image_one"
                          placeholder="edd img"
                          required
                        />
                        <CarouselLabelfirstSpan>
                          Add New Photo
                        </CarouselLabelfirstSpan>
                      </ProductOneWrapImgLabel>
                    </ProductOneWrapImg>

                    <CarouselWrapLabelTwoDiv>
                      <CarouselLabelImg
                        src={`http://localhost:1212/carousel/${labelImg}`}
                        alt="Matras"
                      />

                      <CarouselLabelTwoSpan>Old Photo</CarouselLabelTwoSpan>
                    </CarouselWrapLabelTwoDiv>
                  </ProductDivOne>

                  <ProductDivTwo>
                    <ProductDivTwoLabel>Toifalar</ProductDivTwoLabel>
                    <ProductSelect
                      defaultValue={""}
                      ref={getProductSelect}
                      onChange={() => {
                        let findOption = getCategory.find((item) => {
                          return item.id == getProductSelect.current.value;
                        });
                        setProductId(findOption.id);
                        setProductName(findOption.category);
                      }}
                    >
                      <ProductSelectOption disabled value={""}>
                        Kategorya tanlang
                      </ProductSelectOption>
                      {getCategory.map((item) => (
                        <ProductSelectOption value={item.id} key={item.id}>
                          {item.category}
                        </ProductSelectOption>
                      ))}
                    </ProductSelect>

                    <ProductDivTwoLabel for="product_name">
                      Tovar nomi
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductName}
                      defaultValue={getOldName}
                      id="product_name"
                      type={"text"}
                      name="product_name"
                      placeholder="masalan: Lux Soft Memory"
                      required
                    />

                    <ProductDivTwoLabel for="product_name">
                      Narxi
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductPrice}
                      defaultValue={getOldCost}
                      id="product_price"
                      type={"number"}
                      name="product_name"
                      placeholder="masalan: 20 000"
                      required
                    />

                    <ProductDivTwoLabel for="product_downd">
                      Yuklama
                    </ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductHight}
                      defaultValue={getOldweight}
                      id="product_name"
                      type={"text"}
                      name="product_name"
                      placeholder="masalan: 200 kg"
                      required
                    />
                  </ProductDivTwo>

                  <ProductDivThre>
                    <ProductDivTwoLabel>Razmeri</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductRazmer}
                      defaultValue={getOldSize}
                      type={"text"}
                      name="product_size"
                      placeholder="masalan: 200 x 140 x 40"
                      required
                    />

                    <ProductDivTwoLabel>Kafolat</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductKafolot}
                      defaultValue={getOldWarranty}
                      type={"text"}
                      name="product_garant"
                      placeholder="masalan: 1 yil"
                      required
                    />

                    <ProductDivTwoLabel>Sig’m</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductSigim}
                      defaultValue={getOldCapacity}
                      type={"text"}
                      name="product_area"
                      placeholder="masalan: 2"
                      required
                    />

                    <ProductDivTwoLabel>Aksiya Narxi</ProductDivTwoLabel>
                    <ProductDivTwoInput
                      ref={getProductAksya}
                      defaultValue={getOldNew_cost}
                      type={"number"}
                      name="product_newprise"
                      placeholder="masalan: 1 200 000"
                      required
                    />
                  </ProductDivThre>

                  <ProductDivFour>
                    <ProductDivTwoLabel>Ma’lumot</ProductDivTwoLabel>

                    <ProductDivTwoTextarea
                      ref={getTextArea}
                      defaultValue={getBody}
                      type={"text"}
                      name="product_textarea"
                      placeholder="info..."
                      required
                    />

                    <CotegorWrapSwitch>
                      <CotegorWrapSpan>Navinla</CotegorWrapSpan>
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

                    <CotegorWrapSwitchTwo>
                      <CotegorWrapSpan>Active</CotegorWrapSpan>
                      <FormGroup>
                        <FormControlLabel
                          onChange={() => setEventTwo(!eventTwo)}
                          control={<IOSSwitch defaultChecked={event} />}
                          sx={{
                            textAlign: "center",
                            display: "block",
                            marginLeft: "0px",
                          }}
                        />
                      </FormGroup>
                    </CotegorWrapSwitchTwo>

                    <CotegorAddBtn type="submit">O'zgartirish</CotegorAddBtn>
                  </ProductDivFour>
                </CotegorFormInner>
              </DialogContent>
            </CotegorForm>
          </Modal>
          <GlobalModal />
        </ProductWrapModal>
      </Box>
    </CotegorWrapTable>
  );
};
