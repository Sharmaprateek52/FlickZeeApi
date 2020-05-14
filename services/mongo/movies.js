const MovieModel = require('../../models/movieModel')

const getMovies = async (searchText, soundCode) => {
    let query = {};
    if (searchText !== 'undefined') {
        if (soundCode === '0000') {
            query = {
                'Movie Name': { $regex: '.*' + searchText + '.*', $options: 'i' }
            }
        } else {
            query = {
                $or: [{ 'Movie Name': { $regex: '.*' + searchText + '.*', $options: 'i' } }, { 'soundCode': { $regex: '.*' + soundCode + '.*', $options: 'i' } }]
            }
        }
    }
    console.log(query);
    return MovieModel.find(query).limit(20)
}
module.exports = {
    getMovies
}