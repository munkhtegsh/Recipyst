import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Ingredients extends Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      buttonClicked: false
    }
  }

  addToWeeklyList = () => {
    let chosenItem = {...this.props.chosenItem, day: this.state.day}
    axios.post('/api/weekly', this.props.chosenItem).then(res => {
      return res.data[0];
    });
  }

  addToFavoriteList = () => {
    axios.post('/api/favorite', this.props.chosenItem).then(res => {
      return res.data[0];
    });
  }

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
      <Link to='/searchFood'><button>x</button></Link>
        {
          this.props.chosenItem.ingredients && 
          this.props.chosenItem.ingredients.map((item, i) => {
            return (
              <div key={i}>
                <p className='ingredients__p'>{ i + 1 }. { item.text }</p>
                <p className='ingredients__p'>Weight: { item.weight }</p>
              </div>
            )
          })
        }

        <div>
          <button onClick={() => this.addToWeeklyList()} disabled={!this.state.buttonClicked}> Weekly </button>
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

export default connect(mapStateToProps)(Ingredients);
