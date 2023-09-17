const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/search', (req, res, next) => {

  console.log("REQ.BODY ===>", req.body)
  const { job, question } = req.body;
  console.log("Req.body ===>", req.body)

  const options = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c653db3d66msh51a730c880982cfp1b9ff5jsn7f8a1b1556f8',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    data: [
      {
        content: `My job is ${job}. ${question}? Avoid mentioning words:" AI, OpenAI". Instead of "I" use "Our Library". 
        If information is not related to my job don't meantion my job title`,
        role: 'user'
      }
    ]
  };

  axios.request(options)
    .then((response) => {
      console.log('Answer ===>', response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

router.post('/github', (req, res, next) => {

  console.log("REQ.BODY ===>", req.body)
  const { job, question } = req.body;
  console.log("Req.body ===>", req.body)

  const options = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c653db3d66msh51a730c880982cfp1b9ff5jsn7f8a1b1556f8',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    data: [
      {
        content: `My job is ${job}. Send me github link,${question}? 
        If your answer cannot provide github link type me back:"We are sorry, but there 
        can't be any link provided for your request."`,
        role: 'user'
      }
    ]
  };

  axios.request(options)
    .then((response) => {
      console.log('Answer ===>', response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

router.post('/topic', (req, res, next) => {

  console.log("REQ.BODY ===>", req.body)
  const { job, question } = req.body;
  console.log("Req.body ===>", req.body)

  const options = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c653db3d66msh51a730c880982cfp1b9ff5jsn7f8a1b1556f8',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    data: [
      {
        content: `My job is ${job}. Send me everything related tomy job regarding this topic:${question}?. If there is nothing related
        to my job just send me general information regarding this topic. Avoid mentioning words:" AI, OpenAI". 
        Instead of "I" use "Our Library". If information is not related to my job don't meantion my job title`,
        role: 'user'
      }
    ]
  };

  axios.request(options)
    .then((response) => {
      console.log('Answer ===>', response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

router.post('/video', async (req, res, next) => {

  console.log("REQ.BODY ===>", req.body)
  const { job, question } = req.body;
  console.log("Req.body ===>", req.body)

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: `${question}`,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c653db3d66msh51a730c880982cfp1b9ff5jsn7f8a1b1556f8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log("Response ===>", response.data.items)
    res.json(response.data.items);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
