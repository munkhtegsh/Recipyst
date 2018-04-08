import React, { Component } from 'react';
import Modal from 'react-modal';

class OptionalModal extends Component {
  constructor() {
    super();
    this.state = {
      health: {
        vegetarian: '',
        vegan: '',
        alcoholFree: '',
        sugarConscious: '',
      }, 
      diet: {
        highProtein: '',
        lowCarb: '',
        lowFat: '',
        balanced: ''
      },
      alergies: {
        gluten: '',
        dairy: '',
        eggs: '',
        soy: '',
        fish: '',
        shellfish: '',
        treenuts: '',
        peanuts: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCheckbox (e) {
    // check that input is selected
      // if selected state need to filled by the value
    if (e.target.type === 'checkbox') {
      // this.setState({
      //   [e.target.name]: e.target.value
      // })

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (e.target.type === 'selected' ) {
      alert(this.refs.test.checked === true)
    // }
    // const value = target.type === 'checkbox' ? target.checked : target.value;

  }

  render() {
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
                ref="test"
              />
            </label>

            <input type="submit" value="Submit" />
          </form>

          <button onClick={() => this.props.toggle()}>Done</button>
        </Modal>
    )
  }
} 
export default OptionalModal;


// <label> Vegan
// <input type="checkbox"
//   value="vegan"
//   name="health"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Sugar Conscious
// <input type="checkbox"
//   value="sugarConscious"
//   name="health"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Alcohol-Free
// <input type="checkbox"
//   value="alcohol-free"
//   name="health"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <h4> DIET </h4>

// <label> High-Protein
// <input type="checkbox"
//   value="high-protein"
//   name="diet"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Low-Carb 
// <input type="checkbox"
//   value="low-carb"
//   name="diet"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Low-Fat 
// <input type="checkbox"
//   value="low-fat"
//   name="diet"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Balanced
// <input type="checkbox"
//   value="balanced"
//   name="diet"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>
// </form>

// <h4> ALLERGIES </h4>

// <form>
// <label> Gluten
// <input type="checkbox"
//   value="gluten"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Dairy
// <input type="checkbox"
//   value="dairy"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Eggs
// <input type="checkbox"
// value="eggs"
// name="allergies"
// onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Soy
// <input type="checkbox"
//   value="soy"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Fish
// <input type="checkbox"
//   value="fish"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Shellfish
// <input type="checkbox"
//   value="shellfish"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Tree nuts
// <input type="checkbox"
//   value="treenuts"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>

// <label> Peanuts
// <input type="checkbox"
//   value="peanuts"
//   name="allergies"
//   onChange={(e) => this.handleCheckbox(e)}
// />
// </label>
