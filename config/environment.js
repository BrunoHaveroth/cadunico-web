/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'cadunico-web',
    podModulePrefix: 'cadunico-web/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiBaseUrl = 'http://localhost:1337';
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.apiBaseUrl = 'http://localhost:1337';
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }


  ENV['ember-simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: [ENV.apiBaseUrl]
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.apiBaseUrl + '/auth/login',
    identificationField: 'identifier',
    passwordField: 'password',
    tokenPropertyName: 'access_token',
    authorizationHeaderName: 'authorization',
    authorizationPrefix: 'Bearer '
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: [ENV.apiBaseUrl]
  };

  return ENV;
};
