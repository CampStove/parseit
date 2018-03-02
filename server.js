const express = require('express');
const app = express();
const axios = require('axios');
const yahooUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

// axios.get('https://api.github.com/users/' + CampStove)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });

app.get('/api/yahoo', (req, res) => {
  axios.get(yahooUrl).then(({data}) => {
    res.send(data);
  });
});

// const request = require('request');
// app.get('/api/yahoo', function(req, res) {
//   request(yahooUrl, function(error, response, body) {
//     res.JSON.parse({body})
//   });
// });

// const getData = async function getData() {
//   const { payload } = await wreck.get(conditions);
//   const paths = JSON.parse(payload);
//
//   const output = reply
//     .response({ paths })
//     .type('application/json');
//   resolve(output.source.paths.query.results.channel.item.condition);
// };
//
// try {
//   getData();
// } catch (error) {
//   reject(error);
// }

app.use(express.static('public'));
app.listen(8080, () => console.log('listening on port 8080'));
