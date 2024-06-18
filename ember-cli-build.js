'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    locationType: 'history',
    fingerprint: {
      enabled: true,
      exclude: ['images/**'],
    },
  });

  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  return app.toTree();
};
