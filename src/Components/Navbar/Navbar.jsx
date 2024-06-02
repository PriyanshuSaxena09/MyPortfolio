import React, { useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu,setmenu]=useState("home");
  return (
    <div className='navbar'>
        <img src={theme_pattern} alt="" />
        <ul className='nav-menu'>
          <li><AnchorLink className='anchor-link' href='#home'><p on onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p on onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p on onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p on onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p on onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar