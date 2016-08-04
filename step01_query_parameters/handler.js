'use strict';

// Your first function handler
module.exports.query = (event, context, cb) => {
  var value1 = event.query.value1;
  var a = parseInt(value1);
  a = a + 10;
  cb(null,
  { reponseValue: a }
);
}

// You can add more handlers here, and reference them in serverless.yml
