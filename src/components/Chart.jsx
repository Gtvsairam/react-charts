import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useEffect, useState } from "react";
import data from './data.json'
import '../index.css'
const options = {
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display: 'true',
            text:"Line Chart"
        },
       scales: {
        yAxes: [
            {
               ticks:{
                min: 0,
                max: 10,
                stepSize: 1,
               } 
            }
        ]
       }
    }
}
  const Chartflow = () => {
    const [chartData, setChartData] = useState({})

  useEffect(() => {
      setChartData({
        labels: data.map(item => item.month),
        datasets: [
          {
            label:'Sales for 2021',
            data: data.map((item) => item.Amount),
            fill: true,
            tension: 0.1,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192,0.5)',
            pointBackgroundColor:['red'],
            pointBorderColor:['red'],
          },
          {
            label:'Sales for 2022',
            data: data.map((item) => item.Amount2),
            fill: true,
            tension: 0.1,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointBackgroundColor:['blue'],
            pointBorderColor:['blue'],
          },
        ],
      })
    

  }, [])

    return (
    <div className='chart_flow'>
    <h1>Line Chart</h1>
    {chartData && chartData?.datasets && (
    <Line options={options} data={chartData}/>
    )}
    </div>
  )
}

export default Chartflow