var express = require('express');
var mongoose = require('mongoose');
var Products = require('../models/products');
var csrf =  require('csurf');
var fs = require('fs');
var csrfProtection = csrf();

var router = express.Router();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
   Products.find(function (err, docs) {
          var productChunk = [];
          var chunksize = 3;
          for(var i =0; i < docs.length; i += chunksize){
            productChunk.push(docs.slice(i, i+chunksize));
          }
          res.render('shop/index', { title: 'Nico\'s SuperMarche' , products: productChunk});


       })
  });



router.get('/user/sign-up', function (req, res, next) {
    res.render('user/sign-up',{csrfToken: req.csrfToken})

});
router.post('/user/sign-up', function (req, res,next) {
    res.redirect('/');
})




module.exports = router;
