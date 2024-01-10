import React from 'react'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai'

import './socialicons.css'

const SocialIcons = () => {
  return (
    <div className='portfolio__social'>

        <li>
          <a 
            href="https://github.com/AbdulMoiz961"
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub size="1.8rem" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdul-moiz-6b3191224/"
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin size="1.8rem" />
          </a>
        </li>
        <li>
          <a 
            href="#contact"
            rel='noopener noreferrer'
          >
            <AiFillMail size="1.8rem" />
          </a>
        </li>
        
    </div>
  )
}

export default SocialIcons