import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className='nav-style'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer'>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav className='nav-style'>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim underline pa3 pointer'>Register</p>
            </nav>
        )
    }
}

export default Navigation;