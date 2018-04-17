import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItems } from '../../ducks/reducer';
import axios from 'axios';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      name: '',
      quantity: 1,
    }
  };

  componentDidMount() {
    this.props.getCartItems();
  }

  addItemToCart() {
    const item = {name: this.state.name, quantity: this.state.quantity}
    if (this.state.name) {
      axios.post('/api/cart', item).then(res => {
        this.props.getCartItems();
      }) 
    }
  }

  deleteItem(id) {
    axios.delete(`/api/cart/${id}`).then(res => {
      this.props.getCartItems();
    })  
  }

  updateCart(id) { // serious bug
    const item = {name: this.state.name, quantity: this.state.quantity}
    axios.put(`/api/cart/${id}`, item)
  }

  handleInput(e, id) {
    const newArr = this.props.cart.map((item, i) => {
    if (id === item.id) {
      item[e.target.name] = e.target.value;
      // this.setState({
      //   [e.target.name]: e.target.value
      // })
    }
    return item;
    })

    this.setState({
      [e.target.name]: e.target.value
    })

    this.setState({
      cart: newArr,
    }) 
  };

  render() {
    let list =  this.props.cart.map((item, i) => {
      return (
        <div key={item.id}>
          <input type="text" value={item.name} name="name" onChange={(e) => this.handleInput(e, item.id)}/>
          <input type="text" value={item.quantity} name="quantity" onChange={(e) => this.handleInput(e, item.id)}/>
          <button onClick={() => this.updateCart(item.id)}>Edit</button>
          <button onClick={() => this.deleteItem(item.id)}>Delete</button>
        </div>
      )
    })

    return (
      <div className="shoppingCart">
      { list }
      <input name="name" type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="Item name here"/>
      <input name="quantity" type="text" onChange={(e) => this.setState({quantity: e.target.value})} placeholder="1"/>
      <button onClick={() => {this.addItemToCart()}}>
        Add items
      </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, { getCartItems })(ShoppingCart);

