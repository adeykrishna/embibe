import React from "react";
import {
    XYPlot,
    VerticalBarSeries,
    XAxis,YAxis
} from 'react-vis';



const Chart = props =>{
    const chartWidth = 200;
    const chartHeight = 200;
    const chartDomain = [0, 100];
    return(
        <XYPlot 
        xType="ordinal" 
        width={chartWidth} 
        height={chartHeight} 
        yDomain={chartDomain}
        
      >
           <XAxis />
           <YAxis />
         <VerticalBarSeries
             data={props.data}
         />
     </XYPlot>
    )
}

export default Chart;