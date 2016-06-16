var express = require('express')
    , cors = require('cors')
    , route = require('route')
    , app = express()
    , bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.get('/a', function (req, res) {

    res.sendFile(__dirname+'/client/index.html')
});
app.post('/login', function (req, res) {   
    console.log("result is ",req.body);
    res.send("ok");
}).listen(3000);







