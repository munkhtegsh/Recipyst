import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentNutrients } from '../../ducks/reducer';
import Graphic from './chart/Graphic';
import _ from 'underscore';

class FavoriteNutrients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutrients: {},
      nutreintList: []
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    this.setState({
      nutrients: this.props.weeklyFoodList[id].total_nutrients
    }, () => {
      this.template();
    }) 
  }

  template = () => {
    let nutreintList = [];
    let obj = Object.assign({}, this.state.nutrients);
    let nutrientNames = ['PROCNT', 'SUGAR', 'SUGAR.added', 'CA', 'CHOCDF', 'CHOLE', 'ENERC_KCAL', 'FAT',
    'FE', 'FIBTG', 'TOCPHA', 'VITA_RAE', 'VITB6A', 'VITB12', 'VITC', 'VITD', 'VITK1'];

      nutrientNames.forEach(item => {
        for(let key in obj) {
        if(item === key) {
          let tpl = _.template("<%= label %> <%= quantity %> <%= unit %> ")
          let name = obj[key].label.split(' ').join('');
          nutreintList.push(tpl({label: name, quantity: obj[key].quantity.toFixed(2), unit: obj[key].unit}));
        }
      }
    })

    this.setState({ nutreintList })
  }

  render() {
    let { id } = this.props.match.params;
    let currentNtr = []
    let list = this.state.nutreintList.map((item, i) => {
      return (
        <div key={i}>
          { item }
        </div>
      )
    })

    this.props.getCurrentNutrients(this.state.nutreintList);

    return (
      <div>
        <div className="nutrients">
        <button onClick={() => this.props.history.goBack()}>x</button>
          <div className="nutrients__p">
            { list }
            <Graphic />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weeklyFoodList: state.weeklyFoodList
  }
}

export default connect(mapStateToProps, { getCurrentNutrients })(FavoriteNutrients);