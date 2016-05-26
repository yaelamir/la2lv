var _ = require('lodash');

var localEnvVars = {
  TITLE:      'la2lv/',
  SAFE_TITLE: 'la2lv/'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
