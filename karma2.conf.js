module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['dots'],
        browsers: ['PhantomJS'],

        files: [
            'source/greeting.controller.spec.ts'
        ],

        preprocessors: {
            '*.spec.ts': ['webpack', 'sourcemap']
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        plugins: [
            require("karma-webpack")
        ]

    });
};