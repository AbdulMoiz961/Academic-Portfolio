import React from 'react'

import './projectcard.css'

const ProjectCard = ({ image, title, desc, tags, demo, repository }) => {
  return (
    <div className='project__card'>
      <div className='project__card-image'>
        <img src={image} alt={`${title} screenshot`} />
      </div>

      <div className='project__card-content'>
        <div className='project__card-content_header'>
          <h3>
            {title}
          </h3>
        </div>

        <div className='project__card-content_desc'>
          <p>
            {desc}
          </p>
        </div>

        <div className='project__card-content_tags'>
          {tags.map((tag, index) => (
            <span key={index} className='tech__tag'>
              <p>{tag}</p>
            </span>
          ))}
        </div>


      </div>
      <div className='project__card-buttons'>
        <div className='project__card-buttons_demo'>
          <a href={demo} target='_blank' rel='noopener noreferrer'>
            <button>View Demo</button>
          </a>
        </div>
        <div className='project__card-buttons_repo'>
          <a href={repository} target='_blank' rel='noopener noreferrer'>
            <button>View Repository</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard