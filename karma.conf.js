const webpackConfig = require('./webpack.dev.js');

module.exports = function(config) {
    config.set({

        preprocessors: {
            'src/js/index.js': ['webpack'],
            'src/js/**/*.spec.js': ['webpack']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        webpack: webpackConfig,

        basePath: '',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/**/*.spec.js',
            'src/js/index.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome', 'Safari'],

        plugins: [
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-jasmine',
            'karma-webpack',
            'karma-jasmine-html-reporter'
        ],

        reporters: ['kjhtml', 'progress'],
        colors: true
    });
};
