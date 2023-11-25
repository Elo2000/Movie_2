const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    routers = require('./routes/routes.js'),
    database = require('./database');


const app = express();

app.use('/list', express.static(path.join(__dirname, 'page/listDisplays.html')));
app.use('/add_movie', express.static(path.join(__dirname, 'page/add_movie.html')));
app.use('/add_actor', express.static(path.join(__dirname, 'page/add_actor.html')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

database.connect(mongoose);


const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});