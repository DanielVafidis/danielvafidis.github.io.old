import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faGithub, faLinkedin, faStackOverflow, faHeart)

const Footer = () => {
    return (
        
        <footer className="section">
            <div className="container is-narrow">
                <div className="columns has-text-centered">
                    
                    <div className="column">
                        <a href="https://www.linkedin.com/in/danielvafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="white" size="3x" /></a>
                        <a href="https://github.com/DanielVafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="white" size="3x" /></a>
                        <a href="https://stackoverflow.com/users/10883301/daniel-vafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} color="white" size="3x" /></a>
                    </div>
                    <div className="column"></div>
                    <div className="column"><p>{(new Date().getFullYear())} All rights reserved.</p><p>Built with <FontAwesomeIcon icon={faHeart} /> Using React</p></div>  
                </div>       
            </div>
        </footer>
    );
}

export default Footer;