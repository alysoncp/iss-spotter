
// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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


fetchCoordsByIP('66.183.219.115', (error, data) => {
  if (data.status === 'fail') {
    console.log(data.message);
  } else {
    console.log(data.lat);
    console.log(data.lon);
  }

});