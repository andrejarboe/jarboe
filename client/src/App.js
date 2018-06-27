import React, { Component } from 'react';
import  './App.css'; 
// import {Navbar} from './components/Navbar';
// import Footer from './components/Footer';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-navbar">
                        <Navbar />
                    </div>
                    <div className="main">
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;