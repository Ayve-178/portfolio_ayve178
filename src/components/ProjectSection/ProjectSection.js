import React from 'react';
import projects from '../../assets/data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import SectionTitle from '../SectionTitle/SectionTitle';
import './ProjectSection.css';


function ProjectSection() {
  return (
    <div className='projectSection'>
        <div className="projectContainer">
            <SectionTitle heading='Projects' />
            <div className="project-allItems">
                {projects.map((project, index) => {
                    return (
                        <ProjectItem title={project.name} img={project.img} desc={project.desc} url={project.url} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection