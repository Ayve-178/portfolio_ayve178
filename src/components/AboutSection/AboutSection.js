import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='about'>
        <SectionTitle heading='About' />
        <div className="aboutContainer">
            <div className="aboutSection-left">
                <SectionTitle 
                    heading='Educational Qualification' 
                    className='section-title'
                />
                <div className='left-div'>
                    <h4 className='left-div-heading'>Bachelor of Science</h4>
                    <p><b>CGPA:</b> 3.66</p>
                    <p><b>Passing year:</b> 2022</p>
                    <p><b>Subject:</b> Computer Science and Engineering</p>
                    <p><b>Institute:</b> Khulna University</p>
                </div>
                <div className='left-div'>
                    <h4 className='left-div-heading'>Higher Secondary School Certificate</h4>
                    <p><b>GPA:</b> 5.00</p>
                    <p><b>Passing year:</b> 2016</p>
                    <p><b>Group:</b> Science</p>
                    <p><b>Institute:</b> Khulna Govt Girls College</p>
                </div>
                <div className='left-div'>
                    <h4 className='left-div-heading'>Secondary School Certificate</h4>
                    <p><b>GPA:</b> 5.00</p>
                    <p><b>Passing year:</b> 2014</p>
                    <p><b>Group:</b> Science</p>
                    <p><b>Institute:</b> Rotary School, Khulna</p>
                </div>
            </div>
            <div className="aboutSection-right">
                <SectionTitle 
                    heading='Technical Skill' 
                    className='section-title'
                />
                <div className='progressBar'>
                    <br/>
                    <div className='progressBarEl'>
                        <label for="file">React</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="65" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">HTML-CSS</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress value="75" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">JavaScript</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="65" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">Firebase</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="60" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">C/C++</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="70" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">Problem Solving</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="60" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">Git and Github</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="55" max="100"> 32% </progress>
                    </div>
                    <div className='progressBarEl'>
                        <label for="file">Microsoft Office</label>&nbsp;&nbsp;&nbsp;
                        <progress id="file" value="70" max="100"> 32% </progress>
                    </div>
                </div>
                <br/><br/>
                <div className='aboutText'>
                    <p>Though I am comfortable in woriking with React Hooks, I have knowledge on React Class Components. Familiar with Redux and Rest API. And have experience of working with Latex.</p>
                </div>
                <br/>
            </div>
        </div>
    </div>
  )
}

export default AboutSection