import React, { Component } from 'react'
import {recipe} from '../tempDetails'
import styled from 'styled-components'

export default class RecipeDetails extends Component {
state = {
    recipe: recipe
}

async componentDidMount(){
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=3eaa94e85f5775bf82e086b5f263c24b&rId=${id}`;
    try {
        const data = await fetch(url);
        const jsonData = await data.json();
        this.setState({
            recipe: jsonData.recipe
        })
    } catch (error) {
      console.log(error);
    }
}

  render() {
      const {
        image_url, 
        publisher, 
        publisher_url, 
        source_url, 
        title, 
        ingredients} = this.state.recipe

        const {
            handleIndex
        } = this.props
      
    return (
        <RecipeDetailsWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <button 
                        type="button" 
                        className="btn btn-warning mb-5 text-capitalize"
                        onClick={() => handleIndex(1)}
                        >
                            zurück zur Liste der Rezepte
                        </button>
                        <img src={image_url} className="d-block w-100" alt="recipe"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">
                            {title}
                        </h6>
                        <h6 className="text-warning text-capitalize text-slanted published">
                            veröffentlicht von: {publisher}
                        </h6>
                        <a 
                        href={publisher_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-2 text-capitalize"
                        >zur Homepage</a>
                        <a 
                        href={source_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-success mt-2 text-capitalize mt-2 mx-3"
                        >recipe url</a>
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4 text-capitalize">
                                zutaten
                            </h2>
                            {
                                ingredients.map((item, index)=>{
                                    return(
                                        <li 
                                        key={index}
                                        className="list-group-item text-slanted">
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </RecipeDetailsWrapper>
    )
  }
}

const RecipeDetailsWrapper = styled.div `
.published{
    margin-bottom: 1rem;
}
`