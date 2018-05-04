import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  width: '90%',
  // marginLeft: '20',
  // marginRight: '20',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px'
};

class ShareFood extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFood: {},
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios.get(`/api/favorite/${id}`).then(res => {
      console.log(res.data[0]);

      let favoriteFood = res.data[0];
      this.setState({favoriteFood, });
    })
  }

  render() {
    console.log(this.state.favoriteFood);

    return (
      <MuiThemeProvider>
      <div className='daily'>
      <h3 className="food-name">{this.state.favoriteFood.food_name} </h3>
      <img src={this.state.favoriteFood.food_img} 
        className="daily__img"
        alt="food image"/>
        {
          Object.keys(this.state.favoriteFood).length !== 0 &&
          this.state.favoriteFood.ingredients.map((item, i) => {
            return (
              <div key={i}>
              <Paper style={style} zDepth={1}>
                <p className="daily__p"> {item.text} {parseFloat(item.weight).toFixed(2)}g </p>  
              </Paper>
            </div>
            )
          })
        }
        <RaisedButton  className="img_btn" target="_blank" label="Instructions" href={this.state.favoriteFood.url}></RaisedButton>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default ShareFood;







// <MuiThemeProvider>
//       {/*
//         <div className='daily'>
//           <h3 className="food-name">{this.state.shared.food_name} </h3>
//           <button onClick={() => this.shareFavoriteFood()} className="daily__share"> Share </button>
//             <Link to={`/favorite/FavoriteNutrients/${this.props.userid}/${id}`}>
//               <img src={this.state.shared.food_img} 
//                 className="daily__img"
//                 alt="food image"/>
//               </Link>
//               <RaisedButton  className="img_btn" target="_blank" label="Instructions" href={this.state.shared.url}></RaisedButton>
//               <Link to={`/favorite/FavoriteNutrients/${this.props.userid}/${id}`}> 
//                 <RaisedButton className="img_btn" label="Nutrein info" href={this.state.shared.url}></RaisedButton> 
//               </Link>


//             { list }
//         </div>
//       */}

//       {
//         Object.keys(this.state.shared) !== 0 && this.state.shared.ingredients.map((item, i) => {
//           return (
//             <div key={i}>
//               <Paper style={style} zDepth={1}>
//                 <p className="daily__p"> {item.food_name} {parseFloat(item.total_weight).toFixed(2)}g </p>  
//               </Paper>
//             </div>
//           )
//         })
//       }
//       </MuiThemeProvider>