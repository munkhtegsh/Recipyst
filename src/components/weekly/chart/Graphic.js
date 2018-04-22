import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

class Graphic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.currentNutrients)

    let nutrientNames = this.props.currentNutrients.map((item) => {
      let arr = item.split(' ');
      return arr[0];
    });

    let nutrientAmount= this.props.currentNutrients.map((item) => {
      let arr = item.split(' ');
      return arr[1];
    })

    console.log(nutrientNames)

    const data = {
      labels: nutrientNames,
      datasets: [
        {
          responsive: true,
          maintainAspectRatio:false,
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          hoverBackgroundColor: 'red',
          data: nutrientAmount
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [19, 30, 18, 80, 14]
      },
      // options: {
      //   legend: {
      //     display: false
      //   }
      // }
      ]
    };
  
    return (
      <div className="wrapper__container">
        <main className="wrapper">
          <Doughnut width={800} height={800} data={data} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentNutrients: state.currentNutrients
  }
}

export default connect(mapStateToProps)(Graphic);