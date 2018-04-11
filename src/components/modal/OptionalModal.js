import React, { Component } from 'react';
import Modal from 'react-modal';

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
      queries: ''
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
    this.setState({ queries })    
    console.log(queries)
    this.props.getFood(queries);
  }

  render() {
    // console.log(this.state.queries)
    return (
        <Modal 
          className="optionModal"
          isOpen={!!this.props.selectedOption}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          ariaHideApp={false}
          >
          <h3> Advanced selection </h3>
          <h4> HEALTH </h4>
          
          <form onSubmit={this.handleSubmit}>
            <label> Vegetarian
              <input type="checkbox"
                value="vegetarian"
                name="health"
                onChange={(e) => this.handleCheckbox(e)}
                default checked={this.state.health.vegetarian}
              />
            </label>

            <label> Vegan
            <input type="checkbox"
              value="vegan"
              name="health"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.health.vegan}
            />
            </label>

            <label> Sugar Conscious
            <input type="checkbox"
              value="sugar-conscious"
              name="health"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.health.sugarConscious}
            />
            </label>

            <label> Alcohol-Free
            <input type="checkbox"
              value="alcohol-free"
              name="health"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.health.alcoholFree}
            />
            </label>

            <h4> DIET </h4>

            <label> High-Protein
            <input type="checkbox"
              value="high-protein"
              name="diet"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.diet.highProtein}
            />
            </label>

            <label> Low-Carb 
            <input type="checkbox"
              value="low-carb"
              name="diet"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.diet.lowCarb}
            />
            </label>

            <label> Low-Fat 
            <input type="checkbox"
              value="low-fat"
              name="diet"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.diet.lowFat}
            />
            </label>

            <label> Balanced
            <input type="checkbox"
              value="balanced"
              name="diet"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.diet.balanced}
            />
            </label>
            </form>

            <h4> ALLERGIES </h4>

            <form>
            <label> Gluten
            <input type="checkbox"
              value="gluten"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.gluten}
            />
            </label>

            <label> Dairy
            <input type="checkbox"
              value="dairy"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.dairy}
            />
            </label>

            <label> Eggs
            <input type="checkbox"
              value="eggs"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.eggs}
            />
            </label>

            <label> Soy
            <input type="checkbox"
              value="soy"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.soy}
            />
            </label>

            <label> Fish
            <input type="checkbox"
              value="fish"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.fish}
            />
            </label>

            <label> Shellfish
            <input type="checkbox"
              value="shellfish"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.shellfish}
            />
            </label>

            <label> Tree nuts
            <input type="checkbox"
              value="treenuts"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.treenuts}
            />
            </label>

            <label> Peanuts
            <input type="checkbox"
              value="peanuts"
              name="allergies"
              onChange={(e) => this.handleCheckbox(e)}
              checked={this.state.allergies.peanuts}
            />
            </label>
          </form>

          <button onClick={() => {
            this.props.toggle(); 
            this.getURL()
          }}>Done</button>
        </Modal>
    )
  }
} 
export default OptionalModal;

// async () => {
//   let a =  await this.getURL(); 
//   return a;
// };