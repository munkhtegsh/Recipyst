import React, { Component } from 'react';
import axios from 'axios';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bag from './bag.svg'
import open from './nav-open-table.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DrawerOpenRightExample from './Drawer';
import yellow_pencil from './yellow_pencil.svg';
import paper_pencil from './paper_pencil.svg'; // ask which one is better ?

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      userid: this.props.id,
      username: this.props.username,
      profile_img: this.props.profile_img,
      color: '',
      toggle: false
    }
  }

  componentDidMount() { //redux is breaking, because of devtool ext
    this.props.getUserInfo();
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

  render () {
    return (
    <MuiThemeProvider>
    <div className="header">
          <div className="header__top_menu">
            <img src={this.state.profile_img} 
              className="header__profile-img"
              alt="profile image"/>
            <div className="header__home__grocery">
              <Link to="/quickPicker"><img src={yellow_pencil} width="35" alt=""/></Link>
              <Link to="/shoppingcart"><img src={bag} width="35" alt=""/></Link>
              <img className='header__open-menu' src={open} width="35" alt="" onClick={() => this.toggleClick()}/>
            </div>
          </div>

          <DrawerOpenRightExample toggle={this.state.toggle} toggleClick={() => this.toggleClick()}/>
          
          <div className="header__calendar" >
          <Link to="/daily/7">
            <div className="header__calendar__7" 
              style={{color: this.state.day === 0 ? "#2DBE60" : "rgb(73, 61, 61)"}}
              ref="7"
              onChange={(e) => this.handleStyle(e)}>
              Sun
            </div>
          </Link>

          <Link to="/daily/1" >
            <div className="header__calendar__1" 
              style={{color: this.state.day === 1 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              ref="one" onChange={(e) => this.handleStyle(e)}>
              Mon
            </div>
          </Link>

          <Link to="/daily/2" >
            <div className="header__calendar__2" ref="2" 
              style={{color: this.state.day === 2 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              onChange={(e) => this.handleStyle(e)}>
              Tue
            </div>
          </Link>

          <Link to="/daily/3" >
            <div className="header__calendar__3" 
              style={{color: this.state.day === 3 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              ref="3" onChange={(e) => this.handleStyle(e)}>
              Wed
            </div>
          </Link>

          <Link to="/daily/4" >
            <div className="header__calendar__4" 
              style={{color: this.state.day === 4 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              ref="4" onChange={(e) => this.handleStyle(e)}>
              Thu
            </div>
          </Link>

          <Link to="/daily/5" >
            <div className="header__calendar__5" 
              style={{color: this.state.day === 5 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              ref="5" onChange={(e) => this.handleStyle(e)}>
              Fri
            </div>
          </Link>

          <Link to="/daily/6" >
            <div className="header__calendar__6" 
              style={{color: this.state.day === 6 ? '#2DBE60' : 'rgb(73, 61, 61)'}}
              ref="6" onChange={(e) => this.handleStyle(e)}>
              Sat
            </div>
          </Link>
          </div>
        </div>
      </MuiThemeProvider>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    id: state.userInfo.id,
    username: state.userInfo.username,
    profile_img: state.userInfo.profile_img
  }
}

export default connect(mapStateToProps, { getUserInfo })(Header);




