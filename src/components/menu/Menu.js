import React from 'react';
import { Link } from 'react-router-dom';
import favorite from './favorite.svg';
import search from './search.svg';
import weekly from './weekly.svg';
import backArrow from './backArrow.svg';

const Menu = (props) => {
  return (
    <div className="menu">
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
    </div>
  )
}

export default Menu;