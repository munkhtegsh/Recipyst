import React, { Component } from 'react';
import YoutubeSearch from 'youtube-search';

class SearchVideo extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      id: null,
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleButton = () => {
    let opts = {
      maxResults: 1,
      key: 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA'
    }

    YoutubeSearch(this.state.search, opts, (err, results) => {
      // console.log(process.env.YOUTUBE_API_KEY) //??
      if(err) return console.log(err);
      this.setState({
        id: results[0].id,
        title: results[0].title
      });
    })
  }

  render() {
    return (
      <div className="searchVideo">
        <input type="text" placeholder="Search" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleButton.bind(this)}>search</button>
        <h4> { this.state.title } </h4>
        <object height="60vh" width="80%"> {/* Make sure that the height and width value in the iframe, object and embed element the same is.*/}
          <iframe  style={{border: 0, width: "80%", height: "60vh"}}
            src={`https://www.youtube.com/embed/${this.state.id}`}>
          </iframe>
        </object>
      </div>
    )
  }
}

export default SearchVideo;

// https://stackoverflow.com/questions/712459/how-to-get-rid-of-white-space-around-an-embed-element