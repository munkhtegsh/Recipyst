import React from 'react';

const Item = (props) => {
  return (
      <div className="item">
        <img src={props.image} alt=""/>
        <p>Label: {props.label}</p>
        <br/>
        <p>Calories: {props.calories}</p>
      </div>
    )
}

export default Item;

