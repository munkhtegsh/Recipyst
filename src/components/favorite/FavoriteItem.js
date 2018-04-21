import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { shareFood } from '../../ducks/reducer';
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

class FavoriteItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  shareFavoriteFood = () => {
    let { id } = this.props.match.params;
    let favFood = this.props.favoriteFoodList[id]
    this.props.shareFood({...favFood, link: `/favorite/${this.props.userid}/${id}`})
    
  }

  render() {
    let { id } = this.props.match.params;
    let favFood = this.props.favoriteFoodList[id]; //why sometimes bugged?
    console.log(favFood)
    const list = favFood.ingredients.map((item, i) => {
      return (
        <div key={i}>
          <Paper style={style} zDepth={1}>
            <p className="daily__p"> {item.text} {parseFloat(item.weight).toFixed(2)}g </p>  
          </Paper>
        </div>
      )
    })

    return (
      <MuiThemeProvider>
        <div className='daily'>
          <h3 className="food-name">{favFood.food_name} </h3>
          <button onClick={() => this.shareFavoriteFood()} className="daily__share"> Share </button>
            <Link to={`/favorite/FavoriteNutrients/${this.props.userid}/${id}`}>
              <img src={favFood.food_img} 
                className="daily__img"
                alt="food image"/>
              </Link>
              <RaisedButton  className="img_btn" target="_blank" label="Instructions" href={favFood.url}></RaisedButton>
              <Link to={`/favorite/FavoriteNutrients/${this.props.userid}/${id}`}> 
                <RaisedButton className="img_btn" label="Nutrein info" href={favFood.url}></RaisedButton> 
              </Link>


            { list }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList,
    userid: state.userInfo.id 
  }
}

export default connect(mapStateToProps, { shareFood })(FavoriteItem)

