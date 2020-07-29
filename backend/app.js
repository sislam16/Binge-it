const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const genresRouter = require('./routes/genres')
const showsRouter = require('./routes/shows')
const commentsRouter = require('./routes/comments')

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter)
app.use('/api/shows', showsRouter)
app.use('/api/comments', commentsRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });

module.exports = app;
