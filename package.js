Package.describe({
  name: 'thepumpinglemma:object-path',
  summary: 'Meteor package that wraps the object-path package from NPM.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-object-path.git'
});

Npm.depends({
  'object-path': '0.6.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('ObjectPath');
  api.addFiles('.npm/package/node_modules/object-path/index.js', ['client']);
  api.addFiles('thepumpinglemma:object-path.js');
});

