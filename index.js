const express = require('express');
const bodyParser = require('body-parser');
const env = require('./src/config/env');
const usersRouter = require('./src/routes/register')

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log('i dey here')
    res.send('holllaa')
});
app.use('/users', usersRouter)
app.listen(env.port, function () {
    console.log('app listening at port %s', env.port);
});