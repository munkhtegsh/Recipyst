import React from 'react';
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

class FavoriteItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { id } = this.props.match.params;
    let favFood = this.props.favoriteFoodList[id]
    const list = favFood.ingredients.map((item, i) => {
      return (
        <div key={i}>
          <Paper style={style} zDepth={1}>
            <p className="daily__p"> {item.text} {item.weight} </p>  
          </Paper>
        </div>
      )
    })

    return (
      <MuiThemeProvider>
        <div className='daily'>
          <h3 className="food-name">{favFood.food_name} </h3>
            <Link to={`/favorite/FavoriteNutrients/${id}`}>
              <img src={favFood.food_img} 
                className="daily__img"
                alt="food image"/>
              </Link>
              <RaisedButton  className="img_btn" target="_blank" label="Instructions" href={favFood.url}></RaisedButton>
              <Link to={`/favorite/FavoriteNutrients/${id}`}> 
                <RaisedButton className="img_btn" label="Nutrein info" href={parseFloat(favFood.url).toFixed(2)}></RaisedButton> 
              </Link>


            { list }
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList
  }
}

export default connect(mapStateToProps)(FavoriteItem)

