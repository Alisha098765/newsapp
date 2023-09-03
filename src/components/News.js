import React, { Component } from 'react';
import NewsItems from './NewsItems';

class News extends Component {
  constructor() {
    super();
    console.log("this is my first constructor");
    this.state = {
      articles:[],
      loading: false
    }
  }

  async componentDidMount() {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2582cb97e95640cb982af2bff3a9751d';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      this.setState({ articles: jsonData.articles});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h3>Monkey News Top-Headlines</h3>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-6 col-md-4" key={`${element.url}-${index}`}>
              <NewsItems
                title={element.title}
                description={element.description ? element.description : 'No description available'}
                imgUrl={element.urlToImage}
                url={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;