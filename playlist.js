'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.playlist = (event, context, callback) => {
    const detail =  JSON.parse(event.body);
    const params = {
      TableName: 'playlisttable',
      Item: {
        songname: detail.songname,
        playlist: detail.playlist
      }
    };
    dynamoDb.put(params, (error, result) => {
      if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Can not store this song in the playlist.',
      });
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify('Song is added to the playlist'),
    };
    callback(null, response);
  });

};
