const MovieService = require("../services/mongo/movies");
const getSoundex = require("../util/CreateSounds")

exports.getMovies = async (req, res, next) => {
  console.log(req.query.searchText);
  const soundCode = getSoundex(req.query.searchText);
  const result = await MovieService.getMovies(req.query.searchText,soundCode);
  return res.status(200).send(result);
};