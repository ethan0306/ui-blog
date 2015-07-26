// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "bower_components/bootstrap/dist/js/bootstrap.min",
        "crossroads":           "bower_components/crossroads/dist/crossroads.min",
        "hasher":               "bower_components/hasher/dist/js/hasher.min",
        "jquery":               "bower_components/jquery/dist/jquery",
        "knockout":             "bower_components/knockout/dist/knockout",
        "knockout-projections": "bower_components/knockout-projections/dist/knockout-projections",
        "signals":              "bower_components/js-signals/dist/signals.min",
        "text":                 "bower_components/requirejs-text/text",
        "sanitize":             "bower_components/google-caja/html-sanitizer-minified",
        "dataprovider":         "components/dataprovider/dataprovider"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};
