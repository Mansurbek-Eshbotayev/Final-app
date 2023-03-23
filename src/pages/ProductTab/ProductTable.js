import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon } from "../../assets/images/Icons";
import { Modal } from "../../components/Modal";
import { ModalForDelete } from "../../components/ModalForDelete";
import ReusableTable from "../../components/Table/ReUsefulTabele";
import { DialogContent, FormGroup, Switch } from "@mui/material";
import {
  editElementServices,
  getElementServices,
  postElementServices,
} from "../../services/ServicesGenerator";

import { GlobalModal } from "../../assets/styles/AppGlobalCss";
import {
  CarouselLabelfirstSpan,
  CostumBtn,
  CostumBtnWrap,
  CotegorAddBtn,
  CotegorForm,
  CotegorFormInner,
  CotegorWrapSpan,
  CotegorWrapSwitch,
  CotegorWrapSwitchTwo,
  CotegoryEditBtn,
  CotegoryPostBtn,
  CotegoryWrapBtn,
  ExitButton,
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
} from "./ProductTableStyle";

export const ProductTable = () => {
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [idForEditProduct, setIdForEditProduct] = useState(false);
  const [getElementBySelect, setGetElementBySelect] = useState([]);
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [deleteNumId, setDeleteNumId] = useState("");
  const getItemFrormSelect = useRef();
  const { t } = useTranslation();
  const [product, setProduct] = useState([]);

  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      weight: "",
      images: null,
      isActive: true,
      warranty: "",
      size: "",
      capacity: "",
      body: "",
      cost: "",
      newCost: "",
      discount: true,
      new: true,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", productName);
      formData.append("weight", values.weight);
      formData.append("images", values.images);
      formData.append("isActive", values.isActive);
      formData.append("warranty", values.warranty);
      formData.append("size", values.size);
      formData.append("capacity", values.capacity);
      formData.append("body", values.body);
      formData.append("cost", values.cost);
      formData.append("newCost", values.newCost);
      formData.append("discount", values.discount);
      formData.append("new", values.new);

      if (idForEditProduct) {
        editElementServices("products", idForEditProduct, formData);
      } else {
        postElementServices(`products/${productId}`, formData);
      }
      window.location.reload(false);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Product name is Required";
      }

      if (!values.cost) {
        errors.cost = "Cost is Required";
      }

      if (!values.weight) {
        errors.weight = "Weight is Required";
      }

      if (!values.size) {
        errors.size = "Size is Required";
      }

      if (!values.warranty) {
        errors.warranty = "Warranty is Required";
      }

      if (!values.capacity) {
        errors.capacity = "Capacity is Required";
      }

      if (!values.newCost) {
        errors.newCost = "NewCost is Required";
      }

      if (!values.body) {
        errors.body = "Body is Required";
      }

      return errors;
    },
  });

  const { getFieldProps } = formik;
  // get product

  useEffect(() => {
    getElementServices("/products", setProduct);
  }, []);

  // get element by select
  useEffect(() => {
    getElementServices("/categories", setGetElementBySelect);
  }, []);

  const columns = [
    {
      id: "name",
      label: t("product.proname"),
      width: "20%",
      align: "center",
    },
    {
      id: "category",
      label: t("product.categor"),
      width: "15%",
      align: "center",
    },
    {
      id: "cost",
      label: t("product.cost"),
      width: "19%",
      align: "center",
    },
    {
      id: "save",
      label: t("product.download"),
      width: "13%",
      align: "center",
    },
    {
      id: "size",
      label: t("product.size"),
      width: "17%",
      align: "center",
    },
    {
      id: "status",
      label: t("product.status"),
      width: "20%",
      align: "center",
    },
    { id: "edit", label: "", width: "" },
    { id: "delete", label: "", width: "" },
  ];

  const rows = product.map((item) => ({
    name: item.name,
    category: item.category,
    cost: `${item.cost} $`,
    save: `${item.weight} kg`,
    size: item.size,
    id: item.id,
    status: (
      <Switch
        sx={{ textAlign: "center" }}
        defaultChecked={true}
        color="primary"
        onChange={(defaultChecked) => {
          defaultChecked = !defaultChecked;
        }}
      />
    ),
    edit: (
      <CotegoryEditBtn
        onClick={() => {
          setIsOpenProductModal(true);
          setIdForEditProduct(item.id);
        }}
      >
        <EditIcon />
      </CotegoryEditBtn>
    ),
    delete: (
      <CostumBtnWrap>
        <CostumBtn
          sx={{ textAlign: "end" }}
          onClick={() => {
            setDeleteNumId(item.id);
            setisOpenDeleteModal(true);
          }}
        >
          <DeleteIcon />
        </CostumBtn>
      </CostumBtnWrap>
    ),
  }));
  return (
    <>
      <ReusableTable columns={columns} rows={rows} />

      <CotegoryWrapBtn>
        <CotegoryPostBtn
          onClick={() => {
            setIsOpenProductModal(true);
            setIdForEditProduct("");
          }}
        >
          {t("again.add")}
        </CotegoryPostBtn>
      </CotegoryWrapBtn>

      {/* Modal for delete */}
      <ModalForDelete
        isOpen={isOpenDeleteModal}
        setIsOpen={setisOpenDeleteModal}
        whatDelete={"products"}
        deleteId={deleteNumId}
      />

      {/* Modal for Add and Edit carousel */}
      <ProductWrapModal>
        <Modal
          sx={{ width: 1110 }}
          modal={isOpenProductModal}
          setModal={setIsOpenProductModal}
          title={!idForEditProduct ? t("again.add") : t("again.edit")}
        >
          <ExitButton onClick={() => setIsOpenProductModal(false)} />
          <CotegorForm onSubmit={formik.handleSubmit}>
            <DialogContent dividers>
              <CotegorFormInner>
                <ProductDivOne>
                  <ProductOneWrapImg>
                    <ProductOneWrapImgLabel>
                      <ProductOneWrapImgInput
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          formik.setFieldValue(
                            "images",
                            e.currentTarget.files[0]
                          );
                        }}
                        placeholder="edd img"
                        required
                      />
                      <CarouselLabelfirstSpan>
                        {t("product.photo")}
                      </CarouselLabelfirstSpan>
                    </ProductOneWrapImgLabel>
                  </ProductOneWrapImg>

                  {/* {idForEditProduct ? (
                    <CarouselWrapLabelTwoDiv>
                      <CarouselLabelImg
                        src={`http://localhost:1212/carousel/${labelImg}`}
                        alt="Matras"
                      />
                      <CarouselLabelTwoSpan>
                        {t("product.old")}
                      </CarouselLabelTwoSpan>
                    </CarouselWrapLabelTwoDiv>
                  ) : (
                    ""
                  )} */}
                </ProductDivOne>

                <ProductDivTwo>
                  <ProductDivTwoLabel>
                    {t("product.categor")}
                  </ProductDivTwoLabel>
                  <ProductSelect
                    defaultValue={""}
                    ref={getItemFrormSelect}
                    onChange={() => {
                      let findOption = getElementBySelect.find((item) => {
                        return item.id == getItemFrormSelect.current.value;
                      });
                      setProductId(findOption.id);
                      setProductName(findOption.category);
                    }}
                  >
                    <ProductSelectOption disabled value={""}>
                      {t("product.select")}
                    </ProductSelectOption>
                    {getElementBySelect.map((item) => (
                      <ProductSelectOption value={item.id} key={item.id}>
                        {item.category}
                      </ProductSelectOption>
                    ))}
                  </ProductSelect>

                  <ProductDivTwoLabel htmlFor="name">
                    {t("product.proname")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    id="name"
                    type={"text"}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={
                      formik.touched.name && formik.errors.name
                        ? `${formik.errors.name}`
                        : "masalan: Lux Soft Memory"
                    }
                    required
                  />

                  <ProductDivTwoLabel htmlFor="cost">
                    {t("product.cost")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.cost}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="cost"
                    type={"number"}
                    name="cost"
                    placeholder={
                      formik.touched.cost && formik.errors.cost
                        ? `${formik.errors.cost}`
                        : "masalan: 20 000"
                    }
                    required
                  />

                  <ProductDivTwoLabel htmlFor="weight">
                    {t("product.download")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="weight"
                    type={"text"}
                    name="weight"
                    placeholder={
                      formik.touched.weight && formik.errors.weight
                        ? `${formik.errors.weight}`
                        : "masalan: 200 kg"
                    }
                    required
                  />
                </ProductDivTwo>

                <ProductDivThre>
                  <ProductDivTwoLabel htmlFor="size">
                    {t("product.size")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.size}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type={"text"}
                    id="size"
                    name="size"
                    placeholder={
                      formik.touched.size && formik.errors.size
                        ? `${formik.errors.size}`
                        : "masalan: 200 x 140 x 40"
                    }
                    required
                  />

                  <ProductDivTwoLabel htmlFor="warranty">
                    {t("product.warranty")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.warranty}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="warranty"
                    type={"text"}
                    name="warranty"
                    placeholder={
                      formik.touched.warranty && formik.errors.warranty
                        ? `${formik.errors.warranty}`
                        : "masalan: 1 yil"
                    }
                    required
                  />

                  <ProductDivTwoLabel htmlFor="capacity">
                    {t("product.capacity")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="capacity"
                    type={"text"}
                    name="capacity"
                    placeholder={
                      formik.touched.capacity && formik.errors.capacity
                        ? `${formik.errors.capacity}`
                        : "masalan: 2"
                    }
                    required
                  />

                  <ProductDivTwoLabel htmlFor="newCost">
                    {t("product.prise")}
                  </ProductDivTwoLabel>
                  <ProductDivTwoInput
                    value={formik.values.newCost}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type={"number"}
                    name="newCost"
                    id="newCost"
                    placeholder={
                      formik.touched.newCost && formik.errors.newCost
                        ? `${formik.errors.newCost}`
                        : "masalan: 1 200 000"
                    }
                    required
                  />
                </ProductDivThre>

                <ProductDivFour>
                  <ProductDivTwoLabel htmlFor="body">
                    {t("product.information")}
                  </ProductDivTwoLabel>

                  <ProductDivTwoTextarea
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type={"text"}
                    id="body"
                    name="body"
                    placeholder={
                      formik.touched.body && formik.errors.body
                        ? `${formik.errors.body}`
                        : "info..."
                    }
                    required
                  />

                  <CotegorWrapSwitch>
                    <CotegorWrapSpan> {t("product.discount")}</CotegorWrapSpan>
                    <FormGroup>
                      <Switch
                        defaultChecked={true}
                        checked={formik.values.discount}
                        onChange={formik.handleChange}
                        {...getFieldProps("discount")}
                        color="primary"
                      />
                    </FormGroup>
                  </CotegorWrapSwitch>

                  <CotegorWrapSwitchTwo>
                    <CotegorWrapSpan>{t("product.active")}</CotegorWrapSpan>
                    <FormGroup>
                      <Switch
                        defaultChecked={true}
                        checked={formik.values.isActive}
                        onChange={formik.handleChange}
                        {...getFieldProps("isActive")}
                        color="primary"
                      />
                    </FormGroup>
                  </CotegorWrapSwitchTwo>

                  <CotegorAddBtn type="submit">
                    {!idForEditProduct ? t("again.add") : t("again.edit")}
                  </CotegorAddBtn>
                </ProductDivFour>
              </CotegorFormInner>
            </DialogContent>
          </CotegorForm>
        </Modal>
        <GlobalModal />
      </ProductWrapModal>
    </>
  );
};

export default ProductTable;
