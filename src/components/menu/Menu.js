import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import favorite from './favorite.svg';
import search from './search.svg';
import weekly from './weekly.svg';
import backArrow from './backArrow.svg';
import ChatRoom from '../chat/ChatRoom';
import chat from './chat.svg';


class Menu extends Component {
  constructor() {
    super();
    this.state = {
      toggle: undefined
    }
  }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <div className="menu">
        {
          !!this.state.toggle
          ?
          <ChatRoom toggle={() => this.toggle()}/>
          :
          null
        }
        <div className="menuBottom">
          <img src={backArrow} width="40" alt="" onClick={() => window.history.back()}/>
    
          <Link to='/favorite'>
            <img src={favorite} width="40" alt=""/>
          </Link>
    
          <Link to='/searchFood'>
            <img src={search} width="40" alt=""/>
          </Link>
    
          <Link to='/weekly'>
            <img src={weekly} width="40" alt=""/>
          </Link>

          <img src={chat} width="40" alt="" onClick={() => this.toggle()}/>
        </div>
      </div>
    )
  }
}




export default Menu;

// const Menu = (props) => {
//   return (
//     <div className="menu">
//       <img src={backArrow} width="40" alt="" onClick={() => window.history.back()}/>

//       <Link to='/favorite'>
//         <img src={favorite} width="40" alt=""/>
//       </Link>

//       <Link to='/searchFood'>
//         <img src={search} width="40" alt=""/>
//       </Link>

//       <Link to='/weekly'>
//         <img src={weekly} width="40" alt=""/>
//       </Link>
//     </div>
//   )
// }

// export default Menu;