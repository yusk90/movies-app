const express = require('express');

const serverRenderer = require('../dist/server-renderer.min').default;

const app = express();

app.use(express.static('dist'));
app.use(serverRenderer());

module.exports = app;
