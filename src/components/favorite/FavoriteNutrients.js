import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import _ from 'underscore';

const style = {
  width: '75%',
  textAlign: 'left',
  display: 'inline-block',
  marginBottom: '5px',
  paddingLeft: '10px',
  padding: '10px'
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
      nutrients: this.props.favoriteFoodList[id].total_nutrients
    }, () => {
      this.template();
    })

   
    console.log(this.state.nutrients)
  }

  template = () => {
    let nutreintList = [];
    let obj = Object.assign({}, this.state.nutrients);
    console.log(obj)
    let nutrientNames = ['PROCNT', 'SUGAR', 'SUGAR.added', 'CA', 'CHOCDF', 'CHOLE', 'ENERC_KCAL', 'FAT',
    'FE', 'FIBTG', 'TOCPHA', 'VITA_RAE', 'VITB6A', 'VITB12', 'VITC', 'VITD', 'VITK1'];

      nutrientNames.forEach(item => {
        for(let key in obj) {
        if(item === key) {
          let tpl = _.template("<%= label %> <%= quantity %> <%= unit %> ")
          nutreintList.push(tpl({label: obj[key].label, quantity: obj[key].quantity.toFixed(2), unit: obj[key].unit}));
        }
      }
    })

    this.setState({ nutreintList })
  }

  render() {
    let list = this.state.nutreintList.map((item, i) => {
      return (
        <div key={i}>
          <Paper style={style} zDepth={1}>
            { item }
          </Paper>
        </div>
      )
    })

    return (
      <MuiThemeProvider>
        <div className="favoriteNutrients">
          <div className="favoriteNutrients__favorite">
            { list }
          </div>
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

export default connect(mapStateToProps)(FavoriteNutrients);