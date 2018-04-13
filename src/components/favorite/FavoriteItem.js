import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavoriteItem} from '../../ducks/reducer';

class FavoriteItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      food: {},
      ingredients: []
    }
  }

  componentDidMount() {
    this.props.getFavoriteItem().then(res => {
      let { id } = this.props.match.params;
      this.setState({
        food: this.props.favoriteFoodList[id],
        ingredients: this.props.favoriteFoodList[id].ingredients
      })
    })
  }

  render() {
    const list = this.state.ingredients.map((item, i) => {
      return (
        <div key={i}>
          <p className="daily__p"> {item.text} {item.weight} </p>  
        </div>
      )
    })

    return (
      <div className='daily'>
        <h3>{this.state.food.food_name}</h3>
          <Link to="/">
          <img src={this.state.food.food_img} 
            className="daily__img"
            alt="food image"/>
          </Link>
        <p>Ingredients: {this.state.food.ingredient_number}</p>
        <p>Calories: {this.state.food.calories}</p> 
        <a href={this.state.food.url}><button>  Cooking Instructions </button></a>
        <button>  Nutrein info </button>
        { list }
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList
  }
}

export default connect(mapStateToProps, { getFavoriteItem })(FavoriteItem)

