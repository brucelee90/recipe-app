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
                            search for recipe with <strong className="text-danger">Food2Fork</strong>
                        </h1>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <label htmlFor="search" className="text-capitalize">
                                type recipe seperated by comma
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
                                    className="input-group-text bg-primary text-white"
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
