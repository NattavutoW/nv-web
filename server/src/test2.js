var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
 user: 'sa',
 password: 'villa1999',
 server: 'dwhserver3', 
 database: 'villadw' 
 };

sql.connect(config, function (err) {
 
    if (err) console.log(err);
    
    // create Request object
    var request = new sql.Request();
    
    // query to the database and get the data
    request.query("select pr_code,pr_name from product where pr_sucode1 ='293' and pr_suref3='A' and pr_cgcode='01' ", function (err, recordset) {
    
    if (err) console.log(err)
    
    // send data as a response
    console.log(recordset);
    
    
    });
    });
     
app.get('/', function (req, res,request) { 
 
    // connect to your database
    res.send(recordset);
   
   });

var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
});