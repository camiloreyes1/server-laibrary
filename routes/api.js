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
        content: `My job is ${job}. ${question}?`,
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
        content: `My job is ${job}. Send me everything regarding this topic:${question}? 
        If I ask you for video or link for video type me back:"To get this information go to video tutorial section."
        If I ask you about github links type me back:"To get this information go to github links section."`,
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

router.post('/video', (req, res, next) => {

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
        content: `My job is ${job}. Send me only link for video,${question}? 
        If your answer cannot provide video link type me back:"We are sorry, but there 
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

module.exports = router;
