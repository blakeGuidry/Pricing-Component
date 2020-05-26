const axios = require('axios');

let totTime = 0;
let successCount = 0;

const request = () => {
  let last10 = Math.floor(Math.random() * 1000000 + 9000000);

  axios.get(`http://localhost:9003/price/${last10}`)
    .then(res => {
      totTime += Number(res.headers['x-response-time'].split('ms')[0]);
      successCount++;
      console.log(`Avg response time of ${totTime / successCount}ms for ${successCount} requests`)
      
      if (successCount < 100) {
        request();
      }
    })
    .catch(err => {
      console.log(err)
      if (successCount < 100) {
        request();
      }
    })
}
request();

