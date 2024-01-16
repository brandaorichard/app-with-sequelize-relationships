const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();
app.use(express.json());

app.get('/health/live', (req, res) => res.sendStatus(200));

app.get('/employees', employee.getAll);

module.exports = app;