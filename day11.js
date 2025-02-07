var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936"
});
con.connect(function (err) {
    try {
        if (err) throw err;
        console.log("Connected!");  
    } catch (error) {
        console.log("error the table : "+error);
    }
});

con.query("USE studentdetails", function (err, result) {
    try {
     if (err) throw err;
    } catch (error) {
       console.log("check use statement : "+error);
     }
});

  var stname = 'srivarshana';
  var gen = 'female';
  var add = 'namakkal';
  var pn = '9043913090';
  var maxcb = 'matrix';
  var mar12 = '499';
  var mar11 = '390';
  var mar10 = '360';
  var fee = 'paid';
  var notfes = 'unpaid';
  var hosday = 'hostel';
  var stcod = 's133';

 
  var sql ="select * from details where studentcode = '"+stcod+"';";

  con.query(sql,function(err,result){
   try {
      if (err) {
        console.log("check the code :"+err);
      } else if (result.length>0){
        console.log("already '"+stcod+"' exists");
      }else{
        var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values('"+stname+"','"+gen+"','"+add+"','"+pn+"','"+maxcb+"','"+mar12+"','"+mar11+"','"+mar10+"','"+fee+"','"+notfes+"','"+hosday+"','"+stcod+"');";
         
        con.query(sql,function(err,result){
            if(err){
                console.log("error : "+err);
            }else{
                console.log("sucessfully insert record : ",JSON.stringify(result));
            }
        })

      }
    
   } catch (error) {
    console.log(error);
   }
  });
