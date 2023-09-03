import React, { Component } from 'react'
//import PropTypes from "prop-types";

export default class NewsItems extends Component {
    render() {
        let {title, description , imgUrl , url} = this.props;
    return (
        <div className = "container my-3">
            
            

            <div className="card" style={{ width: "18rem"}}>
  < img className = "card-img-top"
  src = {imgUrl}
   alt="....
  " />
  <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
    <a href={url} target = "blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
        
      </div>
    )
  }
}
