import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label:'HTTP Requests per minute',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

export default React.createClass({
  displayName: 'LineExample',

  render() {

    data.labels = this.props.dataSet.labels
    data.datasets[0].data = this.props.dataSet.data

    if (!data.datasets[0].data)
      return null
    return (
      <div>
        <h2>Requests per minute</h2>
        <Line data={data} />
      </div>
    );
  }
});
