import React from 'react'
// import './../App.css';
import {AiOutlineBars} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import logo from './Images/logo.png';
const Navbar = () => {
                    const [click,setClick]=useState(false);
                    return (
               <div className='navbar'>
                      <nav className='flexSB'>
                      <div className='start'>
                               <img src={logo} alt="" />
                       </div>
                           <ul className={click?'mobile-nav':'flexSB'} onClick={()=>setClick(false)}>
               
                                   <li><Link to='/'>Home</Link></li>
                                   <li><Link to='/Category'>Category</Link></li>
                                   <li><Link to='/Product'>Product</Link></li>
                                   <li><Link to='/Deal'>Deal</Link></li>
                                   <li><Link to='/Contact'>Contact</Link></li>
                                    <button className='btn'>Sign In</button> 
                                   </ul> 
                                  
                                       <button className='toggle' onClick={()=>setClick(!click)}>
                                            {click?<ImCross/>:<AiOutlineBars/>}
               
                                       </button>
                  
                      </nav>
                      <Outlet />
                 </div>
                 )
               }
               
export default Navbar