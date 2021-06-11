const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 2000;

app.use(bodyParser.json({ limit:'100mb' }));
app.use(cors());

//Endpoints
app.get('/', function(req, res){
    res.send('test');
});

app.get('/answer', (req, res) =>{
    res.send({"greetings":"Greetings"});
});

app.listen(port, function(){
    console.log(`Working at ${port}`);
});