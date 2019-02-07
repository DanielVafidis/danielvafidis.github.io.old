import React from 'react';
import ReactDOM from 'react-dom';
import "minireset.css";
import "bulma";
import './index.scss';
import Header from './containers/Header/Header';
import Skills from './containers/Skills/Skills';
import Footer from './containers/Footer/Footer';
import Contact from "./containers/Contact/Contact";
import * as serviceWorker from './serviceWorker';
import Projects from './containers/Projects/Projects';



ReactDOM.render(
  <React.Fragment><Header/><Skills/><Projects/><Contact/><Footer/></React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
