'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: 'finalexamtable',
    Key: {
      songname: event.pathParameters.songname,
    },
  };
  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Can not fetch the song',
      });
      return;
    }
    if(result.Item == undefined)
    {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Song not found'),
      };
      callback(null, response);
    }
    else
    {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Song file '+result.Item.songname + ' is found'),
      };
      callback(null, response);
      return;
    }
  });
};
