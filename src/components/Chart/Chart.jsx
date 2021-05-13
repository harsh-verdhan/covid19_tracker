import React from 'react'
import { Bar } from "react-chartjs-2"

import styles from "./Chart.module.css"

function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const globalBarChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recoverd', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }

          }
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
        />
      ) : null
  )

  const countryBarChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recoverd', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }

          }
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
        />
      ) : null
  )

  return (
    <div className={styles.container}>
      {country ? countryBarChart : globalBarChart}
    </div>
  )
}

export default Chart;