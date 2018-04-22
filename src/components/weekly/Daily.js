import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddToCart from 'material-ui/svg-icons/editor/mode-edit';


let outside;
const style = {
  width: '90%',
  // marginLeft: '20',
  // marginRight: '20',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px'
};

class Daily extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      itemText: '',
      itemWeight: '',
      edit: null,
      day: null
    }
  };

  editIngredients = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  edit = (edit) => {  //edit is a idx
    this.setState({ edit });
  }

  save = (edit) => {
    const { id } = this.props.match.params;
    let idx = +id;
    if (this.state.itemText || this.state.item) {
      let updatedIngr = this.props.weeklyFoodList[outside].ingredients.map((item, i) => {
        if (i === edit) {
          item.text = this.state.itemText;
          item.weight = this.state.itemWeight;
        }
        return item;
      })
      axios.put(`/api/weekly/ingr/${idx}`, {updatedIngr});
      this.setState({itemText: '', itemWeight: '', edit: false});
    }
  }

  toBuy = (index) => {
    const { id } = this.props.match.params;
    const idx = +id;
    let ingredient = this.props.weeklyFoodList[outside].ingredients.map((item, i) => {
      if (i === index) {
        // console.log(item.text)
        // let arr = item.text.split(' ')
        axios.post('/api/cart', {name: item.text, quantity: 1});
      }
    })
  }

  render() {
    const { id } = this.props.match.params;
    let idx = +id;
    let day;

    // getting food item
    let food = this.props.weeklyFoodList.map((item, i) => {
      if (item.day === idx) {
        day = item.day;
        outside = i
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
              <RaisedButton className="img_btn" label="Nutrein info" ></RaisedButton> 
            </Link>
          </div>
        )
      }
    })

    // getting ingredients
    let ingr = this.props.weeklyFoodList.filter((item, i) => {
      if (item.day === day) {
        return item;
      }
    })

    if (ingr[0]) {
      var list = ingr[0].ingredients.map((item, i) => {     
        return (
          <div key={i} className="ingredients-info">

            <AddToCart onClick={() => this.edit(i)} className="daily__edit-btn" />
   
            {
              this.state.edit === i
              ?
                <Paper style={style} zDepth={1}>
                  <input className="daily__p" type="text" value={this.state.itemText} placeholder={item.text}
                    name="itemText"
                    onChange={(e) => this.editIngredients(e)}
                  />
                  
                  <input className="daily__p" type="text" value={this.state.itemWeight} placeholder={parseFloat(item.weight).toFixed(2)}
                    name="itemWeight"
                    onChange={(e) => this.editIngredients(e)}
                  />
                  <button onClick={() => this.save(i)} className="ingredients-info__save-btn"> Save </button>
                </Paper>
              :
              <Paper style={style} zDepth={1}>
                <p className="daily__p" onClick={() => this.toBuy(i)}>- {item.text} {parseFloat(item.weight).toFixed(2)}g</p> 
               
              </Paper>
            }
          </div>
        )
      })
    } else {
      null
    }

    return (
      <MuiThemeProvider>
        <div className='daily'>
          {
            ingr[0]
            ?
            <div>
              { food }
              { list }
            </div>
            :
            "YOU HAVEN't CHOOSE ANY FOOD THIS DAY!"
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
