import React, { Fragment } from "react";
import { Bar, Legend, WrapperChartStyled } from "./chart.styled";


interface ChatType {
  data: Array<number>
  legends: Array<string>
  barColor: string
  barHeight: number
}

export function Chart({data, legends, barColor, barHeight}: ChatType) {


  return (
    <WrapperChartStyled barHeight={barHeight} >

      {data.map((value, key) => {
        return(
          <React.Fragment key={key}>
            <Legend key={`legend-${key}`}>{legends[key]}</Legend>
            <Bar key={`bar-${key}`} value={value} barColor={barColor} barHeight={barHeight}/>
          </React.Fragment>
        )
      })}
      
    </WrapperChartStyled>
  )
}