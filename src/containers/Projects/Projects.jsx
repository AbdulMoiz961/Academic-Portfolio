import React from 'react'

import { ProjectCard, SectionHeader } from '../../components'
import { screenshot } from '../../assets'
import { projects } from '../../constants'
import './projects.css'

const Projects = () => {

  return (
    <div className='portfolio__projects-container' id='projects'>
      <div className='portfolio__projects-container_header'>
        <SectionHeader title="Projects" />
      </div>
      <div className='portfolio__projects-container_cards'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            desc={project.description}
            tags={project.tags}
            demo={project.demo}
            repository={project.repository}
          />
        ))}
        {/* <ProjectCard 
          image={screenshot}
          title="Academic Portfolio" 
          desc="I've Created this portfolio using React. I designed and developed this portfolio website to showcase my projects and skills. "
          tags={["node.js", "react.js", "next.js"]}
        />
        <ProjectCard 
          image={screenshot}
          title="Academic Portfolio" 
          desc="I've Created this portfolio using React. I designed and developed this portfolio website to showcase my projects and skills. "
          tags={["node.js", "react.js", "next.js"]}
        /> */}
      </div>
    </div>
  )
}

export default Projects