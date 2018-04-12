import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Ingredients extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: []
    }
  }

  componentDidMount() {
    let { day } = this.props.match.params;
    axios.get(`/api/daily/di/${day}`).then(res => {
      console.log(res)
      let ingredients = res.data[0].ingredients;
      this.setState({ ingredients })
    });
  }

  // need image to load here 
  render() {
    let list = this.state.ingredients.map((item, i) => {
      return (
        <div key={i}>
          <p className='ingredients__p'>- { item.text }   Weight: { item.weight }</p>
        </div>
      )
    })

    return (
      <div className="ingredients">
      <button onClick={() => this.props.history.goBack()}>x</button>
        { list }
        <button> Cooking Instructions </button>

      </div>
      )
  }
}

export default Ingredients;
