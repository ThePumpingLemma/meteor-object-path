if (Meteor.isClient) {
  ObjectPath = window.objectPath;
} else {
  ObjectPath = Npm.require('object-path');
}

