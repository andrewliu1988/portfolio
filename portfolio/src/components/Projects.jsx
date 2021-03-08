import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  const [projectOne, setProjectOne] = useState({title:'', tech:'', description: '', img: ''})
  const [projectTwo, setProjectTwo] = useState({title: '', tech: '', description: '', img: ''})

  return (
    <div className="projectGrid"> 
     <ProjectCard/>
     <ProjectCard/>
    </div>
  )
}

export default Project