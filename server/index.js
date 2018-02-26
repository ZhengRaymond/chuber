const express = require('express');
const winston = require('winston');

const app = express();
const HOSTNAME = "http://localhost"
const PORT = 3030;

const router = require('./router');

app.use('/', router);

app.get('/health', function (req, res) {
  res.send('Server is running.')
})

app.listen(PORT, HOSTNAME, () => winston.log('info', `Server is running on ${HOSTNAME}:${PORT}`));
