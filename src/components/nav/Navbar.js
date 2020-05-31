import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PropTypes from 'prop-types';

class Navbar extends Component{
    render(){
        const { newRecipe } = this.props;
        return(
            <Router>
                <header>
                <h2><a>Recipe App</a></h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                    <li><a onClick={newRecipe}>New Recipe</a></li>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route></Route>
                </Switch>
            </header>
            </Router>
        )
    }
}
Navbar.propTypes={
    newRecipe: PropTypes.func.isRequired
};

export default Navbar;