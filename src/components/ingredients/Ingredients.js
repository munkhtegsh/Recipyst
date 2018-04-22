import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWeeklyItems, getFavoriteItem } from '../../ducks/reducer';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

let outside;
const style = {
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px',
  paddingLeft: '10px'
};

class Ingredients extends Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      buttonClicked: false
    }
  }

  // Adding item into weekly list
  addToWeeklyList = () => {
    let chosenItem = {...this.props.chosenItem, day: this.state.day}
    axios.post('/api/weekly', chosenItem).then(res => {
      this.props.getWeeklyItems()
    })
  }

  addToFavoriteList = () => {
    axios.post('/api/favorite', this.props.chosenItem).then(res => {
      this.props.getFavoriteItem();
    });
  }

  // Selecting days to weekly list
  handleSelected = () => {
    let day = this.refs.selectedDay.value;
    this.setState({ day })
    if (+day > 0) {
      this.setState({buttonClicked: true})
    }
  }
 
// need image to load here 
  render() {
    console.log(this.state.day)
    return (
      <MuiThemeProvider>
      <div className="ingredients">
        <div className="ingredients__container">
          {
            this.props.chosenItem.ingredients && 
            this.props.chosenItem.ingredients.map((item, i) => {
              return (
                <div key={i}>
                <Paper style={style} zDepth={1}>
                  <p className='ingredients__p'>- { item.text } {Number.parseFloat(item.weight).toFixed(2)}gr</p>
                </Paper>

                </div>
              )
            })
          }

          <div>
            <Link to="/weekly"><button onClick={() => this.addToWeeklyList()} disabled={!this.state.buttonClicked}> Weekly </button></Link>
            <select value={this.state.day} id="" ref="selectedDay" onChange={() => this.handleSelected()}>
              <option value="0" disabled="true">Select Day</option>
              <option value="7">Sun</option>
              <option value="1">Mon</option>
              <option value="2">Tue</option>
              <option value="3">Wed</option>
              <option value="4">Thu</option>
              <option value="5">Fri</option>
              <option value="6">Sat</option>
            </select>
          </div>
          <Link to="/favorite"><button onClick={() => this.addToFavoriteList()}> Favorite </button></Link>
        </div>
      </div>
      </MuiThemeProvider>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    chosenItem: state.chosenItem,
    userid: state.userid
  }
}

export default connect(mapStateToProps, { getWeeklyItems, getFavoriteItem })(Ingredients);
