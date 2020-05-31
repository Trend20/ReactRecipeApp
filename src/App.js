import React, { Component } from 'react';
import './App.css';

import recipes from './assets/recipes.json';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import Navbar from './components/nav/Navbar';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      recipes,
      showForm: false,
    }
  }

  handleSave = (recipe) =>{
    this.setState((prevState, props) =>{
      const recipes = [recipe, ...prevState.recipes];
      return {
        recipes,
        showForm: false
      };
    });
  }
  render() { 
    const { showForm } = this.state;
    return (
      <div>
        <Navbar newRecipe={() =>this.setState({showForm: true})}/>
        {
          showForm ? 
          <RecipeForm 
            handleSave={this.handleSave}
            onClose={() =>this.setState({showForm: false})}
          />
          :null
        }
        <RecipeList {...this.state}/>
      </div>
    );
  }
}
 
export default App;