var express = require('express')
var movies = require("../functions/movies")
var actors = require("../functions/actors")
var series = require("../functions/series")
route = express.Router()
var clientAccessToken ="e5fd4070d9e8491eb7bffe6a581e49dc"
var developerAccessToken ="ddc9be9877f84670ab4b391a71fec8de"

route.post("/", (req, res) => {
  res.setHeader("Content-Type","application/json")
  const { parameters, action } = req.body.result
  console.log("Paramteres and action", parameters, action )
  rq.get(api.searchMovie+parameters.movie_name ).then((data)=> {
      sendDataToBot(res, data)
    }).catch((err)=> {
        console.log('ERROR DEY', err.message)
        sendErrorToBot(res)
    })
})

route.post("/", (req, res) => {
  const { parameters, action } = req.body.result
  switch (action) {
    case 'movie_details': {
      return movies.search(parameters.movie_name).then(movieSearch).then(result => res.json(result))
    };
    case 'actors_details': {
      return actors.search(parameters.movie_name).then(actorSearch).then(result => res.json(result))
    };
    case 'serie_details': {
      return seies.search(parameters.movie_name).then(seieSearch).then(result => res.json(result))
    }
    default: {
      movies.search(parameters.movie_name).then(movieSearch).then(result => res.json(result))
    }
  }
})


function movieSearch(data) {
  const res = data.results[0]
  return {
    speech: `${res.title}. ${res.overview}. It was released on ${res.release_date} 😄😄`,
    displayText: `${res.title}. ${res.overview}. It was released on ${res.release_date} 😄😄`
  }
}

function actorSearch(data) {
  const res = data.results[0]
  return {
    speech: `${res.name}. ${res.biograpghy}. ${res.name} was born on ${res.birth_date}`,
    displayText: `${res.name}. ${res.biograpghy}. ${res.name} was born on ${res.birth_date}`
  }
}

function serieSearch(data) {
  const res = data.results[0]
  return {
    speech: `${res.title}. ${res.overview}. It was released on ${res.release_date} 😄😄`,
    displayText: `${res.title}. ${res.overview}. It was released on ${res.release_date} 😄😄`
  }
}





function sendDataToBot(res, data) {
  data = JSON.parse(data)
  if(data.results[0]) {
    response = {
      speech: `Title: ${data.results[0].title} \nOverview: ${data.results[0].overview} \n Release Date: ${data.results[0].release_date}.\nI have about ${data.total_reslts} movies with almost the same name 😄😄`,
      displayText: `Title: ${data.results[0].title} \nOverview: ${data.results[0].overview} \n Release Date: ${data.results[0].release_date}.\nI have about ${data.total_reslts} movies with almost the same name 😄😄`
    }
    console.log(data.results[0])
    res.json(response)
  } else {
    sendErrorToBot(res)
  }
}
function sendErrorToBot(res) {
  response = {
    speech: `What movie?`,
    displayText: `I didn't really get the movie. What movie?`
  }
  res.json(response)
}
module.exports= route


var sampleRequest = {
  "lang": "en", 
  "status": {
      "errorType": "success", 
      "code": 200
  }, 
  "timestamp": "2017-02-09T16:06:01.908Z", 
  "sessionId": "1486656220806", 
  "result": {
      "parameters": {
          "city": "Rome", 
          "name": "Ana"
      }, 
      "contexts": [], 
      "resolvedQuery": "my name is Ana and I live in Rome", 
      "source": "agent", 
      "score": 1.0, 
      "speech": "", 
      "fulfillment": {
          "messages": [
              {
                  "speech": "Hi Ana! Nice to meet you!", 
                  "type": 0
              }
          ], 
          "speech": "Hi Ana! Nice to meet you!"
      }, 
      "actionIncomplete": false, 
      "action": "greetings", 
      "metadata": {
          "intentId": "9f41ef7c-82fa-42a7-9a30-49a93e2c14d0", 
          "webhookForSlotFillingUsed": "false", 
          "intentName": "greetings", 
          "webhookUsed": "true"
      }
  }, 
  "id": "ab30d214-f4bb-4cdd-ae36-31caac7a6693", 
  "originalRequest": {
      "source": "google", 
      "data": {
          "inputs": [
              {
                  "raw_inputs": [
                      {
                          "query": "my name is Ana and I live in Rome", 
                          "input_type": 2
                      }
                  ], 
                  "intent": "assistant.intent.action.TEXT", 
                  "arguments": [
                      {
                          "text_value": "my name is Ana and I live in Rome", 
                          "raw_text": "my name is Ana and I live in Rome", 
                          "name": "text"
                      }
                  ]
              }
          ], 
          "user": {
              "user_id": "PuQndWs1OMjUYwVJMYqwJv0/KT8satJHAUQGiGPDQ7A="
          }, 
          "conversation": {
              "conversation_id": "1486656220806", 
              "type": 2, 
              "conversation_token": "[]"
          }
      }
  }
}
