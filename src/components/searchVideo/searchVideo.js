import React, { Component } from 'react';
import YoutubeSearch from 'youtube-search';
import Iframe from 'react-iframe';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

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
      <MuiThemeProvider>
      <div className="searchVideo">
        <TextField
          floatingLabelFocusStyle={{color: 'white'}}
          underlineFocusStyle={{borderColor:'white'}}

          fullWidth={false}
          floatingLabelText="Search food"
          onChange={this.handleChange.bind(this)}
        />
        <RaisedButton label="Search" style={style} 
        onClick={this.handleButton.bind(this)}
       />

        <Iframe 
          url={`https://www.youtube.com/embed/${this.state.id}`}
          width="100%"
          height="450px"
          id="myId"
          className="searchVideo__iframe"
          display="initial"
          position="relative"
          allowFullScreen
        />

      </div>
      </MuiThemeProvider>
    )
  }
}

export default SearchVideo;

// https://stackoverflow.com/questions/712459/how-to-get-rid-of-white-space-around-an-embed-element