import React, { Component } from 'react';
import Dialog from './Dialog';
import Item from '../item/Item';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

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

const style = {
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px',
  paddingLeft: '10px'
};

class MyRecipe extends Component {

  render() {
    let list = this.props.myRecipe.map((item, i) => {
      return (
        <div style={styles.root}>
          <GridTile
            key={item.image}
            title={item.label}
            actionIcon={<IconButton><ContentPaste color="white" /></IconButton>}
            actionPosition="left"
            titlePosition="top"
            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
          

          <img className="myRecipies__img" src={item.foodimg} />

          <Paper style={style}> 
            <p className="myRecipies__cookingtime">Total time to cook: {item.cookingTime} </p>
            <p className="myRecipies__weight">Weight: {item.weight} </p>
            <p className="myRecipies__totalingr">Total ingredients number: {item.totalingr} </p>
            <p className="myRecipies__ingredients">Recipe: {item.ingredients} </p> 
          </Paper>
          </GridTile>
        </div>




      )
    })

    return (
      <MuiThemeProvider>
        <div className="myRecipe">
          <Dialog />
          { list }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myRecipe: state.myRecipe
  }
}

export default connect(mapStateToProps)(MyRecipe);


// <div key={i} className="myRecipies">
// <img src={item.foodimg} alt=""/>
// <p className="myRecipies__foodname"> {item.foodname} </p>

// </div>


