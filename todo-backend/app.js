const express = require('express');
const todo = require('./routes/todoRoutes');

const app = express();
app.use(require('cors')())
app.use(express.json())


app.use('/api/v1', todo)

module.exports =app;