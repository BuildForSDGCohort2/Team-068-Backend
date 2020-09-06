const express = require('express');
require('./src/config/mongoose')
const bodyParser = require('body-parser');
var cors = require('cors');
const env = require('./src/config/env');
const usersRouter = require('./src/routes/users')
const helpers = require('./src/helpers/helpers')
const Users = require('./src/models/user.model')
var app = express()
 
app.use(cors())

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('helllo')
})

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    let exists = await helpers.userExists(email, password);
    console.log(exists)
    if( exists ) {
        const user = await Users.findOne({email: email});
        return res.json(user);
    }
    res.json({message: 'invalid credentials'});
});

app.use('/users', usersRouter);


app.listen(env.port, function () {
    console.log('app listening at port %s', env.port);
});