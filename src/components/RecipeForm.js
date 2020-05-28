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
          <div className="recipe-form-container">
          <form className='recipe-form' onSubmit={this.handleSubmit}>
            <button
              type="button"
              className="close-button"
              onClick={onClose}
            >
              X
            </button>
            <div className='recipe-form-line'>
              <label htmlFor='recipe-title-input'>Title</label>
              <input
                id='recipe-title-input'
                key='title'
                name='title'
                type='text'
                value={title}
                size={42}
                autoComplete="off"
                onChange={this.handleChange} />
            </div>
  
            <label
              htmlFor='recipe-instructions-input'
              style={{marginTop: '5px'}}
            >
              Instructions
            </label>
            <textarea
              key='instructions'
              id='recipe-instructions-input'
              type='Instructions'
              name='instructions'
              rows='8'
              cols='50'
              autoComplete='off'
              value={instructions}
              onChange={this.handleChange}
              />
  
            {inputs}
            <button
              type="button"
              onClick={this.handleNewIngredient}
              className="buttons"
            >
              +
            </button>
  
            <div className='recipe-form-line'>
              <label htmlFor='recipe-img-input'>Image Url</label>
              <input
                id='recipe-img-input'
                type='text'
                placeholder=''
                name='img'
                value={img}
                size={36}
                autoComplete='off'
                onChange={this.handleChange} />
            </div>
            <button
              type="submit"
              className="buttons"
              style={{alignSelf: 'flex-end', marginRight: 0}}
            >
              SAVE
            </button>
          </form>
        </div>
      );
    }
  }
 
export default RecipeForm;