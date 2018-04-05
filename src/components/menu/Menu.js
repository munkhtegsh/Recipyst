import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <Link to='/searchFood'><h3> Search </h3></Link>
      <Link to='/favorite'><h3> Love </h3></Link>
      <Link to='/timer'><h3> Timer </h3> </Link>
      <Link to=''><h3> Settings </h3></Link>
      <a href="http://localhost:4000/auth/logout"> 
        <button>Logout</button>
      </a>
    </div>
  )
}

export default Menu;