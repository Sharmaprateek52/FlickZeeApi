const express = require('express'),
router = express.Router();



const users = require("./users"),
movies = require("./movies");

/*
* routes
*/
router.use('/users', users);
router.use('/movies', movies);

module.exports = router;
