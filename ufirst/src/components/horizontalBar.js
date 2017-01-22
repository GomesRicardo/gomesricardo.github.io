import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'HTTP Request Response codes',
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
        <h2>Distribution of HTTP Answer Codes</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
});
