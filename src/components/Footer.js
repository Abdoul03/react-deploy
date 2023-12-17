import React from 'react';
import Formulaire from './Formulaire';
import "../style/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Formulaire/>
            </div>
            <div className="socaux">
                <h2>Suivez-nous sur nos reseax sociaux</h2>
                <a href=".">Facebook</a>
                <a href=".">Instagramm</a>
                <a href=".">X</a>
                <a href=".">Tiktok</a>
                <h2>Pour plus d'information<br />contacter nous</h2>
                <a href="mailto:samabdoul03@gmail.com">samabdoul03@gmail.com</a>
                <a href="tel:+22371267813">71267813</a>
            </div>
        </div>
    );
};

export default Footer;