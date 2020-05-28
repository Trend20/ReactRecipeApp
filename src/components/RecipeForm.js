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
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handleNewIngredient = (e) => {
        const { ingredients } = this.state;
        this.setState({
          ingredients: [...ingredients, '']
        });
      }
    
      handleChangeIng = (e) => {
        const ChangeIndex = Number(e.target.name.split('-')[1]);
    
        const ingredients = this.state.ingredients.map((ing, i) => (
          i == ChangeIndex ? e.target.value: ing
        ));
    
        this.setState({ ingredients });
      }
      handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(e)
    
        const {
          title,
          img,
          instructions
        } = this.state;
    
        if(!title || !img || !instructions) {
          return;
        }
    
        this.props.handleSave({...this.state});
        this.clearForm();
      }    
    render() { 
        const {
            title,
            instructions,
            ingredients,
            img
          } = this.state;
      
          const { onClose } = this.props;
      
          // loop through ingredients and make an array of inputs
          const inputs = ingredients.map((ing, i) => {
            return (
              <div className="recipe-form-line"
                key={`ingredient-${i}`}>
                <label>{i+1}.
                  <input
                    type="text"
                    name={`ingredient-${i}`}
                    value={ing}
                    size={45}
                    autoComplete="off"
                    placeholder="Ingredient"
                    onChange={this.handleChangeIng} />
                </label>
              </div>
            );
          });
        return (
            <div>
                RecipeForm
            </div>
        );
    }
}
 
export default RecipeForm;