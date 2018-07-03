import React, { Component } from 'react';
import './Home.css';

// COMMPONENTS
// import Desk from '../../components/Desk';

//IMAGES
import webDesign from '../../images/webDesign.jpg';

class Home extends Component {
  render() {
    return (
      <section id="home">
        <section id="showcase">
          <div className="container">
            {/* <Desk /> */}
            <h1>Web Design & Development </h1>
            <p>
              Custom solutions for companies and individuals
            </p>

            <a href="https://twitter.com/jarboestudios?lang=en" className="fa fa-twitter grey-text text-lighten-4" target="_blank"></a>

            <a href="https://www.instagram.com/jarboestudios/" className="fa fa-instagram grey-text text-lighten-4" target="_blank"></a>
          </div>
        </section>

        {/* welcome */}
        <section id="welcome" className="row">
          <div className="container">
            <div className="col s12">
              <h2>Welcome to Jarboe <span>Studios</span></h2>
            </div>
          </div>

          <div className="border"></div>

          <div className="container">
            <p>
            At Jarboe Studios, we produce stunning web designs for companies and individuals that are easily maintained and updated by the user. Based in Atlanta GA, we pride ourselves in working with actors and creative studios in order to produce top quality websites that grab the viewers attention. 
            </p>
            <a href="/about" class="button waves-effect waves-light btn-large">Read More</a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="row  grey darken-4">
          <div className="container">
            <div className="col s12">
              <h2>Services</h2>
              {/* <p>How can we make you happy?</p> */}
            </div>
          </div>
          <div className="border"></div>
          <div className="container">

            <div className="col s12 m4">
              <a href="">
                <img src={webDesign} className="responsive-img" alt="Photo by Goran Ivos on Unsplash" />
                <h2>Web Design</h2>
              </a>

            </div>
            <div className="col s12 m4">
              <a href="">
                <img src={webDesign} className="responsive-img" alt="Photo by Goran Ivos on Unsplash" />
                <h2>Mobile Apps</h2>
              </a>

            </div>
            <div className="col s12 m4">
              <a href="">
                <img src={webDesign} className="responsive-img" alt="Photo by Goran Ivos on Unsplash" />
                <h2>Social Media</h2>
              </a>
            </div>
          </div>

        </section>

        {/* Team */}
        {/* <section id="team" className="row">
          <div className="container">
            <div className="col s12">
              <h2>Meet The Team</h2>
            </div>
          </div>
        </section> */}

        {/* Projects */}
        <section id="projects" className="row">
          <div className="container">

            <div className="col s12">
              <h2>Some Of Our Projects</h2>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src="https://picsum.photos/g/300/200" alt="" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src="https://picsum.photos/g/300/200" alt="" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src="https://picsum.photos/g/300/200" alt="" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image">
                    <img src="https://picsum.photos/g/300/200" alt="" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
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

              <a href="/contact" class="button waves-effect waves-light btn-large">Contact</a>
            </div>
          </div>
        </section>

      </section>
    );
  }
}

export default Home;