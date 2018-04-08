import React, { Component } from 'react';
import Nodata from '../item/Nodata';
import { getFavoriteItem } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFood: []
    }
  }

  componentDidMount() {
    this.props.getFavoriteItem();
  }

  render() {
    return (
      <div className='favorite'>
        {
          this.props.favoriteFoodList && 
          this.props.favoriteFoodList.map((food, i) => {
            return (
              <div key={food.id}>
                <img src={food.food_img} alt="food image"/>
                <p> Food name: {food.food_name}</p>
                <p> Ingredients: {food.ingredient_number}</p>
                <p> Calories: {food.calories}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList
  }
}

export default connect(mapStateToProps, { getFavoriteItem })(Favorite);

// ?
// <Nodata/>
// :
// 'HELLO'