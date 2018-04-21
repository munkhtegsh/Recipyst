import React, { Component } from 'react';
import Nodata from '../item/Nodata';
import { getFavoriteItem } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '100vh'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


class Favorite extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  deleteItem = (id) => {
    axios.delete(`/api/favorite/${id}`); //left it alone
    this.props.getFavoriteItem();
  }

  render() {
    return (
      <MuiThemeProvider>
      <div style={styles.root} className="favorite">


      {
        this.props.favoriteFoodList.length !== 0
        ?
        <GridList
        cellHeight={180}
        style={styles.gridList}
        style={{height: '100vh'}}
      >
        {
          this.props.favoriteFoodList && 
          this.props.favoriteFoodList.map((food, id) => {
            return (

                <GridTile
                  key={food.food_img}
                  title={food.food_name}
                  subtitle={<span>by <b>Susana</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                <Link to={`/favorite/${this.props.userid}/${id}`} key={food.id}>

                  <img src={food.food_img} />
                </Link>
                </GridTile>
            )
          })
        }
        </GridList>
        :
        "YOU HAVEN'T SELECT ANY FOOD IN YOUR FAVORITE LIST!"
      }

    
        </div>

      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList,
    userid: state.userInfo.id //getting userid from redux
  }
}

export default connect(mapStateToProps, { getFavoriteItem })(Favorite);

// ?
// <Nodata/>
// :
// 'HELLO'






// <div className='favorite'>
// {
//   this.props.favoriteFoodList && 
//   this.props.favoriteFoodList.map((food, id) => {
//     return (
//       <div key={food.id} className="favorite__container">
//         <Link to={`/favorite/${id}`} key={food.id}>
//           <div  className="favorite__box">
//           <img src={food.food_img} alt="food image" className="favorite__img"/>
//           </div>
//         </Link>
//         <div className="favorite__text-container">
//           <button onClick={() => this.deleteItem(food.id)}>delete</button>
//           <p className="favorite__name"> {food.food_name}</p>
//           <p> Ingredients: {food.ingredient_number}</p>
//           <p> Calories: {food.calories}</p>
//         </div>
//       </div>
//     )
//   })
// }
// </div>