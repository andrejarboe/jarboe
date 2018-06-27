import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min";

class NavBar extends Component {
  componentDidMount(){
    //sidenav
    const sideNav = document.querySelector('.sidenav');
    const instance = M.Sidenav.init(sideNav, {});
  };
  

  render() {
    return (
      <div>
        <nav className="red">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Jarboe Studios</a>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="#projects">Projects</a></li>                
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>                
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-nav">
          <li><a href="/">Home</a></li>
          <li><a href="#projects">Projects</a></li>                
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>                
        </ul>
      </div>
    );
  }
}

export default NavBar;