import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      day: 1
    }
  }
  
  render () {
    return (
      <div className="header">
        <div className="header__top_menu">
          <div className="header__home__grocery">
            <h3>Home</h3>
            <h3>Grocery</h3>
          </div>
          <img src="" alt="profile image"/>
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

export default Header;