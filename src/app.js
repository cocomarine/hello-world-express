const express = require('express');

const app = express();

app.get('/hello', (_, res) => {
    res.status(200).send("Hello World!");
});

module.exports = app;