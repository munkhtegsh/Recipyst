import React from 'react';
import { Link } from 'react-router-dom';
import favorite from './favorite.svg';
import search from './search.svg';
import weekly from './weekly.svg';

const Menu = () => {
  return (
    <div className="menu">
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