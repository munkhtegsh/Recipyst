import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItems } from '../../ducks/reducer';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

const styles = {
  button: {
    padding: 0,
  },
}

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
        <div key={item.id} className="cart__items">
          <p className="cart__id"> {i + 1}. </p>
          <input style={styles.button} className="cart__name" type="text" value={item.name} name="name" onChange={(e) => this.handleInput(e, item.id)}/>
          <input className="cart__quantity" type="text" value={item.quantity} name="quantity" onChange={(e) => this.handleInput(e, item.id)}/>
          
          <IconButton style={{padding: '0'}} onClick={() => this.updateCart(item.id)} >
            <Edit  />
          </IconButton>

          <IconButton style={{padding: '0'}} className="cart__delete-btn" onClick={() => this.deleteItem(item.id)} >
            <DeleteForever />
          </IconButton>
        </div>
      )
    })

    return (
      <MuiThemeProvider>
        <div className="shoppingCart">
          <div className="cart__header">
            <h5> ID </h5>
            <h5 className="cart__ing__q"> INGREDIENTS </h5>
            <h5 className="cart__ing__q"> QUANTITY </h5>
            </div>
          { list }
          <div className="cart__bottom">
            <input name="name" type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="Item name here"/>
              <input className="cart__quantity" name="quantity" type="text" onChange={(e) => this.setState({quantity: e.target.value})} placeholder="1"/>
              <button onClick={() => {this.addItemToCart()}}>
              Add items
            </button>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, { getCartItems })(ShoppingCart);

