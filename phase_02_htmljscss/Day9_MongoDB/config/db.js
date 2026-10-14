const mongoose = require("mongoose")

// mongoose help us to connect with mongodb atlas and it also provides properties
// and validation which reduce manual code to check

require("dotenv").config();

let url = process.env.MONGO_URL;

const connection = mongoose.connect(url);

module.exports = {connection};