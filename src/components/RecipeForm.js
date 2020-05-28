import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'RecipeForm.css';
 
class RecipeForm extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          instructions: '',
          ingredients: [''],
          img: ''
        };
      }
    
      clearForm = () => {
        this.setState({
          title: '',
          instructions: '',
          ingredients: [''],
          img: ''
        });
      }
    render() { 
        return (
            <div>
                RecipeForm
            </div>
        );
    }
}
 
export default RecipeForm;