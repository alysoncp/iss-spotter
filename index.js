
// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

/*fetchMyIP((error, response, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  if (response === 200){
    console.log('It worked! Returned IP:' , ip);
  } else {
    console.log(`No go! Error code: ${response}`);
  }
  
  return
});
*/

/*
fetchCoordsByIP('66.183.219.115', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.lat);
    console.log(data.lon);
  }

});
*/


fetchISSFlyOverTimes('49.2183', '-122.9093', (error, data) => {
 if(error){
   console.log("Houston we have a problem");
 } else {
   console.log(data)
 }
});