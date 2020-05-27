import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
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