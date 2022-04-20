import React from 'react';
import './Ptext.css';

function Ptext({children}) {
  return (
    <div className='ptext'>
        <p>{children}</p>
    </div>
  )
}

export default Ptext