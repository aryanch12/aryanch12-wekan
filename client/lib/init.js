
if (Meteor.isClient) {
  window.process = { env: { NODE_ENV: 'development' } };
  window.Buffer = require('buffer').Buffer;
}
