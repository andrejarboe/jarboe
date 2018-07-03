import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer grey darken-4">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Jarboe <span>Studios</span></h5>
                            <p className="">
                            Custom solutions for companies and individuals 
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Site Map</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                                <li><a className="grey-text text-lighten-3" href="/projects">Projects</a></li>
                                <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
                                <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Copyright Text
                        <a href="https://twitter.com/jarboestudios?lang=en" class="fa fa-twitter grey-text text-lighten-4 right"></a>
                         
                        <a href="https://www.instagram.com/jarboestudios/" class="fa fa-instagram grey-text text-lighten-4 right"></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;