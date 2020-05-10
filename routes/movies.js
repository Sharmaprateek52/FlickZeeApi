const express = require("express"),
  router = express.Router();
const MoviesController = require("../controllers/movies");
/* GET users listing. */
router.get("/", MoviesController.getMovies);

module.exports = router;
