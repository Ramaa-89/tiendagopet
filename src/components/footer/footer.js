import React from 'react';
import logob from '../../assets/img/logob.svg';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import youtube from '../../assets/img/youtube.png';
import whatsapp from '../../assets/img/whatsapp.png';
import facebook from '../../assets/img/facebook.png';

import './footer.css'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                 <div>
                    <a href="#"><img className="logo--marca" src={logob} alt="goPet shop"/></a>
                </div>
                <div>
                    <p>BitShop - pagina creada por <a href="https://rmorales89.myportfolio.com/" target="_blank">RamDesign <i className="fa-solid fa-wand-magic-sparkles"></i></a></p>
                </div>
                <div class="redes">
                    <a href="https://www.facebook.com/"target="_blank"><img className="logo--redes"src={facebook} alt="Facebook"/></a>
                    <a href="https://www.instagra.com/"target="_blank"><img className="logo--redes"src={instagram} alt="Instagram"/></a>
                    <a href="https://www.twitter.com/"target="_blank"><img className="logo--redes"src={twitter} alt="Twitter"/></a>
                    <a href="https://www.youtube.com/"target="_blank"><img className="logo--redes"src={youtube} alt="YouTube"/></a>
                    <a href="https://www.whatsapp.com/"target="_blank"><img className="logo--redes"src={whatsapp} alt="Whatsapp"/></a>
                </div>
            </footer>
        </>
    )
}
    
export default Footer;