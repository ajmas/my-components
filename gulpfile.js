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
        name: 'index',
        dependencies: [
            'classnames',
            'react',
            'react-dom'
        ],
        src: 'src',
        lib: 'lib',
        scripts: [
            'index.js'
        ],
    }

};

initGulpTasks(gulp, taskConfig);
