import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Timer from './components/timer/Timer';
import Weekly from './components/weekly/Weekly';
import Favorite from './components/favorite/Favorite';
import Recipe from './components/recipe/Recipe';
import SearchFood from './components/searchFood/SearchFood';
import SearchVideo from './components/searchVideo/searchVideo';
import ShoppingList from './components/shoppingList/shoppingList';
import Ingredients from './components/ingredients/Ingredients';
import Item from './components/item/Item';

export default (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/home" component={ Home } />
    <Route path="/timer" component={ Timer } />
    <Route path="/weekly/:id" component={ Weekly } />
    <Route path="/favorite/:id" component={ Favorite } />
    <Route path="/recipe/:id" component={ Recipe } />
    <Route path="/searchFood" component={ SearchFood } />
    <Route path="/item" component={ Item } />
    <Route path="/ingredients/:id" component={ Ingredients } />

    <Route path="/searchVideo" component={ SearchVideo } />
    <Route path="/shoppingList/:id" component={ ShoppingList } />
  </Switch>
)