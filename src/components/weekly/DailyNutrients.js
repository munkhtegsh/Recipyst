import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'underscore';

class Nutrients extends Component {
  constructor() {
    super();
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
    let { day } = this.props.match.params;
    axios.get(`/api/daily/di/${day}`).then(res => {
      let nutrients = res.data[0].total_nutrients;
      this.setState({ nutrients })
      this.template();
    });
  }

  // used underscore template for templating, so you don't have to type 
  template = () => {
    let nutreintList = [];
    let obj = {...this.state.nutrients};
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
      <div className="nutrients">
      <button onClick={() => this.props.history.goBack()}>x</button>
        <div className="nutrients__p">
          { list }
        </div>
      </div>
      )
  }
}

export default Nutrients;



          // {
          //   this.state.nutrients.PROCNT
          //   ?
          //   <p> {this.state.nutrients.PROCNT.label} {this.state.nutrients.PROCNT.quantity} {this.state.nutrients.PROCNT.unit}</p>
          //   :
          //   null
          // }

          // {
          //   this.state.nutrients.SUGAR
          //   ?
          //   <p> {this.state.nutrients.SUGAR.label} {this.state.nutrients.SUGAR.quantity} {this.state.nutrients.SUGAR.unit}</p>
          //   :
          //   null
          // }

          // {
          //   this.state.nutrients['SUGAR.added']
          //   ?
          //   <p> {this.state.nutrients['SUGAR.added'].label} {this.state.nutrients['SUGAR.added'].quantity} {this.state.nutrients['SUGAR.added'].unit}</p> 
          //   :
          //   null
          // }
          
          // {
          //   this.state.nutrients.CHOCDF
          //   ?
          //   <p> {this.state.nutrients.CHOCDF.label} {this.state.nutrients.CHOCDF.quantity} {this.state.nutrients.CHOCDF.unit}</p>
          //   :
          //   null
          // }

          // { this.state.nutrients.CHOLE 
          //   ?  
          //   <p> {this.state.nutrients.CHOLE.label}  {this.state.nutrients.CHOLE.quantity} {this.state.nutrients.CHOLE.unit}</p>
          //   :
          //   null
          // } 
          
          // <p> {this.state.nutrients.ENERC_KCAL.label} {this.state.nutrients.ENERC_KCAL.quantity} {this.state.nutrients.ENERC_KCAL.unit}</p>
          // <p> {this.state.nutrients.FAT.label} {this.state.nutrients.FAT.quantity} {this.state.nutrients.FAT.unit}</p>
          // <p> {this.state.nutrients.FE.label} {this.state.nutrients.FE.quantity} {this.state.nutrients.FE.unit}</p>
          // <p> {this.state.nutrients.FIBTG.label} {this.state.nutrients.FIBTG.quantity} {this.state.nutrients.FIBTG.unit}</p>
          // <p> {this.state.nutrients.TOCPHA.label} {this.state.nutrients.TOCPHA.quantity} {this.state.nutrients.TOCPHA.unit}</p>
          // <p> {this.state.nutrients.VITA_RAE.label} {this.state.nutrients.VITA_RAE.quantity} {this.state.nutrients.VITA_RAE.unit}</p>
          // <p> {this.state.nutrients.VITB6A.label} {this.state.nutrients.VITB6A.quantity} {this.state.nutrients.VITB6A.unit}</p>
          // <p> {this.state.nutrients.VITB12.label} {this.state.nutrients.VITB12.quantity} {this.state.nutrients.VITB12.unit}</p>
          // <p> {this.state.nutrients.VITC.label} {this.state.nutrients.VITC.quantity} {this.state.nutrients.VITC.unit}</p>
          // <p> {this.state.nutrients.VITD.label} {this.state.nutrients.VITD.quantity} {this.state.nutrients.VITD.unit}</p>
          // <p> {this.state.nutrients.VITK1.label} {this.state.nutrients.VITK1.quantity} {this.state.nutrients.VITK1.unit}</p>   