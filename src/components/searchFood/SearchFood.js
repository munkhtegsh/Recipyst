import React, { Component } from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chosenItem, searched_Food } from '../../ducks/reducer';
import OptionalModal from '../modal/OptionalModal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from 'material-ui/svg-icons/action/search';


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
        <input type="text" placeholder="Food name here" onChange={(e) => this.setState({search: e.target.value})}/>
        <button onClick={() => this.getFood()}> Search </button>
        <button onClick={() => this.toggle()}> options </button>
        { list }
        <Search className="searchFood__search__btn" iconStyle={{width: 400}} />
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