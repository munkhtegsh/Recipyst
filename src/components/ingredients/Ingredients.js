import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Ingredients = (props) => {

  const addToWeeklyList = () => {
    axios.post('/api/weekly', props.chosenItem).then(res => {
      return res.data[0];
    });
  }

  const addToFavoriteList = () => {
    axios.post('/api/favorite', props.chosenItem).then(res => {
      return res.data[0];
    });
  }

// need image to load here 
return (
  <div className="ingredients">
  <Link to='/searchFood'><button>x</button></Link>
    {
      props.chosenItem.ingredients && 
      props.chosenItem.ingredients.map((item, i) => {
        return (
          <div key={i}>
            <p className='ingredients__p'>{ i + 1 }. { item.text }</p>
            <p className='ingredients__p'>Weight: { item.weight }</p>
          </div>
        )
      })
    }
    <button onClick={() => addToWeeklyList()}> Weekly </button>
    <button onClick={() => addToFavoriteList()}> Favorite </button>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chosenItem: state.chosenItem,
    userid: state.userid
  }
}

export default connect(mapStateToProps)(Ingredients);
