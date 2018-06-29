import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <section id="showcase">
          <div className="container">
            <h1>Web, Mobile, and Social Media Development</h1>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="row">
          <div className="container">
            <div className="col s12">
              <h2>Services</h2>
              <p>How can we make you happy?</p>
            </div>
            <div className="col s12 m4">
              <i className="material-icons">desktop_mac</i>
              <h2>Web Design</h2>
            </div>
            <div className="col s12 m4">
              <i className="material-icons">phone_iphone</i>
              <h2>Mobile Apps</h2>
            </div>
            <div className="col s12 m4">
              <i className="material-icons">assessment</i>
              <h2>Social Media</h2>
            </div>
          </div>

        </section>

        {/* Team */}
        <section id="team" className="row">
          <div className="container">
            <div className="col s12">
              <h2>Meet The Team</h2>
            </div>
          </div>

        </section>

        {/* Projects */}
        <section id="projects" className="row">
          <div className="container">

            <div className="col s12">
              <h2>Some Of Our Projects</h2>
              <div className="col s12 m6 l3">
                <h3>Project 1</h3>
              </div>
              <div className="col s12 m6 l3">
                <h3>Project 2</h3>
              </div>
              <div className="col s12 m6 l3">
                <h3>Project 3</h3>
              </div>
              <div className="col s12 m6 l3">
                <h3>Project 4</h3>
              </div>
            </div>
          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="row">
          <div className="container">
            <div className="col s12">
              <h2>Contact</h2>
              <p>Don't be shy, get in touch with us</p>

              <a href="/contact" class="waves-effect waves-light btn-large">Contact</a>
            </div>
          </div>
        </section>

      </section>
    );
  }
}

export default Home;