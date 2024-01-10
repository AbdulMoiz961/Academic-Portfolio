import React, { useState } from 'react'

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import './skillcard.css'

const SkillCard = ({ icon, title, content, index}) => {

  const [toggle, setToggle] = useState(false);

  const toggleCard = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`portfolio__skillcard ${toggle ? 'expanded' : ''}`} onClick={toggleCard}>
      <div className='portfolio__skillcard_container'>
        <div className='portfolio__skillcard-img'>
            <img src={icon} alt={`${title} icon`} />
        </div>
        <div className='portfolio__skillcard-content'>
          <div className='portfolio__skillcard-content_header'>
            <h3>
              {title}
            </h3>
          </div>
          <div className='portfolio__skillcard-content_ptoggle'>
            {toggle && (
              <div className='portfolio__skillcard-content_desc'>
                <p>
                  {content}
                </p>
              </div>
            )}
          </div>
          <div className='portfolio__skillcard-toggle'>
            {toggle
              ? ( <FaChevronUp color='#333333' size={24} onClick={toggleCard} /> )
              : ( <FaChevronDown color='#333333' size={24} onClick={toggleCard} /> )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard