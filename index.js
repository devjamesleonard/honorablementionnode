//setting up express server

const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({

user: 'u638015740_Username123',
host: '195.179.239.0',
password: 'Password123',
database: 'u638015740_mentions'

});

app.post('/create',(req,res)=>{
//we are passing variables through on our request
const title = req.body.title;
const rating = req.body.rating;
const summary = req.body.summary;
//console.log(title);
db.query('INSERT INTO mentions (title,rating,summary) VALUES (?,?,?)',[title,rating,summary],
(err,result)=>{
if(err){
    console.log(err);
}else{
    res.send("Values Inserted");
 console.log("successx2")
    
}

});


});


app.get('/mentions',(req,res)=>{
    db.query("SELECT * FROM mentions",(err,result)=>{
    
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
    });
    
const port = process.env.PORT || 3001;
app.listen(port,()=>{
console.log(`Yey your server is running on port ${port})`);


});