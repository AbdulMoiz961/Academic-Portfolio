import React from 'react'

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { HeaderImg } from '../../assets'

import './home.css'

const Home = () => {
  return (
    <div className='portfolio__header' id='home'>
      <div className='portfolio__header-content'>
        <h1 className='header__text'>Welcome To My <br />Academic Portfolio</h1> 
        <p className='paragraph__text'>
            <span className='res_span'>Hello there,</span><br />
            My name is Abdul Moiz. I am a web developer based in Karachi, PK. Currently pursuing a Bachelor's degree in Computer Science at DHA Suffa University, navigating the realms of coding and design. Eager to learn and contribute, I bring a fresh perspective to the dynamic world of web development.
        </p> <br />
        <p className='paragraph__text'>
          You can download my CV from here.
        </p>
        <button type='button' className='download__button'>
          Download 
          <MdOutlineKeyboardDoubleArrowDown 
            size={"1.7rem"}
          />
        </button>
      </div>

      <div className='portfolio__header-img'>
        <img src={HeaderImg} alt="header_img" />
      </div>

    </div>
  )
}

export default Home