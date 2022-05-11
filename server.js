const  express = require('express')
const app = express()
const port = 7777
app.use(express.static(__dirname + '/public'));
app.use("/", require("./j"));
app.use("/about", require("./abouts"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://1Harm:EsOd9029@cluster0.7hrdf.mongodb.net/Signin');
let db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/sign_up', function(req,res){
    var email =req.body.email;
    var password = req.body.password;
    var data = {
        "email":email,
        "password":password
    }
    db.collection('Harm').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('./j.html');
})
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('./j.html');
}).listen(3000)

console.log("server listening at port 7777");