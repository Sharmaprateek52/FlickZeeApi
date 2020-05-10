const fs = require('fs')
const MovieService = require('./services/mongo/movies')
let jsonData = {}
fs.readFile('convertcsv.json', 'utf-8', async (err, data) => {
  if (err) throw err
  jsonData = JSON.parse(data)
  for(let i=0;i<jsonData.length;i++){
    const r = await MovieService.addMovies(jsonData[i]);
    console.log(r);
  }
})