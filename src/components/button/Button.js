import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({btnLink, btnText}) {
  return (
    <div className='btnComponent'>
        <Link className='button' to={btnLink}>{btnText}</Link>
    </div>
  )
}

export default Button