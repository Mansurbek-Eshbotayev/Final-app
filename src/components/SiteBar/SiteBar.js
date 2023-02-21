import React from 'react'
import { SiteBarItem, SiteBarList, SiteBarSpan, SiteBarStyle, SiteLogoWrap } from './SiteBarStyle'
import Logo from '../../assets/images/admin_logo.svg'
import { NavLink } from 'react-router-dom'
import { Homebar, HomebarCaro, HomebarMan, HomebarManzil, HomebarMaxsulot, HomebarTex, HomebarToifa } from '../../assets/images/Icons'


export const SiteBar = () => {
  return (
    <SiteBarStyle>
      <SiteLogoWrap>
         <img src={Logo} alt="site logo" />
      </SiteLogoWrap>
      <SiteBarList>
       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/buyurtmalar'>
          <SiteBarSpan>
           <Homebar/>
          </SiteBarSpan>
           Buyurtmalar
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/customers'>
          <SiteBarSpan>
           <HomebarMan/>
          </SiteBarSpan>
          Сustomers
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/toifalar'>
          <SiteBarSpan>
           <HomebarToifa/>
          </SiteBarSpan>
          Toifalar
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/mahsulotlar'>
          <SiteBarSpan>
           <HomebarMaxsulot/>
          </SiteBarSpan>
          Mahsulotlar
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/texnologiyalar'>
          <SiteBarSpan>
           <HomebarTex/>
          </SiteBarSpan>
          Texnologiyalar
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/manzil'>
          <SiteBarSpan>
           <HomebarManzil/>
          </SiteBarSpan>
          Manzil
         </NavLink>
       </SiteBarItem>

       <SiteBarItem>
         <NavLink className={({isActive}) => isActive ? 'activ_link' : 'site_link'} to='/carousel'>
          <SiteBarSpan>
           <HomebarCaro />
          </SiteBarSpan>
          Carousel
         </NavLink>
       </SiteBarItem>


      </SiteBarList>
    </SiteBarStyle>
  )
}
