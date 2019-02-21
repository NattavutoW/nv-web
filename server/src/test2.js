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

app.post('/prcode',function(req,res,){
    sql.connect(config,function (err){
        if (err) console.log(err);
        var request =new sql.Request();



        request.query("select * from product where pr_code ="+[req.body.name],function(err,recordset){
            if (err) console.log(err);
            res.json(recordset)
            console.log(recordset)
        });
    });
});
     
app.get('/:prcode', function (req, res,) { 
    sql.connect(config, function (err) {
 
        if (err) console.log(err);
        
        // create Request object
        var request = new sql.Request();
        
        // query to the database and get the data
        
        request.query("select pr_code,pr_name from product where pr_code="+req.params.prcode , function (err, recordset) {
        
        if (err){
            console.log(err)
        }
      
        
        // send data as a response
        res.send("รหัสสินค้า = "+req.params.prcode);
        console.log(recordset);
        
        
        });
        });
    // connect to your database
   
   
   });

var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
});