import React, { Component } from 'react';
import axios from 'axios';
import { createId } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      day: 1,
      userid: 0,
      username: '',
      profile_img: ''
    }
  }

  componentDidMount() { //redux is breaking, because of devtool ext
    axios.get('/api/userinfo').then(res => {
      this.setState({
        userid: res.data[0].id,
        username: res.data[0].username,
        profile_img: res.data[0].profile_img
      })
    })
  }
  
  render () {
    this.props.createId(this.state.userid);

    return (
      <div className="header">
        <div className="header__top_menu">
          <div className="header__home__grocery">
            <h3>Home</h3>
            <h3>Grocery</h3>
          </div>
          <img src={this.state.profile_img} width='50' alt="profile image"/>
        </div>
        <div className="header__calendar">
          <div className="header__calendar__7">
            <h4>S</h4>
            <h4>7</h4>
          </div>

          <div className="header__calendar__1">
            <h4>M</h4>
            <h4>1</h4>
          </div>

          <div className="header__calendar__2">
            <h4>T</h4>
            <h4>2</h4>
          </div>

          <div className="header__calendar__3">
            <h4>W</h4>
            <h4>3</h4>
          </div>

          <div className="header__calendar__4">
            <h4>T</h4>
            <h4>4</h4>
          </div>

          <div className="header__calendar__5">
            <h4>F</h4>
            <h4>5</h4>
          </div>

          <div className="header__calendar__6">
            <h4>S</h4>
            <h4>6</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { createId })(Header);