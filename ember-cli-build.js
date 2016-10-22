/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });


  /*--- jQuery ---*/
  app.import('bower_components/jquery/dist/jquery.min.js');
  /*--- import sweetalert ---*/

  /*--- import sweetalert ---*/
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
   });
  /*--- import sweetalert ---*/

  app.import('bower_components/font-awesome/css/font-awesome.min.css');

  /*--- import admin template ---*/
  app.import('bower_components/metisMenu/dist/metisMenu.min.css');
  app.import('bower_components/metisMenu/dist/metisMenu.min.js');

  app.import('bower_components/sb-admin-2/css/sb-admin-2.css');
  app.import('bower_components/sb-admin-2/css/plugins/timeline.css');
  app.import('bower_components/sb-admin-2/js/sb-admin-2.js');
  /*--- import admin template ---*/

  app.import('bower_components/notifyjs/dist/notify.js');


  return app.toTree();
};
