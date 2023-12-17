import React from 'react';
import "../style/Body.css"


const Body = () => {
    return (
        <div className='pricipal'>
            <div className="left">
                <p className="transf"><strong>😎 Simple communication tool</strong></p>
                <h1>
                  <strong
                    >Engage your<br />
                    Audience in<br />
                    Minutes<span>.</span>
                  </strong>
                </h1>
                <p className="p2">
                  Powerful video communication tool for<br />
                  companies of all sizes.
                </p>
                <div className="click">
                  <a href="#formulaire">Get Started</a>
                  <a href="./media.html">Watch video</a>
                </div>
            </div>
            <div className="rigth">
                <img src="./img3.jpg"alt="droit"/>
            </div>
        </div>
    );
};

export default Body;