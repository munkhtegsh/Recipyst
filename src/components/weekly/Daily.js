import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Daily extends Component { 
  constructor() {
    super();
    this.state = {
      item: {}
    }
  };

   componentDidMount() {
    const day = +this.props.match.params.day;
    console.log(this.props.match.params.day)
    let item = axios.get(`/api/daily/${day}`)
      .then(item => {
        item = item.data[0];
        this.setState({ item })
      })
  }

  render() {
    return (
      <div className='daily'>
      <Link to={`/daily/di/${this.props.match.params.day}`}>
        <h3>{this.state.item.food_name}</h3>
        <img src={this.state.item.food_img} 
          className="daily__img"
          alt="food image"/>
        <p>Ingredients: {this.state.item.ingredient_number}</p>
        <p>Calories: {this.state.item.calories}</p> 
      </Link>
      </div>
    )
  }
}

export default Daily;

  