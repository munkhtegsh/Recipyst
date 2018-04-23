import React, { Component } from 'react';
import axios from 'axios';
import Nodata from '../item/Nodata';
import { connect } from 'react-redux';
import { getWeeklyItems } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui/svg-icons/navigation/close';

const styles = {
  smallIcon: {
    width: 25,
    height: 25,
    color: 'grey'
  },
  position: {
    position: "absolute"
  }
}

class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  deleteItem = (id) => {
    axios.delete(`/api/weekly/${id}`);
    this.props.getWeeklyItems(); 
  }

  render() {
    let list = this.props.weeklyFoodList.map((item, i) => {
      return (
        <div>
            <div className="weekly__item">
              <Link key={i} to={`/daily/${item.day}`}>
                <img src={item.food_img}
                  className="weekly__img" 
                  alt=""
                />
              </Link>

              <div className="weekly__food-name"  >
                <IconButton iconStyle={styles.smallIcon} style={styles.position} className="weekly__delete" >
                  <DeleteForever onClick={() => this.deleteItem(item.id)} className="weekly__delete-icon" />
                </IconButton>
                <Link key={i} to={`/daily/${item.day}`}> {/* why can't put 2 links? */}
                  <p className="weekly__p"> {item.day}. {item.food_name}</p>
                  <p className="weekly__calories">calories: {item.calories}</p>
                </Link>
              </div> 

            </div>
        </div>
      )
    });

    return (
      <MuiThemeProvider>
        <div className='weekly'>
        {
          this.props.weeklyFoodList.length === 0
          ?
          "YOU HAVEN'T CHOOSE ANY FOOD THIS WEEK!"
          :
          <div>
            { list }
          </div>
        }
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

export default connect(mapStateToProps, { getWeeklyItems })(Weekly);


// <div key={i}>
// <p className='ingredients__p'>- { item.text }   Weight: { item.weight }</p>
// </div>

