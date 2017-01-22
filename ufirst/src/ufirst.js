import React from 'react';
import ReactDOM from 'react-dom';

import LineExample from './components/line';
import PieExample from './components/pie';
import HorizontalBarExample from './components/horizontalBar';
import BarExample from './components/bar';



class App extends React.Component {

	componentDidMount() {

		this.setState({
			data: {
				datasets: 0
			}
		});

		//the urls for the json files
	    var url1 = 'https://api.myjson.com/bins/vluw7'
		var url2 = 'https://api.myjson.com/bins/tahcn'
		var url3 = 'https://api.myjson.com/bins/c31yv'
		var url4 = 'https://api.myjson.com/bins/171lfb'

		this.fetchData(this, 'dataSet1', url1)
		this.fetchData(this, 'dataSet2', url2)
		this.fetchData(this, 'dataSet3', url3)
		this.fetchData(this, 'dataSet4', url4)
	}

	fetchData(myComp, dataset_name, url){
		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(json) {
			myComp.setState({
				data: {
					...myComp.state.data,
					[dataset_name]: json,
					datasets: myComp.state.data.datasets+1,
				}
			});
		});
	}



	render() {

		if (!this.state)
			return null
		while (this.state.data.datasets < 4)
			return null

		return (
			<div>
				<hr />
				<LineExample dataSet={this.state.data.dataSet1}/>

				<hr />
				<PieExample dataSet={this.state.data.dataSet2}/>

				<hr />
				<HorizontalBarExample dataSet={this.state.data.dataSet3}/>

				<hr />
				<BarExample dataSet={this.state.data.dataSet4}/>

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
