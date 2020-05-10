const mongoose = require("mongoose"),
  db = require("../dbConnect/connection");

var MovieSchema = new mongoose.Schema({
    "Movie Name": { type: String },
    "Year": { type: Number },
    "IMDb Rating": { type: Number },
    "Number of IMDb Votes": { type: Number },
    "Awards": { type: String },
    "Language": { type: String },
    "Alt Text":{ type: String }
});


MovieSchema.index({ "Movie Name": "text" }, { background: 1 });

// Export the Mongoose model
module.exports = db.model("MovieModel", MovieSchema);
