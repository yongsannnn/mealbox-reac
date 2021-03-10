import React from "react"
import axios from "axios"

const baseURL = "https://3001-bronze-barnacle-pdcp8mf3.ws-us03.gitpod.io"


export default class ViewAll extends React.Component {
    state = {
        recipesList: [],
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/recipes");
        this.setState({
            recipesList: response.data
        })
    }

    renderList = () => {
        let list = [];
        for (let l of this.state.recipesList) {
            list.push(
                <div className="box col-12 p-2 mt-2" key={l._id}>
                    <div className="image-container col-12 col-md-4">
                        <img src={l.resource.img_url} className="test-img" alt="recipe"></img>
                    </div>
                    <div className="des-container col-12 col-md-8 mt-2">
                        <h4>{l.recipe_name}</h4>
                        <p>{l.description}</p>
                        <p>By: <strong>{l.created_by}</strong></p>
                        <div className="des-buttons">
                            <button className="btn action-buttons btn-success">Edit</button>
                            <button className="btn action-buttons btn-danger ml-2">Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        return list
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero-img">
                    <div className="cover-overlay"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <h1 className="col-12" style={{
                            textAlign: "center"
                        }}>View All
                        </h1>


                    </div>
                    <div className="filter-bar">
                        <input type="text" className="form-control my-1 mx-sm-2" name="search-field" placeholder="Search Recipe Name" />
                        <select className="form-control cuisine-bar my-1 mx-sm-2" name="cuisine_type" value={this.state.cuisine_type}>
                            <option defaultValue>Cuisine Type</option>
                            <option>Show All</option>
                            <option>American</option>
                            <option>Chinese</option>
                            <option>Italian</option>
                            <option>Japanese</option>
                        </select>
                        <select className="form-control difficulty-bar my-1 mx-sm-2" name="difficulty" value={this.state.cuisine_type} >
                            <option defaultValue>Difficulty Level</option>
                            <option>Show All</option>
                            <option>Easy</option>
                            <option>Moderate</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    {this.renderList()}
                </div>
            </React.Fragment>
        )
    }
}