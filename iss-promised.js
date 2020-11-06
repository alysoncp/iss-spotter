// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip =  JSON.parse(body).ip
  return request(`http://ip-api.com/json/${ip}`)
};

const fetchISSFlyOverTimes = function(body) {
  const data = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${data.lat}&lon=${data.lon}`);
};

const nextISSTimesForMyLocation = function() {
  console.log("before");
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    console.log("after data")
    return JSON.parse(body).response
  })
  .catch(error => {
    console.log("error")
  });

}  
console.log("end");

module.exports = { nextISSTimesForMyLocation };