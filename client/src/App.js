import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// PAGES
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";


// COMMPONENTS
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
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Router>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;