// this exercise teach the 'poorer' way to structure react
// editing the previous exercise to become inefficient code
// rather than lifting the state, each component have their own state and methods
// now whenever going between tabs will have to fetch the data again - putting load on server

import React from 'react';
import Listing from './components/Listing';
import AddNew from './components/AddNew';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RecipeBook extends React.Component {

    state={
        'active':'listing',
    }

    setActive = (page) => {
        this.setState({
            'active':page
        })
    }

    render(){
        return(
        <React.Fragment>
            <div className="Container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" 
                                aria-current="page" 
                                onClick={()=>{
                                    this.setActive("listing")
                                }}
                        >
                        Recipes
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link"
                                onClick={()=>{
                                    this.setActive("add")
                                }}
                        >
                            Add New
                        </button>
                    </li>
                </ul>
                {this.renderContent()}
            </div>
        </React.Fragment>
    )} 

    renderContent(){
        if(this.state.active === "listing"){
            return(
                <React.Fragment>
                    <Listing/>
                </React.Fragment>
            )
        } else if (this.state.active === "add") {
            return(
                <React.Fragment>
                    <AddNew setActive={this.setActive}
                    />
                </React.Fragment>
            )
        }
    }
}

