import React, { Component } from 'react';
import {Bar ,Line,Pie,Doughnut  } from 'react-chartjs-2';

class Doughnutchart2 extends Component{

    constructor(props){
        super(props);
        this.state={
          chartDatadoughnut:{
                labels: ['Instagram','Facebook','YouTube','Twitter','TikTok'],
                datasets:[
                    {
                      
                      data: [12, 19, 3, 5, 2, ],
                      backgroundColor: [
                        '#072448',
                        '#54d2d2',
                        '#ffcb00"',
                        '#ff6150',
                        '#f8aa4b',
                        
                      ],
                      borderColor: [
                        '#072448',
                        '#54d2d2',
                        '#ffcb00"',
                        '#ff6150',
                        '#f8aa4b',
                      ],
                      borderWidth: 1,
                    },
                  ],


            }


            
        }
    }

    
    



    render(){
        return(
<div >




<Doughnut
  data={this.state.chartDatadoughnut}
/>



</div>


        )
    }

}

export default Doughnutchart2;