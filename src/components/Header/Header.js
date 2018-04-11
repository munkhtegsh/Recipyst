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
      profile_img: '',
      color: ''
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
    this.handleStyle();
  }

  handleStyle(e) {
    let moment = new Date();
    let today = moment.getDay();
      this.setState({day: today});
  }

  render () {
    return (
    <div className="header">
          <div className="header__top_menu">
            <img src={this.state.profile_img} 
              className="header__profile-img"
              alt="profile image"/>
            <div className="header__home__grocery">
              <h3>Home</h3>
              <h3>Grocery</h3>
            </div>
          </div>
          
          <div className="header__calendar" >
          <div className="header__calendar__7" 
            ref="7"
            onChange={(e) => this.handleStyle(e)}>
            7
          </div>

          <div className="header__calendar__1" 
            style={{color: this.state.day === 1 ? 'red' : 'black'}}
            ref="one" onChange={(e) => this.handleStyle(e)}>
            1
          </div>

          <div className="header__calendar__2" ref="2" 
            style={{color: this.state.day === 2 ? 'red' : 'black'}}
            onChange={(e) => this.handleStyle(e)}>
            <p>2</p>
          </div>

          <div className="header__calendar__3" 
            style={{color: this.state.day === 3 ? 'red' : 'black'}}
            ref="3" onChange={(e) => this.handleStyle(e)}>
            3
          </div>

          <div className="header__calendar__4" ref="4" onChange={(e) => this.handleStyle(e)}>
           4
          </div>

          <div className="header__calendar__5" ref="5" onChange={(e) => this.handleStyle(e)}>
            5
          </div>

          <div className="header__calendar__6" ref="6 onChange={(e) => this.handleStyle(e)}">
            6
          </div>
          </div>
        </div>
      )
    }
  }

export default connect(null, { createId })(Header);




   