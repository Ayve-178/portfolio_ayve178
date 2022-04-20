import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AchievementSection.css';

function AchievementSection() {
  return (
    <div className='achieve'>
        <SectionTitle heading='Achievements' className="achieveHeading" />
        <div className="achieveContainer">
            <div className='honors'>
                <p><b>Awards -</b></p>
                <p>- 1st runner up in KU CSE FEST Regional Programming Contest, 2019</p>
                <p>- 2nd runner up in KU CSE FEST Regional Hackathon, 2019</p>
                <p>- 12th in Ada Lovelace National Girls Programming Contest, 2020</p>
            </div>
            <br/><br/>
            <div className="honors">
                <p><b>Publications -</b></p>
                <p>- Research paper on "Tomato Leaf Disease Detection" published on an international conference(IEMES).</p>
            </div>
        </div>
    </div>
  )
}


export default AchievementSection