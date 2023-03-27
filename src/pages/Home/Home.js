import React from "react";
import { Route, Routes } from "react-router";
import { Header } from "../../components/Header";
import { SiteBar } from "../../components/SiteBar";
import { CustomerTable } from "../CustomerTable";
import { Orders } from "../Orders";
import { HomeMainWrap, HomeMainWrapTable, HomeWrap } from "./HomeStyle";
import { TechnologyTable } from "../TechnologyTable/TechnologyTable";
import { CarouselTable } from "../Carouseltable";
import { Location } from "../Location";
import { ProductTable } from "../ProductTab";
import CategoryTable from "../CategoryTable/CategoryTable";

export const Home = () => {
  return (
    <HomeWrap>
      <SiteBar />
      <HomeMainWrap>
        <Header />
        <HomeMainWrapTable>
          <Routes>
            <Route path="buyurtmalar" element={<Orders />} />
            <Route path="customers" element={<CustomerTable />} />
            <Route path="toifalar" element={<CategoryTable />} />
            <Route path="mahsulotlar" element={<ProductTable />} />
            <Route path="texnologiyalar" element={<TechnologyTable />} />
            <Route path="manzil" element={<Location />} />
            <Route path="carousel" element={<CarouselTable />} />
          </Routes>
        </HomeMainWrapTable>
      </HomeMainWrap>
    </HomeWrap>
  );
};
