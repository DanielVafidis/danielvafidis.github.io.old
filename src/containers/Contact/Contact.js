import React from 'react';
import './Contact.scss';

const Contact = () => {
    return <section className="section contacts" name="Contact">
        <div className="container content is-narrow">
          <h2>Contact Me</h2>
          <form id="form" acceptCharset="UTF-8" action="https://usebasin.com/f/9f51124f6949" method="POST">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control is-expanded">
                    <input className="input is-medium" name="name" type="text" required/>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control is-expanded">
                    <input className="input is-medium" name="email" type="email" required/>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column">
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control is-expanded">
                    <textarea className="textarea is-large" name="message" rows="5" required/>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="field">
                  <div className="control">
                    <button className="button is-medium is-fullwidth is-rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>;
}

export default Contact;