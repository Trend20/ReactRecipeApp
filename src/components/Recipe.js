import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
class Recipe extends Component {
    render() { 
        const { title, img, instructions } = this.props;
        return (
            <div>
                Recipe
            </div>
        );
    }
}
 
export default Recipe;