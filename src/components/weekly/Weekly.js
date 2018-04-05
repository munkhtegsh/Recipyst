import React, { Component } from 'react';
import axios from 'axios';
import Nodata from '../item/Nodata';
class Weekly extends Component {
  constructor() {
    super();
    this.state = {
      weeklyList: []
    }
  }

  // componentDidMount() {
  //   axios.get('/api/weekly/:id').then(weeklyList => {
  //     console.log(weeklyList);
  //   });
  // }

  render() {
    return (
      <div className='weekly'>
      {/*
        this.state.weeklyList.length === 0
        ?
        <Nodata/>
        :
        "Weekly"
      */}

      "Weekly"

      </div>
    )
  }
}

export default Weekly;

