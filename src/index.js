const express = require('express');
const app = express();
const axios = require('axios');
const yahooUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

app.get('/api/yahoo', (req, res) => {
  axios.get(yahooUrl).then(({data}) => {
    res.send(data);
  });
});

app.use(express.static('public'));

app.listen(3000, () => console.log('example app listening on port 3000'));
