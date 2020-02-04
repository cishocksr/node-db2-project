const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const carsRouter = require('../cars/cars-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan());

server.use('/api/cars', carsRouter);

module.exports = server;
