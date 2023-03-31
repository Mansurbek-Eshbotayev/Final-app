import { DialogContent } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SwitchTable } from "../../../../components/shared/switch";
import { useProduct } from "../../../../context/ProductContex";
import { getElementServices } from "../../../../services/ServicesGenerator";
import {
  AddorEditBtn,
  CotegorForm,
  CotegorFormInner,
  ImgTable,
  LabeleError,
  ProductImgInput,
  ProductImgLabel,
  ProductInput,
  ProductLabel,
  ProductSelect,
  ProductSelectOption,
  ProductTextarea,
  ProductWrapImg,
  SwitchTitle,
  WrapInformation,
  WrapSwitch,
} from "./FormProductStyle";

export const FormProduct = ({ formik, productName, productId }) => {
  const { t } = useTranslation();
  const getItemFrormSelect = useRef();
  const [getElementBySelect, setGetElementBySelect] = useState([]);
  const idForEdit = useProduct((state) => state?.idForEdit);

  // get element by select
  useEffect(() => {
    getElementServices("/categories", setGetElementBySelect);
  }, []);

  const { getFieldProps } = formik;
  return (
    <>
      <CotegorForm onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <CotegorFormInner>
            <ProductWrapImg>
              <ProductImgLabel>
                <ProductImgInput
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    formik.setFieldValue("images", e.currentTarget.files[0]);
                  }}
                  placeholder="edd img"
                  required
                />
                <ImgTable>{t("product.photo")}</ImgTable>
              </ProductImgLabel>
            </ProductWrapImg>

            <WrapInformation>
              <ProductLabel htmlFor={"select"}>
                {t("product.categor")}
              </ProductLabel>
              <ProductSelect
                id="select"
                defaultValue={""}
                ref={getItemFrormSelect}
                onChange={() => {
                  let findOption = getElementBySelect.find((item) => {
                    return item.id == getItemFrormSelect.current.value;
                  });
                  productId(findOption.id);
                  productName(findOption.category);
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

              <ProductLabel htmlFor="name">{t("product.proname")}</ProductLabel>
              {formik.touched.name && formik.errors.name ? (
                <LabeleError>{formik.errors.name}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                id="name"
                type={"text"}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="masalan: Lux Soft Memory"
                required
              />

              <ProductLabel htmlFor="cost">{t("product.cost")}</ProductLabel>
              {formik.touched.cost && formik.errors.cost ? (
                <LabeleError>{formik.errors.cost}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.cost}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="cost"
                type={"number"}
                name="cost"
                placeholder="masalan: 20 000"
                required
              />

              <ProductLabel htmlFor="weight">
                {t("product.download")}
              </ProductLabel>
              {formik.touched.weight && formik.errors.weight ? (
                <LabeleError>{formik.errors.weight}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="weight"
                type={"text"}
                name="weight"
                placeholder="masalan: 200 kg"
                required
              />
            </WrapInformation>

            <WrapInformation>
              <ProductLabel htmlFor="size">{t("product.size")}</ProductLabel>
              {formik.touched.size && formik.errors.size ? (
                <LabeleError>{formik.errors.size}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.size}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"text"}
                id="size"
                name="size"
                placeholder="masalan: 200 x 140 x 40"
                required
              />

              <ProductLabel htmlFor="warranty">
                {t("product.warranty")}
              </ProductLabel>
              {formik.touched.warranty && formik.errors.warranty ? (
                <LabeleError>{formik.errors.warranty}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.warranty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="warranty"
                type={"text"}
                name="warranty"
                placeholder="masalan: 1 yil"
                required
              />

              <ProductLabel htmlFor="capacity">
                {t("product.capacity")}
              </ProductLabel>
              {formik.touched.capacity && formik.errors.capacity ? (
                <LabeleError>{formik.errors.capacity}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.capacity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="capacity"
                type={"text"}
                name="capacity"
                placeholder="masalan: 2"
                required
              />

              <ProductLabel htmlFor="newCost">
                {t("product.prise")}
              </ProductLabel>
              {formik.touched.newCost && formik.errors.newCost ? (
                <LabeleError>{formik.errors.newCost}</LabeleError>
              ) : (
                ""
              )}
              <ProductInput
                value={formik.values.newCost}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"number"}
                name="newCost"
                id="newCost"
                placeholder="masalan: 1 200 000"
                required
              />
            </WrapInformation>

            <WrapInformation>
              <ProductLabel htmlFor="body">
                {t("product.information")}
              </ProductLabel>
              {formik.touched.body && formik.errors.body ? (
                <LabeleError>{formik.errors.body}</LabeleError>
              ) : (
                ""
              )}
              <ProductTextarea
                value={formik.values.body}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={"text"}
                id="body"
                name="body"
                placeholder="info..."
                required
              />

              <WrapSwitch>
                <SwitchTitle> {t("product.discount")}</SwitchTitle>
                <SwitchTable status={true} {...getFieldProps("discount")} />
              </WrapSwitch>

              <WrapSwitch variant={"outline"}>
                <SwitchTitle>{t("product.active")}</SwitchTitle>
                <SwitchTable status={true} {...getFieldProps("isActive")} />
              </WrapSwitch>

              <AddorEditBtn type="submit">
                {!idForEdit ? t("again.add") : t("again.edit")}
              </AddorEditBtn>
            </WrapInformation>
          </CotegorFormInner>
        </DialogContent>
      </CotegorForm>
    </>
  );
};
