import React from 'react';
import './SectionTitle.css';

function SectionTitle({heading='This is a heading'}) {
  return (
    <div className='sectionTitle'>
        <h2>{heading}</h2>
    </div>
  )
}

export default SectionTitle