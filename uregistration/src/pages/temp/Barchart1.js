import React, { Component } from 'react';
import {Bar ,Line,Pie,Doughnut  } from 'react-chartjs-2';

class Barchart1 extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS','UV','REF'],
                datasets: [
                    {
                      label: 'Successful',
                      data: [12, 19, 3, 5, 2, 3,1,4],
                      backgroundColor: 'rgb(245, 202, 63)',
                    },
                    {
                      label: 'Pending',
                      data: [2, 3, 20, 5, 1, 4,8,6],
                      backgroundColor: 'rgb(18, 197, 153)',
                    },
                   
                  ],


            }


            
        }
    }

    
    



    render(){
        return(
<div className="chart">


my chart

<Bar
  data={this.state.chartData}

  options={{ 


   
  }}
/>



</div>


        )
    }

}

export default Barchart1;