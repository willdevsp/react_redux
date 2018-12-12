const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const path = require('path');

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

const localPublic = 'frontend/public/';

server.use(express.static(localPublic))

server.get("*", (req, res)=> {
    res.sendFile(path.resolve(localPublic))
})

server.listen(process.env.PORT || port, function(){
    console.log(`Backend is running in port ${port}.`);
})

module.exports = server