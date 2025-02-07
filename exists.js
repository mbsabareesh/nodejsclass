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

//   var stname = 'poojasri';
//   var gen = 'female';
//   var add = 'coimbatore';
//   var pn = '9743923000';
//   var maxcb = 'matrix';
//   var mar12 = '489';
//   var mar11 = '390';
//   var mar10 = '360';
//   var fee = 'paid';
//   var notfes = 'unpaid';
//   var hosday = 'hostel';
//   var stcod = 's136';

 

//   var sql_1 = "select * from  details where studentcode = '"+stcod+"';";
//     con.query(sql_1,function(err,result){
//           try {
//               if (err) {
//                   console.log("error record   :  "+err);
//               }else if(result.length>0){

//                   console.log(" student code '"+stcod+"' is already exists ")
//               }
              
//               else {
//                   var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values('"+stname+"','"+gen+"','"+add+"','"+pn+"','"+maxcb+"','"+mar12+"','"+mar11+"','"+mar10+"','"+fee+"','"+notfes+"','"+hosday+"','"+stcod+"');";
                  
//                   con.query(sql,function(err,result){
//                       try {
//                           if (err) {
//                               console.log("error record   :  "+err);
//                           } else {
//                               console.log("inserted sucessfully ");
//                               console.log("insert record  :  "+JSON.stringify(result));
//                           }
//                       } catch (error) {
//                           console.log("error   :"+error);
//                       }
//                   });
                  
//               }
//             } catch (error) {
//               console.log("error   :"+error);
//             }
// });



  var stname = 'boomika';
  var gen = 'female';
  var add = 'coimbatore';
  var pn = '9743923001';
  var maxcb = 'matrix';
  var mar12 = '489';
  var mar11 = '390';
  var mar10 = '360';
  var fee = 'paid';
  var notfes = 'unpaid';
  var hosday = 'hostel';
  var stcod = 's129';



  var sql = "select * from details where studentcode = '"+stcod+"';";
        con.query(sql,function(err,result){
            try {
                if (err) {
                    console.log("check your code  : "+err);
                } else if (result.length>0) {
                    console.log("student code '"+stcod+"' already exists");
                }else{
                    var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values('"+stname+"','"+gen+"','"+add+"','"+pn+"','"+maxcb+"','"+mar12+"','"+mar11+"','"+mar10+"','"+fee+"','"+notfes+"','"+hosday+"','"+stcod+"');";

                    con.query(sql,function(err,result){
                           try {
                            if (err) {
                                console.log("error record "+err)
                            } else {
                                console.log("inserted sucessfully "+JSON.stringify(result)); 
                            }
                           } catch (error) {
                            console.log(error);
                           }
                    });
                 
                }
                
            } catch (error) {
                
            }
       });
            