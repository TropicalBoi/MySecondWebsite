import React from 'react';
import fishTank from './ZingScreenSever000.jpg';
import zingGif from './ZingSS.gif';
import smith from './smith.gif';
import john from './confuseJohn.gif';
import lzingboi from './LZINGBOI5.gif';
import './Zing.css';

class Zing extends React.Component {

    render() {
        return (
            <div className="Zing">
                <img src={zingGif} className="ZingGif" alt="screen sever" />
                <img src={fishTank} className="FishTank" alt="fish tank" />
                <img src={john} className="John" alt="john" />
                <p className="Header">ZING VIDEO</p>
                <img src={smith} className="Smith" alt="smith" />
                <p className="Text">
                    Platform and Organization for 
                    connect image-movers who didn't 
                    commit to the standard quality.
                </p>
                <div className="myarrow">
                    <span class="line"></span>
                    <div className="triangle">
                        <span className="arrow left"></span>
                        <span className="arrow right"></span>
                    </div>
                </div>
                <img src={lzingboi} className="LzingBoi" alt="LZINGBOI" />
            </div>
        )

    };
}

export default Zing;