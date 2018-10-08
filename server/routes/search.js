var Flickr = require('flickr-sdk');
const express = require('express');
const router = express.Router();
const config = require('../config.js')

router.post('/', (req,res) => {
    console.log(req.body.Search)
    var feeds = new Flickr.Feeds();
    feeds.publicPhotos({
      tags: req.body.Search
    }).then(function (response) {
        const data = JSON.parse(response.text)
      return res.json(data);
    }).catch(function (err) {
      return res.json(err)
    });
      
  });


module.exports = router;
  