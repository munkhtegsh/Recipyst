import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWeeklyItems } from '../../ducks/reducer';
import axios from 'axios';

// sort the weekly list by the date and show the date
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
      return res.data[0];
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
      <div className="ingredients">
      <button onClick={() => this.props.history.goBack()}>x</button>
        {
          this.props.chosenItem.ingredients && 
          this.props.chosenItem.ingredients.map((item, i) => {
            return (
              <div key={i}>
                <p className='ingredients__p'>- { item.text }</p>
                <p className='ingredients__p'>Weight: { item.weight }</p>
              </div>
            )
          })
        }

        <div>
          <Link to="/weekly"><button onClick={() => this.addToWeeklyList()} disabled={!this.state.buttonClicked}> Weekly </button></Link>
          <select value={this.state.day} id="" ref="selectedDay" onChange={() => this.handleSelected()}>
            <option value="0" disabled="true">Select Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <button onClick={() => this.addToFavoriteList()}> Favorite </button>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    chosenItem: state.chosenItem,
    userid: state.userid
  }
}

export default connect(mapStateToProps, { getWeeklyItems })(Ingredients);
