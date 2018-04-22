import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentNutrients } from '../../ducks/reducer';
import Graphic from './chart/Graphic';
import _ from 'underscore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px',
  paddingLeft: '10px'
};

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
        <Paper style={style} zDepth={1}>
          { item }
        </Paper>
        </div>
      )
    })

    this.props.getCurrentNutrients(this.state.nutreintList);

    return (
      <MuiThemeProvider>
        <div>
          <div className="nutrients">
            <Graphic />
            <div className="nutrients__p">
              { list }
            </div>
          </div>
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

export default connect(mapStateToProps, { getCurrentNutrients })(FavoriteNutrients);