var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Sabareesh_3936",
    database: "ordertable" 
});

con.connect(function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("Connected successfully!");
    }
});