import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt scale={1.08} className='tilt-bg br2 shadow-2'>
                <img src={brain} alt="brain" />
            </Tilt>
        </div>
    )
}

export default Logo;