import React, { Component } from 'react';
import Modal from 'react-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },  block: {
    maxWidth: 250,
  }
};

class OptionalModal extends Component {
  constructor() {
    super();
    this.state = {
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
    }
  }
  
  // updating states based on global objects
  handleCheckbox (e) {  
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: { ...this.state[name], [value]: !this.state[name][value] } // !important, but uncontrolled vs controlled
    })
  }

  // creating queries from selected checkbox
  getURL = () => {
    let newQueries = new URLSearchParams();
    for (let key in this.state) {
      let eachState = this.state[key];
      for (let value in eachState) {
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
    return (
      <MuiThemeProvider>
        <Modal 
          className="optionModal"
          isOpen={!!this.props.selectedOption}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          ariaHideApp={false}
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
            />
            
            <Checkbox
              label="Vegan"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health.vegan}
              onCheck={(e) => this.handleCheckbox(e)}
              value="vegan"
              name="health"
            />

            <Checkbox
              label="Sugar Conscious"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health['sugar-conscious']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="sugar-conscious"
              name="health"
            />

            <Checkbox
              label="Alcohol-Free"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.health['alcohol-free']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="alcohol-free"
              name="health"
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
            />

            <Checkbox
              label="Low-Carb"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet['low-carb']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="low-carb"
              name="diet"
            />

            <Checkbox
              label="Low-Fat"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet['low-fat']}
              onCheck={(e) => this.handleCheckbox(e)}
              value="low-fat"
              name="diet"
            />

            <Checkbox
              label="Balanced"
              labelPosition="left"
              style={styles.checkbox}
              defaultChecked={this.state.diet.balanced}
              onCheck={(e) => this.handleCheckbox(e)}
              value="balanced"
              name="diet"
            />
            </form>

          

          <button onClick={() => {
            this.props.toggle(); 
            this.getURL();
          }}>Done</button>
        </Modal>
        </MuiThemeProvider>
    )
  }
} 
export default OptionalModal;

// async () => {
//   let a =  await this.getURL(); 
//   return a;
// };






// <h4> ALLERGIES </h4>

// <form>
//   <Checkbox
//     label="Gluten"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.gluten}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="gluten"
//     name="allergies"
//   />
  
//   <Checkbox
//     label="Dairy"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.dairy}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="dairy"
//     name="allergies"
//   />

//   <Checkbox
//     label="Eggs"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.eggs}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="eggs"
//     name="allergies"
//   />

//   <Checkbox
//     label="Soy"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.soy}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="soy"
//     name="allergies"
//   />

//   <Checkbox
//     label="Fish"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.fish}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="fish"
//     name="allergies"
//   />

//   <Checkbox
//     label="Shellfish"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.shellfish}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="shellfish"
//     name="allergies"
//   />
  
//   <Checkbox
//     label="Tree nuts"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.treenuts}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="treenuts"
//     name="allergies"
//   />

//   <Checkbox
//     label="Peanuts"
//     labelPosition="left"
//     style={styles.checkbox}
//     defaultChecked={this.state.diet.peanuts}
//     onCheck={(e) => this.handleCheckbox(e)}
//     value="peanuts"
//     name="allergies"
//   />
// </form>