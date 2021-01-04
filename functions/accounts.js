'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

/*function updateDatabase(data) {
  ... // update the database
  return newValue;
}*/

app.use(bodyParser);
app.post('/authenticate', (req, res) => {
    //const newValue = updateDatabase(res.body);
    
    const { accessToken } = req.body;

    res.json({
        token: accessToken
    });
});

module.exports.handler = serverless(app);