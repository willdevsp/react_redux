const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://will:will2285@ds215563.mlab.com:15563/todosappwill')