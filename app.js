const express    = require('express');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');
const app  = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);
app.use(express.static('doc'));

module.exports = app;
