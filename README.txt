Run sls deploy

URL to get list of all the songs:
https://mqiyfglw88.execute-api.us-west-2.amazonaws.com/dev/spotify
  
URL to search a particular songs:
https://mqiyfglw88.execute-api.us-west-2.amazonaws.com/dev/spotify/{songname}

To add song in playlist:
curl -X POST https://mqiyfglw88.execute-api.us-west-2.amazonaws.com/dev/spotify --data '{ "songname": "test.txt","playlist": "test" }'