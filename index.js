const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


app.listen(process.env.PORT || 4000, function () {
    console.log('app listening at port %s', 4000);
});