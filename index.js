
// index.js
const { fetchMyIP } = require('./iss');

fetchMyIP((error, response, ip) => {
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