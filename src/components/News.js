import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
      return (
        
      <div class = "container my-5">
            <h1> Monkey News </h1>

            <div className="row">
            <div className="col-6 col-md-4">
                <NewsItems title="title" description="desc" />
            </div>

            <div className="col-6 col-md-4">
                <NewsItems title="title" description="desc" />
            </div>
        
           <div className="col-6 col-md-4">
                <NewsItems title="title" description="desc" />
            </div>

              </div>   
           </div>   
               
              
        )
  }
}
