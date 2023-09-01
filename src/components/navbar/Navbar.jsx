import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/GREENPATH.png'
import './navbar.css'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri"

const Menu = () => (
    <>
    <li>
            <Link className='link-cta' to='/' ><span>Home</span></Link>
        </li>
        <li>
            <Link className='link-cta' to='/about'><span>About us</span></Link>
        </li>
        <li>
            <Link className='link-cta' to='/services'><span>Services</span></Link>
        </li>
        <li>
            <Link className='link-cta' to='/contact'><span>Contact</span></Link>
        </li>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt='company-logo' /></Link>
            </div>
            <div className='navbar-links'>
                <ul>
                   <Menu />
                    <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
                    </div>
                </ul>

            </div>
            <div className='navbar-menu-mini '>
        {
            toggleMenu ?
            <RiCloseLine color='#246a47' size={30} onClick={()=>setToggleMenu(false)}/>
            : 
            <RiMenu3Line color='#246a47' size={30} onClick={()=>setToggleMenu(true)}/>
        }
        {
            toggleMenu && (
                <div className="navbar-menu_container " >
                    <div className={`navbar-menu_links ${ toggleMenu ? "slide-bottom" : "slide-top"}`}>
                        <nav >
                          <ul>
                            <Menu />
                            <div className='social-icon'>
                                <AiFillFacebook  className='footer-icon'/>
                                <AiFillTwitterSquare  className='footer-icon'/>
                                <AiFillLinkedin  className='footer-icon'/>
                            </div>
                          </ul>
                        </nav>
                      </div>
                    </div>
            )
        }
                
            </div>
        </div>

    </div>
  )
}

export default Navbar
