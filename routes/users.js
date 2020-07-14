const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/users', { title: 'Users' });
});

router.get('/id', function (req, res, next) {
  res.send('user id');
});

module.exports = router;
