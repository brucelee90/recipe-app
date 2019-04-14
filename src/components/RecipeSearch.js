import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {value, handleChange, handleSubmit} = this.props
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            Suchen Sie nach allen Rezepten mit <strong className="text-warning">Food2Fork</strong>
                        </h1>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <label htmlFor="search" className="text-capitalize">
                                Suchen sie nach Rezepten (nur auf englisch)
                            </label>
                            <div className="input-group">
                                <input
                                type="search" 
                                placeholder="chicken, onions, carrots, etc..."
                                className="form-control"
                                value={value}
                                onChange={handleChange}
                                />
                                <div className="input-group-append">

                                    <button
                                    type="submit"
                                    className="btn btn-primary outline"
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
  }
}