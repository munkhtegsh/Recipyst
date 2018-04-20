import React, { Component } from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chosenItem, searched_Food } from '../../ducks/reducer';
import OptionalModal from '../modal/OptionalModal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  largeIcon: {
    width: 120,
    height: 120,
  },
  large: {
    width: 240,
    height: 240,
    padding: 30,
    marginTop: 100
  },
};

const style = {
  margin: 12,
};



class SearchFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedOption: undefined,
    }
  };

  // sending food req to API 
  getFood(queries) {
    this.props.searched_Food(`${this.state.search}`, queries);
  }

  toggle() {
    this.setState({selectedOption: !this.state.selectedOption});
  }

  render() {
    console.log(this.props.searchedFood);
    const list = this.props.searchedFood.map((item, i) => {
      return (
        <Link to={`/ingredients/${i}`} key={i}             
        onClick={() => this.props.chosenItem(item.recipe)} >
          <Item  
            image={item.recipe.image}
            label={item.recipe.label}
            calories={parseInt(item.recipe.calories)}
            ingredients={item.recipe.ingredients}
            id={i}
          />
        </Link>
      )
    })
    
    return (
      <MuiThemeProvider>
        <div className="searchFood">
          <TextField
            floatingLabelFocusStyle={{color: '#1db954'}}
            underlineFocusStyle={{borderColor:'#1db954'}}
            fullWidth={false}
            floatingLabelText="Search food"
            onChange={(e) => this.setState({search: e.target.value})}
          />

          <RaisedButton label="Search" style={style} 
            onClick={() => this.getFood()}
          />

            { list }
            <IconButton iconStyle={styles.largeIcon} style={styles.large} onClick={() => this.toggle()} >
              <Search />
            </IconButton>
            <OptionalModal 
              selectedOption={this.state.selectedOption}
              toggle={() => this.toggle()}
              getFood={(queries) => this.getFood(queries)}
            />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchedFood: state.searchedFood
  }
}

const actionCreators = {
  chosenItem,
  searched_Food
}

export default connect(mapStateToProps, actionCreators)(SearchFood);