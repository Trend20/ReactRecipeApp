import React, {Component} from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  recipes = recipes.map((r,index) => (
    <Recipe key={index} {...r} />
  ));
  
  return (
    <div className="recipe-list">
      {recipes}
    </div>
  );
};

export default RecipeList;