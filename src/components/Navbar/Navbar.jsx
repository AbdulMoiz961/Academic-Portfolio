import React, { useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { SocialIcons } from '../../components'
import { Logo } from '../../assets'
import { navLinks } from '../../constants'

import './navbar.css'

const Navbar = () => {

    const [isSticky, setSticky] = useState(false)
    const [toggle, setToggle] = useState(false);

    // const scrollHandler = () => {
    //     if (window.scrollY > 20) {
    //         setSticky(true);
    //     } else {
    //         setSticky(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHandler);

    //     return () => {
    //         window.removeEventListener('scroll', scrollHandler);
    //     };
    // }, []);

  return (
    <div 
        // className={isSticky ? 'navbar sticky' : 'navbar'}
        className="navbar"
    >
        <div className='portfolio__navbar-logo'>
            <a>
                <img src={Logo} alt="logo" />
            </a>
        </div>
        <div className='portfolio__navbar'>

            <div className='portfolio__navbar-container'>
                {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className='portfolio__navbar-container_links'
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </div>
            <div className="portfolio__navbar-socials">
                <SocialIcons />
            </div>
        </div>

        <div className='portfolio__navbar-menu'>
            {toggle
                ? ( <RiCloseLine color='#c7c7c7' size={27} onClick={() => setToggle(false)} /> )
                : ( <RiMenu3Line color='#c7c7c7' size={27} onClick={() => setToggle(true)} /> )
            }
            {toggle && (
                <div className='portfolio__navbar-menu_container slide-fwd-bottom'>
                    <div className='portfolio__navbar-menu_container-links'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className='portfolio__navbar-menu_container-links_li' 
                        >
                            <a 
                                href={`#${nav.id}`}
                                onClick={ () => setToggle(false) }
                            >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </div>
                    <div className="portfolio__navbar-menu_container-socials">
                         <SocialIcons />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar