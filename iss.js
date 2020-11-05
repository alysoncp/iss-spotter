const request = require('request');

const fetchMyIP = function(callback) {
  const requestString = 'https://api.ipify.org?format=json';
  request(requestString, (error, response, body) => {
    if (error !== null) {
      callback(error, response.statusCode, null);
    }  else {
      const data = JSON.parse(body);
      callback(null, response.statusCode, data);
    }
 
  });
};


const fetchCoordsByIP = function(ip, callback) {
  request(`http://ip-api.com/json/${ip}`, (error, response, body) => {
    const data = JSON.parse(body);
    callback(response.statusCode, data);
  
 
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };