import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'HTTP Success Request response size',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
};

export default React.createClass({
  displayName: 'BarExample',

  render() {
    data.labels = this.props.dataSet.labels;
    data.datasets[0].data = this.props.dataSet.data;

    if (!data.datasets[0].data)
      return null
    return (
      <div>
        <h2>Request answer size for requests with response code '200'</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});
