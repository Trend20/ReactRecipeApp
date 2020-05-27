import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RecipeForm from './components/RecipeForm';
 
class App extends Component {
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
        }
      </div>
    );
  }
}
 
export default App;