// Karma configuration for Unit testing
const path = require('path');

module.exports = function (config) {

    const configuration = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: 'spec.bundle.js', watched: false },
            { pattern: 'src/assets/*.json', watched: true, served: true, included: false }
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec.bundle.js': ['webpack', 'sourcemap']
        },

        // webpack
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        use: [
                            'awesome-typescript-loader',
                            'angular2-template-loader',
                            'source-map-loader'
                        ]
                    },
                    {
                        test: /\.html$/,
                        use: 'raw-loader'
                    },
                    {
                        test: /\.scss$/,
                        include: path.join(__dirname, 'src/styles'),
                        use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    },
                    {
                        test: /\.scss$/,
                        exclude: path.join(__dirname, 'src/styles'),
                        use: [
                            'raw-loader',
                            'sass-loader'
                        ]
                    }
                ],
                exprContextCritical: false
            },
            resolve: {
                extensions: ['.ts', '.js']
            },
            devtool: 'inline-source-map',
            performance: { hints: false }
        },

        webpackServer: {
            noInfo: true
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

    };

    config.set(configuration);

}
