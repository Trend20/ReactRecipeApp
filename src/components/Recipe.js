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
            <div className="recipe-card">
                <div className="recipe-card-imag">
                  <img src={img} alt={title} />

                </div>
            </div>
        );
    }
}
 
export default Recipe;