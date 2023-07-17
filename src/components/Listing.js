import React from 'react';

export default function Listing(props){
    return(
        <React.Fragment>
            <h1> Recipes </h1>
            {props.data.map(recipe =>
                <React.Fragment key={recipe.id}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">
                                {recipe.title}
                            </h3>
                            <h4>
                                Ingredients
                            </h4>
                            <ul>
                                {recipe.ingredients.map(ingredient =>
                                    <li key={ingredient}>
                                        {ingredient}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}