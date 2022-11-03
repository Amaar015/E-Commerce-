import React from 'react'
// import './../App.css';
import {AiOutlineBars} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
const Navbar = () => {
                    const [click,setClick]=useState(false);
                    return (
               <div className='navbar'>
                      <nav className='flexSB'>
                      <div className='start'>
                               <h1>Categrories</h1>
                       </div>
                           <ul className={click?'mobile-nav':'flexSB'} onClick={()=>setClick(false)}>
               
                                   <li><Link to='/'>Home</Link></li>
                                   <li><Link to='/Shop'>Shop</Link></li>
                                   <li><Link to='/blog'>Blog</Link></li>
                                   <li><Link to='/Product'>product</Link></li>
                                   <li><Link to='/Deal'>Deal</Link></li>
                                   <li><Link to='/Contact'>Contact</Link></li> 
                                   </ul> 
                                   <div className="contact">
                                   <small>A</small>
                                   <div className='text'>
                                   <p>Wattsapp No</p>
                                   <p className="no">+923043042589</p>
                                   </div>
                              </div>     

                                       <button className='toggle' onClick={()=>setClick(!click)}>
                                            {click?<ImCross className='btn_11'/>:<AiOutlineBars className='btn_11'/>}
               
                                       </button>
                  
                      </nav>
                      <Outlet />
                 </div>
                 )
               }
               
export default Navbar