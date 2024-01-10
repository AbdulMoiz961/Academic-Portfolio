import React from 'react'

import './contact.css'
import { SectionHeader, ContactForm, SocialIcons } from '../../components'

const Contact = () => {
  return (
    <div className='portfolio__contact-container' id='contact'>
      <SectionHeader title="Contact" />
      <div className='contact__div'>
        <ContactForm />

        <div className='contact__div-also'>
          <p>feel free to also connect with me through:</p>
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}

export default Contact