require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
        "jquery":               "../../bower_components/jquery/dist/jquery",
        "knockout":             "../../bower_components/knockout/dist/knockout",
        "text":                 "../../bower_components/requirejs-text/text",
        "sanitize":             "../../bower_components/google-caja/html-sanitizer-minified",
        "dataprovider":         "../../components/dataprovider/mockdataprovider",
        "home":                 "../../components/home-page/home",
        "post":                 "../../components/post-page/post",
        "spec":                 "./spec",
        'jasmine':              "../lib/jasmine-2.3.4/jasmine",
        'jasmine-html':         "../lib/jasmine-2.3.4/jasmine-html",
        'boot':                 "../lib/jasmine-2.3.4/boot",
    },
    shim: {
        'jasmine-html': {
            deps: ['jasmine'],
        },
        'boot': {
            deps: ['jasmine-html'],
        },
        'spec': {
            deps: ['boot'],
        },
    }
});


require(['spec'], function () {
    startJasmine();
});