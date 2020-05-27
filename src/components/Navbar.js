import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        const { newRecipe } = this.props;
        return(
            <header>
                <h2><a>Recipe App</a></h2>
                <nav>
                    <li><a onClick={newRecipe}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;