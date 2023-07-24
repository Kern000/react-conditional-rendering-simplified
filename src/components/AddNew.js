import React from "react";
import axios from "axios";

export default class AddNew extends React.Component{

    url="https://3000-kern000-dwadrecipeapi-w4kazzgj7dv.ws-us102.gitpod.io/"

    state={
        "newTitle":"",
        "newIngredients":""
    };

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNew = async() => {
        let response = await axios.post(this.url + "recipes", {
            title: this.state.newTitle,
            ingredients: this.state.newIngredients.split(",")
        })
        this.props.setActive("listing");
    }
        
    render(){
        return(
            <React.Fragment>
                <h1> Add New Recipe </h1>
                <div>
                    <div className="label"> Title </div>
                    <input  type="text"
                            className="form-control"
                            name="newTitle" 
                            value={this.state.newTitle}
                            onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <div className="label">Ingredients</div>
                    <input  type="text"
                            className="form-control"
                            name="newIngredients"
                            value={this.state.newIngredients}
                            onChange={this.updateFormField}
                    />
                </div>
                <button className="btn btn-primary mt-3"
                        onClick={this.addNew}
                > Add New
                </button>
            </React.Fragment>
        )
    }
}