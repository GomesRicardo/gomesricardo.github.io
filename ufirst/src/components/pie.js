import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [],
	datasets: [{
		data: [],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default React.createClass({
  displayName: 'PieExample',

  render() {

		data.labels = this.props.dataSet.labels
		data.datasets[0].data = this.props.dataSet.data

		if (!data.datasets[0].data)
      return null
    return (
      <div>
        <h2>HTTP Methods</h2>
        <Pie data={data} />
      </div>
    );
  }
});
