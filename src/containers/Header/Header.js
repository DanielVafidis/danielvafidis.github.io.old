import React, {Component} from 'react';
import './Header.scss';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import arrow_down from './icons/arrow_down.svg';
import scroll_top from './icons/to-top.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faGithub, faLinkedin, faStackOverflow, faHeart)


class Header extends Component{
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  state = {
    isTop: true,
  };
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  render(){
    return <header className="section" id="header">
          <div className="headercontainer">
            <div className="getintouch ">
              <Link activeClass="active" className="gotocontact" to="Contact" spy={true} smooth={true} duration={800}>
                <button className="button is-medium is-rounded">Say Hi!</button>
              </Link>
            </div>
            <div className="headercontent">
              <div className="container content dan has-text-centered">
                <h1>Daniel Vafidis</h1>
                <h2>Web Developer</h2>
                <div className="">
                  <a href="https://www.linkedin.com/in/danielvafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="white" size="3x" /></a>
              <a href="https://github.com/DanielVafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="white" size="3x" /></a>
              <a href="https://stackoverflow.com/users/10883301/daniel-vafidis/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} color="white" size="3x" /></a>
                </div>
              </div>
            </div>
            <div className="scrollDown">
          <Link activeClass="active" className="gotoskills" to="Skills" spy={true} smooth={true} duration={800}><img src={arrow_down} className="arrow-down" alt="scrolldown" /></Link>
            </div>
          </div>
            <div className="scrollTop">
            <h1>
            <Link to="Header" href="#header" onClick={this.scrollToTop}><img src={scroll_top} alt="scrolldown"/></Link>
            </h1>
          </div>
        </header>;
  }
    
}

export default Header;