import React, { Component } from 'react';
import {Bar ,Line,Pie,Doughnut  } from 'react-chartjs-2';

class Linechart3 extends Component{

    constructor(props){
        super(props);
        this.state={
            Linechart3:{
                labels: ['Jun', 'Feb', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
                datasets: [
                    {
                      label: 'No Of Users',
                      data: [12, 19, 3, 5, 2, 3,20,4,35,52,12,14],
                      fill: false,
                      backgroundColor: '#ffe227',
                      borderColor: '#822659',
                    },
                  ],


            }


            
        }
    }

    
    



    render(){
        return(
<div>




<Line
  data={this.state.Linechart3}

  options={{ 

    scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
   
  }}
/>



</div>


        )
    }

}

export default Linechart3;