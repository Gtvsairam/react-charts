import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import data from './data.json'
import '../index.css'
import { Link } from 'react-router-dom';
const options = {
  plugins: {
    legend: {
      position: 'right'
    },
    title: {
      display: 'true',
      text: "Sales Chart"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
}
const BarChart = () => {
  const [chartData, setChartData] = useState({})
  
  useEffect(() => {
    setChartData({
      labels: data.map(item => item.month),
      datasets: [
        {
          label: 'Sales for 2021',
          data: data.map((item) => item.Amount),
          fill: true,
          tension: 0.1,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192,0.5)',
        },
        {
          label: 'Sales for 2022',
          data: data.map((item) => item.Amount2),
          fill: true,
          tension: 0.1,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    })


  }, [])
  return (
    <div className='chart_flow'>
      <span className='back'>
      <Link to= '/'>
      <img src="https://img.icons8.com/flat-round/54/null/circled-left.png" alt=''/>
      </Link>
      </span>
      <h1>Bar Chart</h1>
      
      {chartData && chartData?.datasets && (
        <Bar options={options} data={chartData} />

      )}
    </div>
  )
}

export default BarChart