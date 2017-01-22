require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: [],
  datasets: [{
    label: 'HTTP Success Request response size',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: []
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'BarExample',

  render: function render() {
    data.labels = this.props.dataSet.labels;
    data.datasets[0].data = this.props.dataSet.data;

    if (!data.datasets[0].data) return null;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Request answer size for requests with response code \'200\''
      ),
      _react2.default.createElement(_reactChartjs.Bar, {
        data: data,
        width: 100,
        height: 50,
        options: {
          maintainAspectRatio: false
        }
      })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: [],
  datasets: [{
    label: 'HTTP Request Response codes',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: []
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'BarExample',

  render: function render() {
    data.labels = this.props.dataSet.labels;
    data.datasets[0].data = this.props.dataSet.data;

    if (!data.datasets[0].data) return null;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Distribution of HTTP Answer Codes'
      ),
      _react2.default.createElement(_reactChartjs.HorizontalBar, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  labels: [],
  datasets: [{
    label: 'HTTP Requests per minute',
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
  }]
};

exports.default = _react2.default.createClass({
  displayName: 'LineExample',

  render: function render() {

    data.labels = this.props.dataSet.labels;
    data.datasets[0].data = this.props.dataSet.data;

    if (!data.datasets[0].data) return null;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Requests per minute'
      ),
      _react2.default.createElement(_reactChartjs.Line, { data: data })
    );
  }
});

},{"react":undefined,"react-chartjs-2":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
		labels: [],
		datasets: [{
				data: [],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}]
};

exports.default = _react2.default.createClass({
		displayName: 'PieExample',

		render: function render() {

				data.labels = this.props.dataSet.labels;
				data.datasets[0].data = this.props.dataSet.data;

				if (!data.datasets[0].data) return null;
				return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
								'h2',
								null,
								'HTTP Methods'
						),
						_react2.default.createElement(_reactChartjs.Pie, { data: data })
				);
		}
});

},{"react":undefined,"react-chartjs-2":undefined}],5:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _line = require('./components/line');

var _line2 = _interopRequireDefault(_line);

var _pie = require('./components/pie');

var _pie2 = _interopRequireDefault(_pie);

var _horizontalBar = require('./components/horizontalBar');

var _horizontalBar2 = _interopRequireDefault(_horizontalBar);

var _bar = require('./components/bar');

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.setState({
				data: {
					datasets: 0
				}
			});

			//the urls for the json files
			var url1 = 'https://api.myjson.com/bins/vluw7';
			var url2 = 'https://api.myjson.com/bins/tahcn';
			var url3 = 'https://api.myjson.com/bins/c31yv';
			var url4 = 'https://api.myjson.com/bins/171lfb';

			this.fetchData(this, 'dataSet1', url1);
			this.fetchData(this, 'dataSet2', url2);
			this.fetchData(this, 'dataSet3', url3);
			this.fetchData(this, 'dataSet4', url4);
		}
	}, {
		key: 'fetchData',
		value: function fetchData(myComp, dataset_name, url) {
			fetch(url).then(function (response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (json) {
				var _extends2;

				myComp.setState({
					data: _extends({}, myComp.state.data, (_extends2 = {}, _defineProperty(_extends2, dataset_name, json), _defineProperty(_extends2, 'datasets', myComp.state.data.datasets + 1), _extends2))
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {

			if (!this.state) return null;
			while (this.state.data.datasets < 4) {
				return null;
			}return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_line2.default, { dataSet: this.state.data.dataSet1 }),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_pie2.default, { dataSet: this.state.data.dataSet2 }),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_horizontalBar2.default, { dataSet: this.state.data.dataSet3 }),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_bar2.default, { dataSet: this.state.data.dataSet4 })
			);
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./components/bar":1,"./components/horizontalBar":2,"./components/line":3,"./components/pie":4,"react":undefined,"react-dom":undefined}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ1Zmlyc3Qvc3JjL2NvbXBvbmVudHMvYmFyLmpzIiwidWZpcnN0L3NyYy9jb21wb25lbnRzL2hvcml6b250YWxCYXIuanMiLCJ1Zmlyc3Qvc3JjL2NvbXBvbmVudHMvbGluZS5qcyIsInVmaXJzdC9zcmMvY29tcG9uZW50cy9waWUuanMiLCJ1Zmlyc3Qvc3JjL3VmaXJzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNLE9BQU87QUFDWCxVQUFRLEVBREc7QUFFWCxZQUFVLENBQ1I7QUFDRSxXQUFPLG9DQURUO0FBRUUscUJBQWlCLHNCQUZuQjtBQUdFLGlCQUFhLG9CQUhmO0FBSUUsaUJBQWEsQ0FKZjtBQUtFLDBCQUFzQixzQkFMeEI7QUFNRSxzQkFBa0Isb0JBTnBCO0FBT0UsVUFBTTtBQVBSLEdBRFE7QUFGQyxDQUFiOztrQkFlZSxnQkFBTSxXQUFOLENBQWtCO0FBQy9CLGVBQWEsWUFEa0I7O0FBRy9CLFFBSCtCLG9CQUd0QjtBQUNQLFNBQUssTUFBTCxHQUFjLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBakM7QUFDQSxTQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLElBQWpCLEdBQXdCLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBM0M7O0FBRUEsUUFBSSxDQUFDLEtBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsSUFBdEIsRUFDRSxPQUFPLElBQVA7QUFDRixXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQ0UsY0FBTSxJQURSO0FBRUUsZUFBTyxHQUZUO0FBR0UsZ0JBQVEsRUFIVjtBQUlFLGlCQUFTO0FBQ1AsK0JBQXFCO0FBRGQ7QUFKWDtBQUZGLEtBREY7QUFhRDtBQXRCOEIsQ0FBbEIsQzs7Ozs7Ozs7O0FDbEJmOzs7O0FBQ0E7Ozs7QUFFQSxJ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T0FBSSxDQUFDLEtBQUssS0FBVixFQUNDLE9BQU8sSUFBUDtBQUNELFVBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFoQixHQUEyQixDQUFsQztBQUNDLFdBQU8sSUFBUDtBQURELElBR0EsT0FDQztBQUFBO0FBQUE7QUFDQyw2Q0FERDtBQUVDLG9EQUFhLFNBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUF0QyxHQUZEO0FBSUMsNkNBSkQ7QUFLQyxtREFBWSxTQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsUUFBckMsR0FMRDtBQU9DLDZDQVBEO0FBUUMsNkRBQXNCLFNBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUEvQyxHQVJEO0FBVUMsNkNBVkQ7QUFXQyxtREFBWSxTQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsUUFBckM7QUFYRCxJQUREO0FBZ0JBOzs7O0VBbEVnQixnQkFBTSxTOztBQXFFeEIsbUJBQVMsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXJ9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogW10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdIVFRQIFN1Y2Nlc3MgUmVxdWVzdCByZXNwb25zZSBzaXplJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjIpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsOTksMTMyLDEpJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMC40KScsXG4gICAgICBob3ZlckJvcmRlckNvbG9yOiAncmdiYSgyNTUsOTksMTMyLDEpJyxcbiAgICAgIGRhdGE6IFtdXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQmFyRXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuICAgIGRhdGEubGFiZWxzID0gdGhpcy5wcm9wcy5kYXRhU2V0LmxhYmVscztcbiAgICBkYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSB0aGlzLnByb3BzLmRhdGFTZXQuZGF0YTtcblxuICAgIGlmICghZGF0YS5kYXRhc2V0c1swXS5kYXRhKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJlcXVlc3QgYW5zd2VyIHNpemUgZm9yIHJlcXVlc3RzIHdpdGggcmVzcG9uc2UgY29kZSAnMjAwJzwvaDI+XG4gICAgICAgIDxCYXJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hvcml6b250YWxCYXJ9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogW10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdIVFRQIFJlcXVlc3QgUmVzcG9uc2UgY29kZXMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsOTksMTMyLDAuMiknLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjQpJyxcbiAgICAgIGhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxuICAgICAgZGF0YTogW11cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCYXJFeGFtcGxlJyxcblxuICByZW5kZXIoKSB7XG4gICAgZGF0YS5sYWJlbHMgPSB0aGlzLnByb3BzLmRhdGFTZXQubGFiZWxzO1xuICAgIGRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNldC5kYXRhO1xuXG4gICAgaWYgKCFkYXRhLmRhdGFzZXRzWzBdLmRhdGEpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RGlzdHJpYnV0aW9uIG9mIEhUVFAgQW5zd2VyIENvZGVzPC9oMj5cbiAgICAgICAgPEhvcml6b250YWxCYXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluZX0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDonSFRUUCBSZXF1ZXN0cyBwZXIgbWludXRlJyxcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXG4gICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcbiAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcbiAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgIHBvaW50UmFkaXVzOiAxLFxuICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgZGF0YTogW11cbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaW5lRXhhbXBsZScsXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgZGF0YS5sYWJlbHMgPSB0aGlzLnByb3BzLmRhdGFTZXQubGFiZWxzXG4gICAgZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gdGhpcy5wcm9wcy5kYXRhU2V0LmRhdGFcblxuICAgIGlmICghZGF0YS5kYXRhc2V0c1swXS5kYXRhKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlJlcXVlc3RzIHBlciBtaW51dGU8L2gyPlxuICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQaWV9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG5cdGxhYmVsczogW10sXG5cdGRhdGFzZXRzOiBbe1xuXHRcdGRhdGE6IFtdLFxuXHRcdGJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XSxcblx0XHRob3ZlckJhY2tncm91bmRDb2xvcjogW1xuXHRcdCcjRkY2Mzg0Jyxcblx0XHQnIzM2QTJFQicsXG5cdFx0JyNGRkNFNTYnXG5cdFx0XVxuXHR9XVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1BpZUV4YW1wbGUnLFxuXG4gIHJlbmRlcigpIHtcblxuXHRcdGRhdGEubGFiZWxzID0gdGhpcy5wcm9wcy5kYXRhU2V0LmxhYmVsc1xuXHRcdGRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IHRoaXMucHJvcHMuZGF0YVNldC5kYXRhXG5cblx0XHRpZiAoIWRhdGEuZGF0YXNldHNbMF0uZGF0YSlcbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5IVFRQIE1ldGhvZHM8L2gyPlxuICAgICAgICA8UGllIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IExpbmVFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9saW5lJztcbmltcG9ydCBQaWVFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9waWUnO1xuaW1wb3J0IEhvcml6b250YWxCYXJFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9ob3Jpem9udGFsQmFyJztcbmltcG9ydCBCYXJFeGFtcGxlIGZyb20gJy4vY29tcG9uZW50cy9iYXInO1xuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRkYXRhc2V0czogMFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly90aGUgdXJscyBmb3IgdGhlIGpzb24gZmlsZXNcblx0ICAgIHZhciB1cmwxID0gJ2h0dHBzOi8vYXBpLm15anNvbi5jb20vYmlucy92bHV3Nydcblx0XHR2YXIgdXJsMiA9ICdodHRwczovL2FwaS5teWpzb24uY29tL2JpbnMvdGFoY24nXG5cdFx0dmFyIHVybDMgPSAnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL2MzMXl2J1xuXHRcdHZhciB1cmw0ID0gJ2h0dHBzOi8vYXBpLm15anNvbi5jb20vYmlucy8xNzFsZmInXG5cblx0XHR0aGlzLmZldGNoRGF0YSh0aGlzLCAnZGF0YVNldDEnLCB1cmwxKVxuXHRcdHRoaXMuZmV0Y2hEYXRhKHRoaXMsICdkYXRhU2V0MicsIHVybDIpXG5cdFx0dGhpcy5mZXRjaERhdGEodGhpcywgJ2RhdGFTZXQzJywgdXJsMylcblx0XHR0aGlzLmZldGNoRGF0YSh0aGlzLCAnZGF0YVNldDQnLCB1cmw0KVxuXHR9XG5cblx0ZmV0Y2hEYXRhKG15Q29tcCwgZGF0YXNldF9uYW1lLCB1cmwpe1xuXHRcdGZldGNoKHVybClcblx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcblx0XHRcdG15Q29tcC5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHQuLi5teUNvbXAuc3RhdGUuZGF0YSxcblx0XHRcdFx0XHRbZGF0YXNldF9uYW1lXToganNvbixcblx0XHRcdFx0XHRkYXRhc2V0czogbXlDb21wLnN0YXRlLmRhdGEuZGF0YXNldHMrMSxcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXG5cblx0cmVuZGVyKCkge1xuXG5cdFx0aWYgKCF0aGlzLnN0YXRlKVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR3aGlsZSAodGhpcy5zdGF0ZS5kYXRhLmRhdGFzZXRzIDwgNClcblx0XHRcdHJldHVybiBudWxsXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxMaW5lRXhhbXBsZSBkYXRhU2V0PXt0aGlzLnN0YXRlLmRhdGEuZGF0YVNldDF9Lz5cblxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PFBpZUV4YW1wbGUgZGF0YVNldD17dGhpcy5zdGF0ZS5kYXRhLmRhdGFTZXQyfS8+XG5cblx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdDxIb3Jpem9udGFsQmFyRXhhbXBsZSBkYXRhU2V0PXt0aGlzLnN0YXRlLmRhdGEuZGF0YVNldDN9Lz5cblxuXHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0PEJhckV4YW1wbGUgZGF0YVNldD17dGhpcy5zdGF0ZS5kYXRhLmRhdGFTZXQ0fS8+XG5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==
