/* global Package, Npm */

Package.describe({
  name: "themeteorchef:bert",
  version: "2.2.3",
  summary: "A client side, multi-style alerts system for Meteor.",
  git: "http://github.com/themeteorchef/bert",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.use([
    'ecmascript',
    'templating',
    'session',
    'fourseven:scss@4.12.0',
    'tracker'
  ], 'client');

  Npm.depends({
    'animate.css': '4.1.1',
    '@fortawesome/fontawesome-free': '6.1.2'
  })

  api.mainModule('bert.js', 'client');

  api.export("Bert");
});

Package.onTest(function (api) {
  api.use(["tinytest", "session", "jquery"]);
  api.use("themeteorchef:bert");
  api.addFiles("tests/client.js", "client");
});
