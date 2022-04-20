import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Contact.css';
 
function Contact() {
  return (
    <div className='contact'>
        <SectionTitle heading='Contact' />
        <div className="contactContainer">
            <a target="_blank" href='https://www.facebook.com/khairunnessa.ayve.56/' rel="noreferrer"><FaFacebookSquare className='socialIcons' /></a>
            <a target="_blank" href='https://www.linkedin.com/in/khairunnessaayve/' rel="noreferrer">
              <FaLinkedin className='socialIcons' />
            </a>
            <a target="_blank" href='https://github.com/Ayve-178' rel="noreferrer">
              <FaGithubSquare className='socialIcons' />
            </a>
            <a target="_blank" href='https://www.instagram.com/ayve_178/' rel="noreferrer">
              <FaInstagramSquare className='socialIcons' />
            </a>
        </div>
        <p>or, mail me at: &nbsp;khairunnessaayve@gmail.com</p>
    </div>
  )
}

export default Contact