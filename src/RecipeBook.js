import React from 'react';
import Listing from './components/Listing';
import AddNew from './components/AddNew';
import axios from 'axios';

export default class RecipeBook extends React.Component {

    url='https://kern000-dwadrecipeapi-8y2igvhtk17.ws-us101.gitpod.io/'

    state={
        'active':'listing',
        data    :   [
                    {
                        '_id'   :1,
                        'title' :'Chicken Rice',
                        'ingredients':  [   
                                            'Chicken Broth',
                                            'Chicken',
                                            'Rice'
                                        ]
                    },
                    {   '_id'   :2,
                        'title' :'Duck Rice',
                        'ingredients':  [   
                                            'Duck',
                                            'Rice'
                                        ]                                        
                    }
                    ],
        newTitle:"",
        newIngredients:""
    }

    setActive = (page) => {
        this.setState({
            'active':page
        })
    }

    componentDidMount(){
        this.fetchData();
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
                    <Listing data={this.state.data}/>
                </React.Fragment>
            )
        } else if (this.state.active === "add") {
            return(
                <React.Fragment>
                    <AddNew newTitle={this.state.newTitle}
                            newIngredients={this.state.newIngredients}
                            onUpdateFormField={this.updateFormField}
                            onAddNew={this.addNew}
                    />
                </React.Fragment>
            )
        }
    }
    
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNew = async () => {
        try {
            let response=await axios.post(this.url + "recipes",
                {   
                                "title": this.state.newTitle,
                                "ingredients": this.state.newIngredients.split(",")
                }
            )

            this.setState({
                'data': [   ...this.state.data,
                            response.data[0]
                        ],
                'active':'listing'
            })

        } catch (error) {
            console.log('error adding recipe:', error)
        }
        

    }

    fetchData = async()=>{
        try{
            let response = await axios.get(this.url + "recipes")
            this.setState({
                data: response.data
            })
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
}

// Conditional Rendering.
// "aria-current" is an attribute in HTML that is used to indicate the current or active item within a set of related elements.
// arrow function to change active state needs to be above render function
// if not using actual backend and just saving in state, for addNew just use spread operator, clone and add in entry behind
// mdn .split(',') means split based on , returning the elements as indiv in an array (meaning separated by ,).

// https://github.com/kunxin-chor/dwad-recipe-api
// the base url is forked to git and then used to make gitpod link

// Encountering CORS error by using gitpod link as API
// while debugging, saw that preflight request is code 200 in network tab, but it is 401 response (something wrong with our request)
// No Access Control Origin - cannot cross origin access to gitpod
// proxy doesn't work
// may try localized .env file since the forked one does not have and codes rely on process.env Mongo URI which is defined inside






