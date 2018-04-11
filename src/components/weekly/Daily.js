import React, { Component } from 'react';
import axios from 'axios';

class Daily extends Component { 
  constructor() {
    super();
    this.state = {
      item: {}
    }
  };

   componentDidMount() {
    const id = +this.props.match.params.id + 1;
    let item = axios.get(`/api/daily/${id}`)
      .then(item => {
        item = item.data[0];
        this.setState({ item })
      })
  }

  render() {
    return (
      <div className='daily'>
        <h3>{this.state.item.food_name}</h3>
        <img src={this.state.item.food_img} 
          className="daily__img"
          alt="food image"/>
        <p>Ingredients: {this.state.item.ingredient_number}</p>
        <p>Calories: {this.state.item.calories}</p>    
      </div>
    )
  }
}

export default Daily;

