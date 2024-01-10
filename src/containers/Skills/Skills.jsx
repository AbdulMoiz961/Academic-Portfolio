import React, { useEffect, useState } from 'react'

import { skills } from '../../constants'
import { SectionHeader, SkillCard } from '../../components'
import './skills.css'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(window.innerWidth > 620 ? skills.length : 4);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 620);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 620);
      if (!isMobile) {
        setVisibleSkills(skills.length)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile]);

  const showMore = () => {
    setVisibleSkills(skills.length)
  };

  const showLess = () => {
    setVisibleSkills(4)
  };

  return (
    <div className='portfolio__skills-container' id='skills'>
      <div className='portfolio__skills-container_header'>
        <SectionHeader title="Skills" />
      </div>
      <div className='portfolio__skills-container_cards'>
        {skills.slice(0, visibleSkills).map( (skill, index) => {
          return (
            <SkillCard key={skill.id} {...skill} index={index} />
          )
        })}
      </div>
      {isMobile && skills.length > 4 && (
        <div className='portfolio__show-more'>
          {visibleSkills === 4 ? (
            <button onClick={showMore}>Show More</button>
          ) : (
            <button onClick={showLess}>Show Less</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;