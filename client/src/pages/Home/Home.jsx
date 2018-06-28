import React, { Component } from 'react';
// import Desk from '../../images/oli-dale-139169-unsplash2.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="showcase">
          <div className="container">
            <h1>Web and Mobile App Development</h1>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="row">
          <div className="col s12 m4">
            <h2>Web Design</h2>
          </div>
          <div className="col s12 m4">
            <h2>Mobile Apps</h2>
          </div>
          <div className="col s12 m4">
            <h2>Social Media</h2>
          </div>

          
        </div>

      </div>
    );
  }
}

export default Home;