import React, { useState } from 'react'
import './../App.css'
import {FaCartPlus} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai'
import logo from './Images/logo.png'
const Header = () => {
   const [Search,setSearch]=useState(false);
  return (
    <header className='header'>
                    <div className="logo">
                                      <img src={logo} alt="" />
                    </div>
                   <div className={`${Search? "active" : "search-bar"}`} >
                     <input type="text" placeholder='search quick'/> <AiOutlineSearch className='icon-1'/>
                     </div>
                     <AiOutlineSearch className='icon-2' onClick={()=>{setSearch(!Search)}}/>
                             
                      <div className="icons">
                        <small>A</small>
                        <small>B</small>
                        <small>C</small>
                      </div>
    </header>
  )
}

export default Header

