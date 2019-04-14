import React, { Component } from 'react'
import styled from 'styled-components'

export default class Recipe extends Component {
  render() {
      const {
          image_url,
          title,
          source_url,
          publisher,
          recipe_id
    } = this.props.recipe
    const {handleDetails} = this.props
      
    return (
        <React.Fragment>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <CardWrapper>
                <div className="card">
                    <img 
                    src={image_url} 
                    className="img-card-top"
                    style={{height:"14rem"}}
                    alt="recipe"
                    />
                    <div className="card-body text-capitalize">
                        <h6>
                            {title}
                        </h6>
                        <h6 className="text-warning text-slanted">
                            von: {publisher}
                        </h6>
                        <div className="card-footer">
                            <button 
                            type="button"
                            className="btn btn-primary text-capitalize"
                            onClick={handleDetails}
                            >
                                details
                            </button>
                            <a 
                            className="btn btn-success mx-2 text-capitalize" 
                            href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="button">
                                webseite
                                <i 
                                style={{marginLeft: "5px", fontSize: ".9rem"}}
                                className="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </CardWrapper>
            </div>
        </React.Fragment>
    )
  }
}

const CardWrapper = styled.div`


`