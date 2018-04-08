import React, { Component } from 'react';
import axios from 'axios';
import Nodata from '../item/Nodata';
import { connect } from 'react-redux';
import { getWeeklyItems } from '../../ducks/reducer';

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
    return (
      <div className='weekly'>
      {
        this.props.weeklyFoodList &&
        this.props.weeklyFoodList.map((item, i) => {
          return (
            <div key={item.id}>
              <p>Food title: {item.food_name}</p>
              <img src={item.food_img} alt=""/>
              <p>Ingredients: {item.ingredient_number}</p>
              <p>Calories: {item.calories}</p>
            </div>
          )
        })
      }
      </div>
    )
  }
}

// ?
// <Nodata/>
// :


const mapStateToProps = (state) => {
  return {
    userid: state.userid,
    weeklyFoodList: state.weeklyFoodList
  }
}

export default connect(mapStateToProps, { getWeeklyItems })(Weekly);

