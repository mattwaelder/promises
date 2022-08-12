/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filepath, callback) => {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data.toString().split('\n')[0])
  })
}

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  request.get(url, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data.statusCode)
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
