var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {

	component: {
		name: 'react-chartjs-2',
		dependencies: [
			'react',
			'react-dom',
			'chart.js'
		],
		lib: 'lib',
		file: 'index.js'
	},

	example: {
		src: 'ufirst/src',
		dist: 'ufirst/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'ufirst.js'
		],
		less: [
			'ufirst.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
