import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import IconButton from 'material-ui/IconButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const Item = (props) => {
  return (
    <MuiThemeProvider className="item">
      <div style={styles.root}>
      <GridTile
        key={props.image}
        title={props.label}
        actionIcon={<IconButton><ContentPaste color="white" /></IconButton>}
        actionPosition="left"
        titlePosition="top"
        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">

      <img src={props.image} />
      <p className="item__colories">calories: {props.calories}</p>
      </GridTile>
      </div>
    </MuiThemeProvider>
    )
}

export default Item;

