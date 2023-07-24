import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeBook from './RecipeBook';

export default function App(){
  return(
    <React.Fragment>
      <div className="container">
        <h2>Recipe Book</h2>
        <RecipeBook/>
      </div>
    </React.Fragment>
  )
}

