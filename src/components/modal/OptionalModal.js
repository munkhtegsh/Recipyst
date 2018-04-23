import React, { Component } from 'react';
import Modal from 'react-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },  block: {
    maxWidth: 250,
  },
};

const style = {
  largeIcon: {
    width: 120,
    height: 120,
  },
  large: {
    width: 240,
    height: 240,
    padding: 30,
    marginTop: 100
  },
};



class OptionalModal extends Component {
  constructor() {
    super();
    this.state = {
      from: 0,
      to: 0,
      ingr: 0,
      health: {
        vegetarian: false,
        vegan: false,
        'alcohol-free': false,
        'sugar-conscious': false,
      }, 
      diet: {
        'high-protein': false,
        'low-carb': false,
        'low-fat': false,
        balanced: false
      },
      allergies: {
        gluten: false,
        dairy: false,
        eggs: false,
        soy: false,
        fish: false,
        shellfish: false,
        treenuts: false,
        peanuts: false
      },
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.setState({open: false});
    // this.props.toggle(); 
    this.getURL();
  };
  
  // updating states based on global objects
  handleCheckbox (e) {  
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: { ...this.state[name], [value]: !this.state[name][value] } // !important, but uncontrolled vs controlled
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }
  
  // creating queries from selected checkbox
  getURL = () => {
    let newQueries = new URLSearchParams();
    for (var key in this.state) {
      let val = this.state[key]
      if (typeof val === 'number' && val > 0) {
        newQueries.append(key, val)
      }
    }

    //advanced___________________
    for (let key in this.state) {
      let eachState = this.state[key];
      for (let value in eachState) {
        console.log(eachState, value)
        if (eachState[value]) {
          newQueries.append(key, value);
        }
      }
    }
    let queries = newQueries.toString();

    console.log(queries)
    this.props.getFood(queries);
  }

  render() {
    // console.log(this.state.queries)
        const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
        style={{color: '#1db954'}}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        style={{color: '#1db954'}}
      />,
    ];

    return (
      <MuiThemeProvider>
      <div>
  
          <IconButton iconStyle={style.largeIcon} style={style.large} onClick={this.handleOpen}  >
            <Search />
          </IconButton>
          
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
          <h3 className="optionModal__title"> Advanced selection </h3>
            
          <h4> HEALTH </h4>
          
          <form onSubmit={this.handleSubmit}>
            <Checkbox
              label="Vegetarian"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health.vegetarian}
              onCheck={(e) => this.handleCheckbox(e)}
              value="vegetarian"
              name="health"
              iconStyle={{fill: '#1db954'}}

            />
            
            <Checkbox
              label="Vegan"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health.vegan}
              onCheck={(e) => this.handleCheckbox(e)}
              value="vegan"
              name="health"
              iconStyle={{fill: '#1db954'}}

            />

            <Checkbox
              label="Sugar Conscious"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health['sugar-conscious']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="sugar-conscious"
              name="health"
              iconStyle={{fill: '#1db954'}}

            />

            <Checkbox
              label="Alcohol-Free"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health['alcohol-free']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="alcohol-free"
              name="health"
              iconStyle={{fill: '#1db954'}}

            />

            <h4> DIET </h4>

            <Checkbox
              label="High-Protein"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet['high-protein']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="high-protein"
              name="diet"
              iconStyle={{fill: '#1db954'}}

            />

            <Checkbox
              label="Low-Carb"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet['low-carb']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="low-carb"
              name="diet"
              iconStyle={{fill: '#1db954'}}

            />

            <Checkbox
              label="Low-Fat"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet['low-fat']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="low-fat"
              name="diet"
              iconStyle={{fill: '#1db954'}}

            />

            <Checkbox
              label="Balanced"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet.balanced}
              onCheck={(e) => this.handleCheckbox(e)}
              value="balanced"
              name="diet"
              iconStyle={{fill: '#1db954'}}

            />
            </form>

            <h4> ALLERGIES </h4>

            <form>
              <Checkbox
                label="Gluten"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.gluten}
                onCheck={(e) => this.handleCheckbox(e)}
                value="gluten"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />
              
              <Checkbox
                label="Dairy"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.dairy}
                onCheck={(e) => this.handleCheckbox(e)}
                value="dairy"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />

              <Checkbox
                label="Eggs"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.eggs}
                onCheck={(e) => this.handleCheckbox(e)}
                value="eggs"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />

              <Checkbox
                label="Soy"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.soy}
                onCheck={(e) => this.handleCheckbox(e)}
                value="soy"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />

              <Checkbox
                label="Fish"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.fish}
                onCheck={(e) => this.handleCheckbox(e)}
                value="fish"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />

              <Checkbox
                label="Shellfish"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.shellfish}
                onCheck={(e) => this.handleCheckbox(e)}
                value="shellfish"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />
              
              <Checkbox
                label="Tree nuts"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.treenuts}
                onCheck={(e) => this.handleCheckbox(e)}
                value="treenuts"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />

              <Checkbox
                label="Peanuts"
                labelPosition="left"
                style={styles.checkbox}
                defaultChecked={this.state.diet.peanuts}
                onCheck={(e) => this.handleCheckbox(e)}
                value="peanuts"
                name="allergies"
                iconStyle={{fill: '#1db954'}}

              />
            </form>

              <TextField
              floatingLabelFocusStyle={{color: '#1db954'}}
              underlineFocusStyle={{borderColor:'#1db954'}}
              fullWidth={false}
              floatingLabelText="Ingredients up to"
              style={{width: '50%'}}
              name="ingr" 
              onChange={(e) => this.handleChange(e)}/>
              <br />

              <TextField
              floatingLabelFocusStyle={{color: '#1db954'}}
              underlineFocusStyle={{borderColor:'#1db954'}}
              fullWidth={false}
              floatingLabelText="Calories from"
              style={{width: '50%', margin: '0', padding: '0'}}
              name="from" 
              onChange={(e) => this.handleChange(e)}/>
              <br />

              <TextField
              floatingLabelFocusStyle={{color: '#1db954'}}
              underlineFocusStyle={{borderColor:'#1db954'}}
              fullWidth={false}
              floatingLabelText="Calories to"
              style={{width: '50%'}}
              name="to" 
              onChange={(e) => this.handleChange(e)}/>
              <br />
          </Dialog>
          </div>
          </MuiThemeProvider>
    )
  }
} 
export default OptionalModal;

// async () => {
//   let a =  await this.getURL(); 
//   return a;
// };






