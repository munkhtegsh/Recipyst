import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavoriteItem } from '../../ducks/reducer';
import _ from 'underscore';

class FavoriteNutrients extends Component {
  constructor(props) {
    super(props);
    // deep obj
    this.state = {
      nutrients: {
        PROCNT: {},
        SUGAR: {},
        'SUGAR.added': {},
        CA: {},
        CHOCDF: {},
        CHOLE: {},
        ENERC_KCAL: {},
        FAT: {},
        FE: {},
        FIBTG: {},
        TOCPHA: {},
        VITA_RAE: {},
        VITB6A: {},
        VITB12: {},
        VITC: {},
        VITD: {},
        VITK1: {}
      },
      nutreintList: []
    }
  }

  componentDidMount() {
    let idx = this.props.match.params.id;
    this.props.getFavoriteItem().then(res => {
      this.setState({
        nutrients: this.props.favoriteFoodList[idx].total_nutrients
      })
      this.template();
    })

  }

  template = () => {
    let nutreintList = [];
    let obj = Object.assign({}, this.state.nutrients);
    console.log(obj)
    for(let key in obj) {
      if(obj[key]) {
        let tpl = _.template("<%= label %> <%= quantity %> <%= unit %> ")
        nutreintList.push(tpl({label: obj[key].label, quantity: parseInt(obj[key].quantity, 10), unit: obj[key].unit}));
      }
    }
    this.setState({ nutreintList })
  }

  render() {
    let list = this.state.nutreintList.map((item, i) => {
      return (
        <div key={i}>
          { item }
        </div>
      )
    })

    return (
      <div>
        <div className="nutrients">
        <button onClick={() => this.props.history.goBack()}>x</button>
          <div className="nutrients__p">
            { list }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteFoodList: state.favoriteFoodList
  }
}

export default connect(mapStateToProps, { getFavoriteItem })(FavoriteNutrients);