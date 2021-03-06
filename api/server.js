const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const kidsRouter = require('../kids/kids-router.js');
const activitiesRouter = require('../activities/activities-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/kids', kidsRouter);
server.use('/api/activities', activitiesRouter);

server.get('/', (req, res) => {
  res.send("the API is up!");
});

module.exports = server;
