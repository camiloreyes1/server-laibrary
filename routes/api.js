const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/search', (req, res, next) => {

  console.log("REQ.BODY ===>", req.body)
  const { job, question } = req.body;

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
        content: `I am ${job}. ${question}?`,
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
