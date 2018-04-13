import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Daily extends Component { 
  constructor() {
    super();
    this.state = {
      item: {},
      ingredients: []
    }
  };

   componentDidMount() {
    const day = +this.props.match.params.day;
    let item = axios.get(`/api/daily/${day}`)
      .then(item => {
        if (item.data[0]) {
          item = item.data[0];
          let ingredients = item.ingredients;
          this.setState({ item, ingredients });
        }
      })
  }

  render() {

    // getting ingredients
    let list = this.state.ingredients.map((item, i) => {
      return (
        <div key={i}>
          <p className="daily__p">- {item.text} {item.weight} g</p>
        </div>
      )
    });

    return (
      <div className='daily'>
        {
          Object.keys(this.state.item).length > 0
          ?
          <div>
            <h3>{this.state.item.food_name}</h3>
              <Link to={`/daily/di/${this.props.match.params.day}`}>
              <img src={this.state.item.food_img} 
                className="daily__img"
                alt="food image"/>
              </Link>
            <p>Ingredients: {this.state.item.ingredient_number}</p>
            <p>Calories: {this.state.item.calories}</p> 
            <a href={this.state.item.url}><button>  Cooking Instructions </button></a>
            <Link to={`/daily/di/${this.props.match.params.day}`}><button>  Nutrein info </button></Link>
            { list }
          </div>
          :
          "YOU HAVEN't CHOOSE FOOD TODAY YET!"
        }
      </div>
    )
  }
}

export default Daily;

  