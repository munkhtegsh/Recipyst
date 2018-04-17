import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getWeeklyItems, getFavoriteItem, getUserInfo, getCartItems} from '../../ducks/reducer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserInfo();
    this.props.getWeeklyItems();
    this.props.getFavoriteItem();
    this.props.getCartItems();
    // should be cart item from redux, but redux doesn't have it
  }

  render() {
    return (
      <div>
        <Link to='/weekly'> Dinner tonight </Link>
        <Link to='/favorite'> Favorite food </Link>
        <Link to='/searchFood'> Search food </Link>
        <Link to='/searchVideo'> Search Video </Link>
        <Link to='/timer'> Timer </Link>
        <Link to='/shoppingList'> Shopping List </Link>
      </div>
    )
  }
}

const actionCreators = {
    getWeeklyItems, 
    getFavoriteItem,
    getUserInfo,
    getCartItems
}
export default connect(null, actionCreators)(Home);
