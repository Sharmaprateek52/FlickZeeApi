const MovieModel = require('../../models/movieModel')

const getMovies = async(searchText) => {
    let query = {};
    if(searchText!=='undefined'){
        query = {
            'Movie Name':{ $regex: '.*' + searchText + '.*', $options: 'i'}
        }
    }
    console.log(query);
    return MovieModel.find(query).limit(10)
}
module.exports = {
    getMovies
}