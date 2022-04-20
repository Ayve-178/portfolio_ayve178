import React from 'react';
import { Link } from 'react-router-dom';
import projectImage from '../../assets/images/shop.jpg';
import './ProjectItem.css';
 
function ProjectItem({ img = projectImage, title='Project Name', desc = 'This is basic description', url=''}) {
  return (
    <div className='projectItem'>
        <Link to='' className='projectItem-image'>
            <img src={img} alt='' />
        </Link>
        <div className="projectItem-info">
            <a target="_blank" href={url} rel="noreferrer">
                <h3 className="projectItem-title">{title}</h3>
            </a>
            <p className="projectItem-desc">
                {desc}
            </p>
        </div> 
    </div>
  )
}

export default ProjectItem