import React, { Component } from 'react';
import './App.css';
import router from './router';
import Header from './components/Header/Header';
import Menu from './components/menu/Menu';
import 'normalize.css';
import './styles/style.css';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <div className="App" >
      { this.props.location.pathname === '/' || this.props.location.pathname === '/home' 
        ? null : <Header /> }

      { router }

      { this.props.location.pathname === '/' || this.props.location.pathname === '/home' 
        ? null : <Menu />}
      </div>
    );
  }
}

export default withRouter(App);
