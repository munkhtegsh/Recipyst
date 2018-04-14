import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionInfo from './carrot-show.svg';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton'


// import ListExampleSimple from './List';

export default (props) => (
  <div>
    <Drawer width={200} openSecondary={true} open={props.toggle} 
      appBarStyle={{height: 'calc(100% - 64px)'}}
    >
      <AppBar title="Menu" 
        onClick={() => props.toggleClick()}
      />

      <Link to ="/searchFood"> 
        <FlatButton label="Search Recipe" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </Link>
      
      <Link to ="/weekly"> 
        <FlatButton label="Weekly plan" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </Link>

      <Link to ="/favorite"> 
        <FlatButton label="My Favorite" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </Link>

      <Link to ="/shoppingcart"> 
        <FlatButton label="Shopping Cart" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </Link>

      <Link to ="/quickpicker"> 
        <FlatButton label="Grocery plan" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </Link>

      <a href="http://localhost:4000/auth/logout"> 
        <FlatButton label="Logout" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
        />
      </a>
    </Drawer>
  </div>
);
