import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Timer from './components/timer/Timer';
import Weekly from './components/weekly/Weekly';
import Favorite from './components/favorite/Favorite';
import FavoriteItem from './components/favorite/FavoriteItem';
import FavoriteNutrients from './components/favorite/FavoriteNutrients';
import Recipe from './components/recipe/Recipe';
import SearchFood from './components/searchFood/SearchFood';
import SearchVideo from './components/searchVideo/searchVideo';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Ingredients from './components/ingredients/Ingredients';
import Item from './components/item/Item';
import Daily from './components/weekly/Daily';
import DailyNutrients from './components/weekly/DailyNutrients';
import QuickPicker from './components/quickPicker/QuickPicker';

export default (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/home" component={ Home } />
    <Route path="/timer" component={ Timer } />
    <Route path="/weekly" component={ Weekly } />
    <Route path="/daily/di/:day" component={ DailyNutrients } />
    <Route path="/daily/:day" component={ Daily } /> 
    <Route path="/favorite/FavoriteNutrients/:id" component={ FavoriteNutrients } />
    <Route path="/favorite/:id" component={ FavoriteItem } />
    <Route path="/favorite" component={ Favorite } />
    <Route path="/recipe/:id" component={ Recipe } />
    <Route path="/searchFood" component={ SearchFood } />
    <Route path="/item" component={ Item } />
    <Route path="/ingredients/:id" component={ Ingredients } />
    <Route path="/searchVideo" component={ SearchVideo } />
    <Route path="/shoppingCart" component={ ShoppingCart } />
    <Route path="/quickPicker" component={ QuickPicker } />

  </Switch>
)