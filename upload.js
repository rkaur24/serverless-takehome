'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.upload = (event, context, callback) => {
  event.Records.forEach((record) => {
    const song = record.s3.object.key;
    const params = {
      TableName: 'finalexamtable',
      Item: {
        songname: song
      }
    }
    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
};
