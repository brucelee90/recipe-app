import React, { Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
  render() {

    const {recipes, 
        value, 
        handleDetails,
        handleChange, 
        handleSubmit,
        error
    } = this.props
    

    return (
        <React.Fragment>
            <RecipeSearch 
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />

                <div className="container my-5">
                    <div className="row">
                        {/* title */}
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Liste der rezepte</h1>
                        </div>
                    </div>
                    <div className="row">
                    {error?<h1 className="text-danger text-center">{error}</h1>:
                        
                            recipes.map(recipe => {
                                return(
                                    <Recipe
                                    key={recipe.recipe_id}
                                    recipe={recipe}
                                    handleDetails={()=>handleDetails(0, recipe.recipe_id)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
        </React.Fragment>
    )
  }
}
