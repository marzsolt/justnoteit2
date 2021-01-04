'use strict';
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

/*function updateDatabase(data) {
  ... // update the database
  return newValue;
}*/

const app = express();
app.use(bodyParser);
app.post('/authenticate', (req, res) => {
    //const newValue = updateDatabase(res.body);
    
    const { accessToken } = req.body;

    /*res.json({
        token: accessToken
    });*/

    return res.status(200).send({
        token: accessToken
    });
});

module.exports.handler = serverless(app);