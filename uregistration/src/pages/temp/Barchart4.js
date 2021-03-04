import React, { Component } from 'react';
import {Bar ,Line,Pie,Doughnut  } from 'react-chartjs-2';

class Barchart4 extends Component{

    constructor(props){
        super(props);
        this.state={
            Barchart4:{
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS','UV','REF'],
                datasets: [
                    {
                      label: '',
                      data: [12, 19, 3, 5, 2, 3,1,4],
                      backgroundColor: 'rgb(245, 202, 63)',
                      backgroundColor: 'rgb(242, 202, 63)',
                      backgroundColor: 'rgb(245, 208, 63)',
                      backgroundColor: 'rgb(245, 202, 63)',
                    },
                  
                   
                  ],


            }


            
        }
    }

    
    



    render(){
        return(
<div >




<Bar
  data={this.state.Barchart4}

  options={{ 


   
  }}
/>



</div>


        )
    }

}

export default Barchart4;