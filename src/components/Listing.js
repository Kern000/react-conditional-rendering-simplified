
import React from 'react';
import axios from 'axios';

export default class Listing extends React.Component{

    url="https://3000-kern000-dwadrecipeapi-w4kazzgj7dv.ws-us102.gitpod.io/"

    state={
        data:[]
    }

    render(){
        return(
            <React.Fragment>
                <h1>Recipes</h1>
                {this.state.data.map(recipe=>
                    <React.Fragment key={recipe.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">
                                    {recipe.title}
                                </h3>
                                <h4> Ingredients </h4>
                                <ul>
                                    {recipe.ingredients.map(ingredient =>
                                        <li>
                                            {ingredient}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>)}
            </React.Fragment>
        )
    }

    async componentDidMount(){
        let response = await axios.get(this.url + 'recipes');
        this.setState({
            data: response.data          
        })
    }
}
