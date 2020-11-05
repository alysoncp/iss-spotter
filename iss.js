const request = require('request');

const fetchMyIP = function(callback) {
  const requestString = 'https://api.ipify.org?format=json';
  request(requestString, (error, response, body) => {
    if (error !== null) {
      callback(error, response.statusCode, null);
    }  else {
      const data = JSON.parse(body).ip;
      callback(null, response.statusCode, data);
    }
 
  });
};


const fetchCoordsByIP = function(ip, callback) {
  requestString = 'http://ip-api.com/json/'+ip
  request(requestString, (error, response, body) => {
    if (error) {
      callback(error, null);
      return
    }  else if (response.statusCode !== 200) {
      callback(`We had a problem ${response.statusCode}`, null)
    } else {  
      const data = JSON.parse(body);
      const loc = {"lat": data.lat, "long": data.lon}
      callback(null, loc);
    } 

 
  });
};


const fetchISSFlyOverTimes = function(loc, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${loc.lat}&lon=${loc.long}`, (error, response, body) => {
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



const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, response, ip) => {
    if (error) {
      return callback(error, null)
    }  

    //console.log(ip)

    //After getting IP
    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      //console.log(loc);
      
      //After getting coords in a obj
      fetchISSFlyOverTimes(loc, (error, data) => {
        if (error) {
          return callback(error, null);
        }
          console.log(data);

      }); //fetchFlyTimes 
    }); //fetchCoords
  }); //fetchIP 
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };