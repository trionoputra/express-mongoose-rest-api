var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/dbname';
// current URI deprecated future replace
// mongoose.connect('mongodb://user:[password@sample.com](mailto:password@sample.com):port/dbname', { useNewUrlParser: true })

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
