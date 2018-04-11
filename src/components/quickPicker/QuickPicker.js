import React, { Component } from 'react';
import axios from 'axios';

import pic from './example.png'

class QuickPicker extends Component {

  handleClick(e) {
    const item = {name: e.target.name, quantity: 1};
    axios.post('/api/quickpick', item)
  }

  render() {
    return (
      <div className="quickPicker">
        <img src={pic} width="100" height="100" alt=""
          onClick={(e) => this.handleClick(e)}
          name="hufflePuff"
        />
      </div>
    )
  }
}

export default QuickPicker;

