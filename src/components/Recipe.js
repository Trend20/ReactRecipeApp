import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
class Recipe extends Component {
    render() { 
        const { title, img, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) =>(
            <li key={index}>
                {ing}
            </li>
        ));
        return (
            <div>
                Recipe
            </div>
        );
    }
}
 
export default Recipe;