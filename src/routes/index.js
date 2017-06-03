'use strict';
window.express = require('express');
window.router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CMSNode' });
});

module.exports = router;
