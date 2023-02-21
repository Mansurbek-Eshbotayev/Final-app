import React from 'react'
import { Route, Routes } from 'react-router'
import { Header } from '../../components/Header/Header'
import { SiteBar } from '../../components/SiteBar/SiteBar'
import { Carousel } from '../../Tables/Carousel/Carousel'
import { Categories } from '../../Tables/Categories/Categories'
import { CustomerTable } from '../../Tables/CustomerTable/CustomerTable'
import { Location } from '../../Tables/Location/Location'
import { OrderTable } from '../../Tables/OrderTable/OrderTable'
import { Product } from '../../Tables/Product/Product'
import { Technology } from '../../Tables/Technology/Technology'
import { HomeMainWrap, HomeMainWrapTable, HomeWrap } from './HomeStyle'

export const Home = () => {
  return (
    <HomeWrap>
      <SiteBar />
      <HomeMainWrap>
      <Header />
      <HomeMainWrapTable>
       <Routes>
        <Route path='buyurtmalar' element={<OrderTable />} />
        <Route path='customers' element={<CustomerTable />} />
        <Route path='toifalar' element={<Categories />} />
        <Route path='mahsulotlar' element={<Product />} />
        <Route path='texnologiyalar' element={<Technology />} />
        <Route path='manzil' element={<Location />} />
        <Route path='carousel' element={<Carousel />} />
       </Routes>
      </HomeMainWrapTable>
      </HomeMainWrap>
    </HomeWrap>
  )
}
