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

    if (error) {
      callback(error, null);
      return
    }  else if (response.statusCode !== 200) {
      callback(`We had a problem ${response.statusCode}`, null)
    } else {  
      const data = JSON.parse(body);
      callback(null, data);
    } 

 
  });
};


const fetchISSFlyOverTimes = function(lat, long, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return
    }  else if (response.statusCode !== 200) {
      callback(`We had a problem ${response.statusCode}`, null)
    } else {  
      const data = JSON.parse(body);
      callback(null, data);
    } 
 
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };