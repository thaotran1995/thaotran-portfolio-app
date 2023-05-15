import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import '../styles/Projects.css';
function Projects() {
    console.log(projectList);
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project, index) => {
            return <ProjectItem name={project?.name} image={project?.image} id={index}/>
        })}
      </div>
    </div>
  )
}

export default Projects
