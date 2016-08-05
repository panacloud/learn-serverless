'use strict';

module.exports.create = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your create function executed successfully!', event }
);
module.exports.get = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your get function executed successfully!', event }
);
module.exports.update = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your update function executed successfully!', event }
);
module.exports.delete = (event, context, cb) => cb(null,
  { message: 'Go Serverless v1.0! Your delete function executed successfully!', event }
);


// You can add more handlers here, and reference them in serverless.yml
