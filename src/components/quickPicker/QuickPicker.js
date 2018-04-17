import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

// drinks 
import water1 from './drinks/water1.svg'
import beer from './drinks/beer.svg'
import can from './drinks/can.svg'
import champagne from './drinks/champagne.svg'
import juice from './drinks/juice.svg'
import milk from './drinks/milk.svg'
import soda from './drinks/soda.svg'
import water from './drinks/water.svg'
import wine from './drinks/wine.svg'

// fruit
import apple from './fruit/apple.svg';
import avocado from './fruit/avocado.svg';
import banana from './fruit/banana.svg';
import cherries from './fruit/cherries.svg';
import cherry from './fruit/cherry.svg';
import grape from './fruit/grape.svg';
import kiwi from './fruit/kiwi.svg';
import orange from './fruit/orange.svg';
import pear from './fruit/pear.svg';
import pineapple from './fruit/pineapple.svg';
import raspberry from './fruit/raspberry.svg';
import strawberry from './fruit/strawberry.svg';
import watermelon from './fruit/watermelon.svg';

// meat
import beef from './meat/beef.svg'
import canned from './meat/canned.svg'
import chicken from './meat/chicken.svg'
import drum from './meat/drum.svg'
import fish from './meat/fish.svg'
import pork from './meat/pork.svg'
import salami from './meat/salami.svg'
import steak from './meat/steak.svg'

// vegetable
import bean from './vegetable/bean.svg';
import broccoli from './vegetable/broccoli.svg';
import cabbage from './vegetable/cabbage.svg';
import carrot from './vegetable/carrot.svg';
import celery from './vegetable/celery.svg';
import corn from './vegetable/corn.svg';
import garlic from './vegetable/garlic.svg';
import hot_pepper from './vegetable/hot_pepper.svg';
import lettuce from './vegetable/lettuce.svg';
import mashroom from './vegetable/mashroom.svg';
import onion from './vegetable/onion.svg';
import pepper from './vegetable/pepper.svg';
import potato from './vegetable/potato.svg';
import pumpkin from './vegetable/pumpkin.svg';
import salad from './vegetable/salad.svg';
import eggplant from './vegetable/eggplant.svg';
import turnip from './vegetable/turnip.svg';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

// water bug
class QuickPicker extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0
    }
  }

  handleClick(e) {
    const item = {name: e.target.name, quantity: 1};
    axios.post('/api/cart', item).then(res => {

    })
  }

  handleChange = (value) => {
    this.setState({ slideIndex: value})
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle={{marginTop: "18vh", backgroundColor:'#1db954'}}
          >
          <Tab label="Vegetable" value={0} />
          <Tab label="Meat" value={1} />
          <Tab label="Fruit" value={2} />
          <Tab label="Drinks" value={3} />
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={{display: "flex", justifyContent: "center", marginTop: "3vh", marginBottom: "10vh"}}>
            {/* <h2 style={styles.headline}>Tabs with slide effect</h2> */}
            <div className="quickPicker__meat">

            <img src={broccoli} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="broccoli"
            />  
    
            <img src={cabbage} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="cabbage"
            />  
            <img src={carrot} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="carrot"
            />  
    
            <img src={celery} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="celery"
            />  
    
            <img src={corn} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="corn"
            />  
    
            <img src={garlic} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="garlic"
            />  
    
            <img src={hot_pepper} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="hot pepper"
            />  
    
            <img src={mashroom} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="mashroom"
            />  
    
            <img src={onion} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="onion"
            />  
    
            <img src={pepper} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="pepper"
            />  
    
            <img src={potato} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="potato"
            />  
    
            <img src={pumpkin} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="pumpkin"
            />  
    
            <img src={salad} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="lettuce"
            />  
    
            <img src={eggplant} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="eggplant"
            />
    
            <img src={bean} alt="" className="quickPicker__item"
              onClick={(e) => this.handleClick(e)}
              name="bean"
            />
          </div>
          </div>
          <div style={styles.slide} style={{display: "flex", justifyContent: "center", marginTop: "3vh", marginBottom: "10vh"}}>
            <div className="quickPicker__meat">
              <img src={steak} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="steak"
              />
              <img src={pork} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="pork"
              />
              <img src={salami} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="salami"
              />
              <img src={beef} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="beef"
              />
              <img src={canned} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="canned"
              />
              <img src={chicken} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="chicken"
              />
              <img src={drum} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="drum"
              />
              <img src={fish} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="fish"
              />
            </div>
  
          </div>
          <div style={styles.slide} style={{display: "flex", justifyContent: "center", marginTop: "3vh", marginBottom: "10vh"}}>
            <div className="quickPicker__fruit">
              <img src={avocado} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="avocado"
              />
      
              <img src={watermelon} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="watermelon"
              />
      
              <img src={cherries} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="cherry"
              />
      
              <img src={grape} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="grape"
              />
              <img src={kiwi} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="kiwi"
              />
              <img src={orange} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="orange"
              />
              <img src={pear} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="pear"
              />
              <img src={pineapple} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="pineapple"
              />
              
              <img src={raspberry} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="raspberry"
              />
              <img src={strawberry} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="strawberry"
              />
      
              <img src={apple} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="apple"
              />
      
              <img src={banana} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="banana"
              />
            </div>
          </div>

          <div style={{display: "flex", justifyContent: "center", marginTop: "3vh", marginBottom: "10vh"}}>
            <div className="quickPicker__drinks">
              <img src={wine} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="wine"
              />
      
              <img src={water} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="water"
              />
      
              <img src={soda} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="soda"
              />
      
              <img src={milk} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="milk"
              />
      
              <img src={juice} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="juice"
              />
      
              <img src={champagne} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="champagne"
              />
      
              <img src={water1} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="water"
              />
      
              <img src={beer} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="beer"
              />
      
              <img src={can} alt="" className="quickPicker__item"
                onClick={(e) => this.handleClick(e)}
                name="soda"
              />
            </div>
          </div>
        </SwipeableViews>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default QuickPicker;

// <div className="quickPicker"> //not sure that i need to wrap them up in here? might be delete this line
// </div>