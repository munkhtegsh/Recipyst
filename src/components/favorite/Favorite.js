import React, { Component } from 'react';
import Nodata from '../item/Nodata';
import { getFavoriteItem } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  deleteItem = (id) => {
    axios.delete(`/api/favorite/${id}`);
    this.props.getFavoriteItem();
  }

  render() {
    return (
      <div className='favorite'>
        {
          this.props.favoriteFoodList && 
          this.props.favoriteFoodList.map((food, id) => {
            return (
              <div key={food.id}>
                <Link to={`/favorite/${id}`} key={food.id}>
                  <div  className="favorite__box">
                  <img src={food.food_img} alt="food image" className="favorite__img"/>
                  </div>
                </Link>
                <button onClick={() => this.deleteItem(food.id)}>delete</button>
                <p> {food.food_name}</p>
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