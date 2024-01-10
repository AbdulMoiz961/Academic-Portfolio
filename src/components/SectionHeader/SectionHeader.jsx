import React from 'react'

import './sectionheader.css'

const SectionHeader = ({ title }) => {
  return (
    <div className='portfolio__section-header_container'>
        <div />
        <h1>
            {title}
        </h1>
    </div>
  )
}

export default SectionHeader