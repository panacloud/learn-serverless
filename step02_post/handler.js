'use strict';

// Your first function handler
module.exports.mypost = (event, context, cb) => {
  var body = event.body;
  var value1 = event.query.value1;
  var a = parseInt(value1);
  a = a + 10;
  cb(null, { queryValue: a, body: body}
);
}

// You can add more handlers here, and reference them in serverless.yml
