import React, { Component } from 'react';
import axios from 'axios';
import { createId } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bag from './bag.svg'
import open from './nav-open-table.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerOpenRightExample from './Drawer';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      day: 1,
      userid: 0,
      username: '',
      profile_img: '',
      color: '',
      toggle: false
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

  toggleClick = () => {
    this.setState({toggle: !this.state.toggle});
  }

  handleClick() {
  }

  render () {
    console.log(this.state.day)
    return (
    <MuiThemeProvider>
    <div className="header">
          <div className="header__top_menu">
            <img src={this.state.profile_img} 
              className="header__profile-img"
              alt="profile image"/>
            <div className="header__home__grocery">
              <Link to="/shoppingcart"><img src={bag} width="40" alt=""/></Link>
              <img className='header__open-menu' src={open} width="40" alt="" onClick={() => this.toggleClick()}/>
            </div>
          </div>

          <DrawerOpenRightExample toggle={this.state.toggle} toggleClick={() => this.toggleClick()}/>
          
          <div className="header__calendar" >
          <Link to="/daily/7">
            <div className="header__calendar__7" 
              style={{color: this.state.day === 1 ? "#2196F3" : "#2DBE60"}}
              ref="7"
              onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Sun
            </div>
          </Link>

          <Link to="/daily/1" >
            <div className="header__calendar__1" 
              style={{color: this.state.day === 1 ? 'red' : '#2DBE60'}}
              ref="one" onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Mon
            </div>
          </Link>

          <Link to="/daily/2" >
            <div className="header__calendar__2" ref="2" 
              style={{color: this.state.day === 2 ? 'red' : '#2DBE60'}}
              onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Tue
            </div>
          </Link>

          <Link to="/daily/3" >
            <div className="header__calendar__3" 
              style={{color: this.state.day === 3 ? 'red' : '#2DBE60'}}
              ref="3" onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Wed
            </div>
          </Link>

          <Link to="/daily/4" >
            <div className="header__calendar__4" 
              style={{color: this.state.day === 4 ? 'red' : '#2DBE60'}}
              ref="4" onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Thu
            </div>
          </Link>

          <Link to="/daily/5" >
            <div className="header__calendar__5" 
              style={{color: this.state.day === 5 ? 'red' : '#2DBE60'}}
              ref="5" onChange={(e) => this.handleStyle(e)}
              onClick={() => window.location.reload()}>
              Fri
            </div>
          </Link>

          <Link to="/daily/6" >
            <div className="header__calendar__6" 
              style={{color: this.state.day === 6 ? 'red' : '#2DBE60'}}
              ref="6 onChange={(e) => this.handleStyle(e)}"
              onClick={() => window.location.reload()}>
              Sat
            </div>
          </Link>
          </div>
        </div>
      </MuiThemeProvider>
      )
    }
  }

export default connect(null, { createId })(Header);




