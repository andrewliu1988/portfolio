import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  const [projectOne, setProjectOne] = useState({title:'', tech:'', description: '', img: ''})
  const [projectTwo, setProjectTwo] = useState({title: '', tech: '', description: '', img: ''})

  return (
    <div className="projectGrid"> 
      <div className="projectOne">
        <ProjectCard />
      </div>
     <ProjectCard/>
    </div>
  )
}

export default Project