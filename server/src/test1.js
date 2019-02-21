var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
 user: 'sa',
 password: 'villa1999',
 server: 'vl9004', 
 database: 'similanwms_villa' 
 };
 
app.get('/sp', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.execute('dbo.sp_web_check_194_new', function (err, recordset) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(recordset);
 
 });
 });
});
 
var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
});