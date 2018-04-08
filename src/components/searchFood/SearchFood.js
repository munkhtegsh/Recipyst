import React, { Component } from 'react';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chosenItem, searched_Food } from '../../ducks/reducer';
import OptionalModal from '../modal/OptionalModal';

class SearchFood extends Component {
  constructor(props) {
    super(props);
  this.state = {
      search: '',
      selectedOption: undefined
      // f: '',
      // t: '',
      // ingr: '',
      // diet: '',
      // health: ''
    }
  };

  getFood() {
    this.props.searched_Food(this.state.search);
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
      <div className="searchFood">
        <input type="text" placeholder="Food name here" onChange={(e) => this.setState({search: e.target.value})}/>
        <button onClick={() => this.getFood()}> Search </button>
        { list }
        <OptionalModal 
          selectedOption={this.state.selectedOption}
          toggle={() => this.toggle()}
        />
        <button onClick={() => this.toggle()}> options </button>
      </div>
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