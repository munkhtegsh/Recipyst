import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/weekly/:id'> Dinner tonight </Link>
      <Link to='/favorite/:id'> Favorite food </Link>
      <Link to='/searchFood'> Search food </Link>
      <Link to='/searchVideo'> Search Video </Link>
      <Link to='/timer'> Timer </Link>
      <Link to='/shoppingList/:id'> Shopping List </Link>
    </div>
  )
}

export default Home;
