const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

//render the index.html page for anyother routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//listening to a port
app.listen(port, function(){
    console.log("Server online on localhost: " + port);
})