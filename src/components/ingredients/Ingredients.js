import React, { Component } from 'react';
import { connect } from 'react-redux';

const Ingredients = (props) => {

// need image to load here 

  return (
    <div className="ingredients">
      {
        props.chosenItem.ingredients && 
        props.chosenItem.ingredients.map((item, i) => {
          return (
            <div>
              <p>{ i + 1 }. { item.text }</p>
              <br/>
              <p>Weight: { item.weight }</p>
            </div>
          )
        })
      }
      <button> Weekly </button>
      <button> Favorite </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chosenItem: state.chosenItem
  }
}

export default connect(mapStateToProps)(Ingredients);
