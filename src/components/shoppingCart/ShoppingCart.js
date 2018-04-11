import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      name: '',
      quantity: 1,
      obj: {}
    }
  };

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    axios.get('/api/cart').then(res => {
      let cart = res.data;
      this.setState({ cart });
    })
  }

  addItemToCart() {
    const item = {name: this.state.name, quantity: this.state.quantity}
    if (this.state.name) {
      axios.post('/api/cart', item).then(res => {
        this.getItem();
      }) 
    }
  }

  deleteItem(id) {
    axios.delete(`/api/cart/${id}`).then(res => {
      this.getItem();
    })  
  }

  updateCart(id) { // serious bug
    const item = {name: this.state.name, quantity: this.state.quantity}
    axios.put(`/api/cart/${id}`, item)
  }

  handleInput(e, id) {
    const newArr = this.state.cart.map((item, i) => {
    if (id === item.id) {
      item[e.target.name] = e.target.value;
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    return item;
    })

    this.setState({
      cart: newArr,
    }) 
  };

  render() {
    // console.log(this.state.obj)
    let list =  this.state.cart.map((item, i) => {
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
      <input name="quantity" type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="1"/>
      <button onClick={() => {this.addItemToCart()}}>
        Add items
      </button>
      </div>
    )
  }
}

export default ShoppingCart;

