const mongoose = require('mongoose')
mongoose.Promise = global.Promise
connectData = process.env.db || 'mongodb://localhost:todo'
console.log(connectData)
module.exports = mongoose.connect(connectData)