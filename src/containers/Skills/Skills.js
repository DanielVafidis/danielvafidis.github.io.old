import React from 'react';
import './Skills.scss';
const Skills = () => {
  return <section className="section skills" id="Skills">
        <div className="container is-narrow">
          <div className="box content has-text-centered">
            <h2>Front End Developer</h2>
            <div className="columns">
              <div className="column">
                <h3>Languages</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>Sass</p>
                <p>Javascipt</p>
                <p>React</p>
                <p>PHP</p>
              </div>
              <div className="column">
                <h3>Dev Tools</h3>
                <p>Visual Code</p>
                <p>Atom</p>
                <p>Bootstrap</p>
                <p>Bulma</p>
                <p>Codepen</p>
                <p>Github</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>;
}

export default Skills;