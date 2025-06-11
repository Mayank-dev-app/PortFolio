import React from 'react'
import ProjectCard from './ProjectCard'
import banner from '../../assets/PersonalNotes.png'
import Reasturent from '../../assets/Reasturent.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:24 text-white">
       <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
       <div className="py-12 px-18 flex flex-wrap gap-5">
        <ProjectCard  banner={banner} title="Personal Website" main="Thie is a personal Note Website Where we can store their personal notes" demo="https://personalnote-rbzo.onrender.com" code="https://github.com/Mayank-dev-app/PersonalNotes"/>
        
         <ProjectCard banner={Reasturent} title="Resataurent Website" main="Thie is a personal Note Website Where we can store their personal notes" demo="https://reastuernt.onrender.com/" code="https://github.com/Mayank-dev-app/FinalYearProjectORReastuernt"/>
       </div>
    </div>
  )
}

export default Projects
