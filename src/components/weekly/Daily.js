import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  width: '75%',
  marginLeft: '20',
  marginRight: '20',
  textAlign: 'left',
  display: 'inline-block',
};

class Daily extends Component { 
  constructor(props) {
    super(props);
  };

  render() {
    const { id } = this.props.match.params;
    let idx = +id;
    let day;

    // getting food item
    let food = this.props.weeklyFoodList.map((item, i) => {
      if (item.day === idx) {
        day = item.day;
        return (
          <div key={i} className="daily__item">
              <h3 className="food-name">{item.food_name}</h3>
              <Link to={`/daily/di/${i}`}>
              <img src={item.food_img} 
                className="daily__img"
                alt="food image"/>
              </Link>
            <RaisedButton  className="img_btn" target="_blank" label="Instructions" href={item.url}></RaisedButton>
           
            <Link to={`/daily/di/${i}`}> 
              <RaisedButton className="img_btn" label="Nutrein info" href={item.url}></RaisedButton> 
            </Link>
          </div>
        )
      }
    })


    // <a href={item.url} target="_blank"></a>

    // getting ingredients
    let ingr = this.props.weeklyFoodList.filter((item, i) => {
      if (item.day === day) {
        return item;
      }
    })

    let list = ingr[0].ingredients.map((item, i) => {     //bug, when i click on header calender day 4 
      return (
        <div key={i} className="ingredients-info">
          <Paper style={style} zDepth={1}>
            <p className="daily__p">- {item.text} {item.weight.toFixed(2)} g</p>
          </Paper>
        </div>
      )
    });    

    return (
      <MuiThemeProvider>
        <div className='daily'>
          {
            Object.keys(this.props.weeklyFoodList).length > 0
            ?
            <div>
              { food }
              { list }

            </div>
            :
            "YOU HAVEN't CHOOSE FOOD TODAY YET!"
          }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weeklyFoodList: state.weeklyFoodList
  }
}

export default connect(mapStateToProps)(Daily);
