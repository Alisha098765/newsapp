import React, { Component } from 'react'
//import PropTypes from "prop-types";

export default class NewsItems extends Component {
    render() {
        let {title, description} = this.props;
    return (
        <div>
            
            

            <div className="card" style={{ width: "18rem"}}>
  < img className = "card-img-top"
  src = "https://i.insider.com/5cd302a2f06717708c0f9e97?width=1200&format=jpeg"
   alt="....
  " />
  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      </div>
    )
  }
}
