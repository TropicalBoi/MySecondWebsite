import React from 'react';
import logo from './logo.svg';
import logoScale from './logoScale.svg';
import './Landing.css';

class Landing extends React.Component {

    render() {
        return(
            <div className="Landing">
                <p className="About">ABOUT</p>
                <div className="Logo">
                    <img src={logoScale} className="Logo-scale" alt="logo" />
                    <img src={logo} className="Tew-logo" alt="logo" />
                </div>
            </div>
        )
    };
}

export default Landing;