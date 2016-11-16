// NOT ES6 take care
// require.js looks for the following global when initializing

var require = {
    baseUrl: ".",
    paths: {
        "jquery":               "bower_modules/jquery/dist/jquery",
        "jqueryui-amd":         "bower_modules/jquery-ui/ui",
        "knockout":             "bower_modules/knockout/dist/knockout.debug",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text",
        "promise":              "bower_modules/es6-promise/promise.min",
        "hammerjs":             "bower_modules/hammerjs/hammer.min",
        "ojdnd":                "bower_modules/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min",
        "ojs":                  "bower_modules/oraclejet/dist/js/libs/oj/debug",
        "ojL10n":               "bower_modules/oraclejet/dist/js/libs/oj/ojL10n",
        "ojtranslations":       "bower_modules/oraclejet/dist/js/libs/oj/resources",
        "jet-komponents":       "bower_modules/jet-komponents/dist/jet-komponents",
        "css":                  "bower_modules/require-css/css",
        "moment":               "bower_modules/moment/min/moment.min",
        "axios":                "bower_modules/axios/dist/axios.min",
        "redux":                "bower_modules/redux/index",
        "redux-logger":         "bower_modules/redux-logger/index",
        "reselect":             "bower_modules/reselect/index",
        "history":              "bower_modules/history/index"
    },
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    }
};