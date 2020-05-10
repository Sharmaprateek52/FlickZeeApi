const MovieService = require("../services/mongo/movies");

exports.getMovies = async (req, res, next) => {
  console.log(req.query.searchText);
  const result = await MovieService.getMovies(req.query.searchText);
  return res.status(200).send(result);
};