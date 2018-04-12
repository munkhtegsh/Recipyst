import React, { Component } from 'react';
import axios from 'axios';
import Nodata from '../item/Nodata';
import { connect } from 'react-redux';
import { getWeeklyItems } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Weekly extends Component {
  constructor() {
    super();
    this.state = {
      weeklyList: []
    }
  }

  componentDidMount() {
    this.props.getWeeklyItems();
    // this.setState({weeklyList: this.props.weeklyFoodList})
    // how can i use render more dynamic? rather using &&
  }

  render() {
    let list = this.props.weeklyFoodList.map((item, i) => {
      return (
        <Link key={i} to={`/daily/${item.day}`}>
          <div className="weekly__item">
              <img src={item.food_img}
                className="weekly__img" 
                alt=""
              />
            <div className="weekly__food-name">
              <p>Day: {item.day}: {item.food_name}</p>
              <p>Calories: {item.calories}</p>
            </div>
          </div>
        </Link>
      )
    });

    return (
      <div className='weekly'>
        { list }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userid: state.userid,
    weeklyFoodList: state.weeklyFoodList
  }
}

export default connect(mapStateToProps, { getWeeklyItems })(Weekly);


// { this.props.weeklyFoodList }
// ?
//   { list }
// :
//   <Nodata/>


// <p>Calories: {item.calories}</p>
