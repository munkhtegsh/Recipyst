import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionInfo from './carrot-show.svg';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';


// import ListExampleSimple from './List';

export default (props) => (
  <div>
    <Drawer width={200} openSecondary={true} open={props.toggle}
      // containerClassName={{backgroundColor: "#1db954"}}
      
    >
      <AppBar title="Menu" 
      style={{backgroundColor: "#1db954", height: "59px"}}
        onClick={() => props.toggleClick()}
        iconElementLeft={<Close/>}
      />

      <Link to ="/searchFood"> 
        <FlatButton label="Search Recipe" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      
      <Link to ="/weekly"> 
        <FlatButton label="Weekly plan" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <Link to ="/favorite"> 
        <FlatButton label="My Favorite" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <Link to ="/shoppingcart"> 
        <FlatButton label="Shopping Cart" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <Link to ="/quickpicker"> 
        <FlatButton label="Grocery plan" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <Link to ="/searchvideo"> 
        <FlatButton label="Search video" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <Link to ="/myrecipe"> 
        <FlatButton label="My recipe" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </Link>

      <a href={process.env.REACT_APP_LOGOUT}> 
        <FlatButton label="Logout" primary={true} fullWidth={true} 
          onClick={() => props.toggleClick()}
          style={{color: "#424242"}}
        />
      </a>
    </Drawer>
  </div>
);

