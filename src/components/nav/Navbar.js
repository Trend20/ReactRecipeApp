import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
    render(){
        return(
            <Router>
                <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </header>
            </Router>
        )
    }
}

export default Navbar;