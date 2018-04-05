import React, { Component } from 'react';
import NoData from '../item/Nodata';
import Nodata from '../item/Nodata';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFood: []
    }
  }

  render() {
    return (
      <div>
        {
          this.state.favoriteFood.length === 0
          ?
          <Nodata/>
          :
          Favorite
        }
      </div>
    )
  }
}

export default Favorite;