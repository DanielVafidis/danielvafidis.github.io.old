import React, {Component} from 'react';
import './Header.scss';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import arrow_down from './icons/arrow_down.svg';
import scroll_top from './icons/to-top.png';

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
    return <header className="section is-long" id="header">
        <div className="getintouch ">
          <Link activeClass="active" className="gotocontact" to="Contact" spy={true} smooth={true} duration={800}>
            <button className="button is-medium is-rounded">Say Hi!</button>
          </Link>
        </div>
        <div className="container content dan has-text-centered">
          <h1>Vafidis Daniel</h1>
        </div>
        <div className="container scrollDown">
        <img src={arrow_down} className="arrow-down" alt="scrolldown" />
        </div>
        <div className="scrollTop">
          <h1>
          <a href="#header" onClick={this.scrollToTop}><img src={scroll_top} alt="scrolldown"/></a>
          </h1>
        </div>
      </header>;
  }
    
}

export default Header;