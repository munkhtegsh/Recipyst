import React, { Component } from 'react';
import axios from 'axios';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chosenItem } from '../../ducks/reducer';

class SearchFood extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      food: []
    }
  }

  getFood() {
    axios.get(`https://api.edamam.com/search?q=${this.state.search}&app_id=be99730b&app_key=83ce0b8963a7cb51a02cbbcdaed58f50`)
    .then(weeklyList => {
      let food = weeklyList.data.hits
      this.setState({ food });
    });
  }

  render() {
    console.log(this.state.food)
    let foodList = this.state.food.map((item, i) => {
      return (
        <Link to={`/ingredients/${i}`} key={i}             
        onClick={() => this.props.chosenItem(item.recipe)} >
          <Item  
            image={item.recipe.image}
            label={item.recipe.label}
            calories={parseInt(item.recipe.calories)}
            ingredients={item.recipe.ingredients}
            id={i}
          />
        </Link>
      )
    })

    return (
      <div className="searchFood">
        <input type="text" placeholder="Food name here" onChange={(e) => this.setState({search: e.target.value})}/>
        <button onClick={() => this.getFood()}> Search </button>
        { foodList }
      </div>
    )
  }
}

export default connect(null, { chosenItem })(SearchFood);