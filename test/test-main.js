var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore',
        'backbone': '../lib/backbone',
        'Todo': '../src/todo'
    },

    shim: {
        'Todo': {
            deps: ['backbone'],
            exports: 'Todo'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: ['backbone'].concat(tests),

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
