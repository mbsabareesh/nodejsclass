var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936"
});

con.connect(function (err) {
    if (err) {
        console.error("Connection Error: " + err.message);
        return;
    }
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS empdetails", function (err, result) {
        if (err) {
            console.error("Query Error: " + err.message);
        } else {
            console.log("Database created!");
        }        
    });
});
                            con.query("USE empdetails", function (err, result) {
                                if (err) throw err;

                                var sql = `CREATE TABLE IF NOT EXISTS mbsempdetails (
                                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    empname VARCHAR(100),
                                    gender VARCHAR(10),
                                    address VARCHAR(100),
                                    phonenumber BIGINT,
                                    experience VARCHAR(100),
                                    Asalary VARCHAR(100) 
                                )`;

                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("Table created!");
                                });
                            });

                        //     var alterSql = "ALTER TABLE mbsempdetails add column empcode VARCHAR(10)";
                        //     con.query(alterSql, function (err, result) {
                        //         if (err) throw err;
                        //     console.log("Column 'empcode'  successfully!");
                        //  });
   

// var emna = "sabareesh";
// var ged = "male";
// var ads = "3/95b,molasi,tiruchengode,namakkal-637210";
// var pn = "9988776655";
// var exp = "fresher";
// var asal = "100000";
// var emco = "mbs-01";

//             var sql = "select * from mbsempdetails where empcode = '"+emco+"';";

//             con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error check the code : "+ err);
//                     } else if (result.length>0) {
//                         console.log("already '"+emco+"' exists");
//                     }else{
//                         var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"');";
//                         con.query(sql,function(err,result){
//                             if(err)throw(err);
//                             console.log(result);
//                         })
//                     }
                    
//                 } catch (error) {
//                     console.log(error.message)
//                 }
//             })



// var emna = "raja";
// var ged = "male";
// var ads = "8/90b,serumolasi,tiruchengode,namakkal-637210";
// var pn = "9988776650";
// var exp = "fresher";
// var asal = "230000";
// var emco = "mbs-02";

//             var sql = "select * from mbsempdetails where empcode = '"+emco+"';";

//             con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error check the code : "+ err);
//                     } else if (result.length>0) {
//                         console.log("already '"+emco+"' exists");
//                     }else{
//                         var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"');";
//                         con.query(sql,function(err,result){
//                             if(err)throw(err);
//                             console.log(result);
//                         })
//                     }
                    
//                 } catch (error) {
//                     console.log(error.message)
//                 }
//             })

// var emna = "kumar";
// var ged = "male";
// var ads = "karumandapalayam,erode-637220";
// var pn = "8908718100";
// var exp = "3 year";
// var asal = "300000";
// var emco = "mbs-15";

//             var sql = "select * from mbsempdetails where empcode = '"+emco+"';";
//             con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error check the code : "+ err);
//                     } else if (result.length>0) {
//                         console.log(" error    :   already '"+emco+"' exists");
//                     }else{
//                         var sql = "insert into mbsempdetails (empname,gender,address,phonenumber,experience,Asalary,empcode)values('"+emna+"','"+ged+"','"+ads+"','"+pn+"','"+exp+"','"+asal+"','"+emco+"');";
//                         con.query(sql,function(err,result){
//                             if(err)throw(err);
//                             console.log(result);
//                         })
//                     }
                    
//                 } catch (error) {
//                     console.log(error.message)
//                 }
//             })


                  /* empwork */

                            con.query("USE empdetails", function (err, result) {
                                if (err) throw err;

                                var sql = `CREATE TABLE IF NOT EXISTS empwork (
                                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    role varchar(100),
                                    empcode varchar(10) 
                                )`;

                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("Table created!");
                                });
                            });

// var rol = "frontend developer";
// var emc = "mbs-01";


//      var sql = "select * from empwork where empcode = '"+emc+"';";
//      con.query(sql,function(err,result){
//         try {
//             if (err) {
//                 console.log("check the code"+ err );
//             } else if (result.length>0){
//                 console.log("already '"+emc+"' exists ")
//             } else {
//                 var sql = "insert into empwork (role,empcode) values ('"+rol+"','"+emc+"');";
//                 con.query(sql,function(err,result){
//                     if (err) throw(err);
//                     console.log(result);
//                 })
//             }
//         } catch (error) {
            
//         }
//      })

// var rol = "full stack developer";
// var emc = "mbs-15";


//      var sql = "select * from empwork where empcode = '"+emc+"';";
//      con.query(sql,function(err,result){
//         try {
//             if (err) {
//                 console.log("check the code"+ err );
//             } else if (result.length>0){
//                 console.log("already '"+emc+"' exists ")
//             } else {
//                 var sql = "insert into empwork (role,empcode) values ('"+rol+"','"+emc+"');";
//                 con.query(sql,function(err,result){
//                     if (err) throw(err);
//                     console.log(result);
//                 })
//             }
//         } catch (error) {
            
//         }
//      })
   


              /* date of joining */

              con.query("USE empdetails", function (err, result) {
                if (err) throw err;

                var sql = `CREATE TABLE IF NOT EXISTS empjoin (
                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    dateofjoin date,
                    shift varchar(100),
                    empcode varchar(10) 
                )`;

                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Table created!");
                });
            });

// var dj = "2025-01-04";
// var sh = "morning";
// var emc = "mbs-15";

//          var sql = "select * from empjoin where empcode = '"+emc+"';";
//          con.query(sql,function(err,result){
//             try {
//                 if (err) {
//                     console.log("error check the code "+ err);
//                 } else if (result.length>0) {
//                     console.log("already '"+emc+"' exists");
//                 }else{
//                     var sql = "insert into empjoin (dateofjoin,shift,empcode)values('"+dj+"','"+sh+"','"+emc+"');";
//                     con.query(sql,function(err,result){
//                         if(err)throw err;
//                         console.log(result);
//                     })
//                 }
                
//             } catch (error) {
//                 console.log(error.message);
//             }
//          })



                    var sal = "select *from mbsempdetails";
                    con.query(sal,function(err,result){
                        try {
                            if (err) {
                                console.log("error :"+err.message);
                            } else {
                                console.log(result);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });
                  
                   
                    var sal = "select *from empjoin";
                    con.query(sal,function(err,result){
                        try {
                            if (err) {
                                console.log("error :"+err.message);
                            } else {
                                console.log(result);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });


                    var sal = "select *from empwork";
                    con.query(sal,function(err,result){
                        try {
                            if (err) {
                                console.log("error :"+err.message);
                            } else {
                                console.log(result);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    });




var sub = "select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode";


con.query(sub,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode) as tab2 join empjoin on tab2.empcode = empjoin.empcode";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});


var sob = "select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode) as tab2 join empjoin on tab2.empcode = empjoin.empcode WHERE empjoin.shift = 'morning'";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode where empwork.role = 'frontend developer') as tab2 join empjoin on tab2.empcode = empjoin.empcode WHERE empjoin.shift = 'morning'";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode where empwork.role = 'frontend developer') as tab2 join empjoin on tab2.empcode = empjoin.empcode WHERE empjoin.shift = 'morning' and empjoin.dateofjoin > 2024-10-20";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});



/* bond details */


                        con.query("USE empdetails", function (err, result) {
                            if (err) throw err;

                            var sql = `CREATE TABLE IF NOT EXISTS bond (
                                empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                bond varchar(100),
                                startofbond date,
                                endofbond date,
                                empcode varchar(10) 
                            )`;

                            con.query(sql, function (err, result) {
                                if (err) throw err;
                                console.log("Table created!");
                            });
                        });
//    var bo = "2yaer";
//    var sb = "2024-01-04";
//    var eb = "2026-01-04";
//    var em = "mbs-01";

//      var sql = "select * from bond where empcode = '"+em+"';";
//      con.query(sql,function(err,result){
//         try {
//             if (err) {
//                 console.log("error : "+err);
//             } else if  (result.length>0){
//                 console.log("already '"+em+"' exsits")
//             }else{
//                 var sql = "insert into bond(bond,startofbond,endofbond,empcode) values ('"+bo+"','"+sb+"','"+eb+"','"+em+"');";
//                 con.query(sql,function(err,result){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log(result);
//                     }
//                 });
//             }
            
//         } catch (error) {
//             console.log(error.message);
//         }
//      })

// var bo = "3year";
// var sb = "2025-01-04";
// var eb = "2028-01-04";
// var em = "mbs-15";

//   var sql = "select * from bond where empcode = '"+em+"';";
//   con.query(sql,function(err,result){
//      try {
//          if (err) {
//              console.log("error : "+err);
//          } else if  (result.length>0){
//              console.log("already '"+em+"' exsits")
//          }else{
//              var sql = "insert into bond(bond,startofbond,endofbond,empcode) values ('"+bo+"','"+sb+"','"+eb+"','"+em+"');";
//              con.query(sql,function(err,result){
//                  if(err){
//                      console.log(err);
//                  }else{
//                      console.log(result);
//                  }
//              });
//          }
         
//      } catch (error) {
//          console.log(error.message);
//      }
//   })


var sob = "select tab3.* , bond.bond,bond.startofbond,bond.endofbond from(select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode) as tab2 join empjoin on tab2.empcode = empjoin.empcode)as tab3 join bond on tab3.empcode = bond.empcode ";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab3.* , bond.bond,bond.startofbond,bond.endofbond from(select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails)as tab1 join empwork on tab1.empcode = empwork.empcode where role = 'data analysis') as tab2 join empjoin on tab2.empcode = empjoin.empcode)as tab3 join bond on tab3.empcode = bond.empcode ";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab3.* , bond.bond,bond.startofbond,bond.endofbond from(select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails where gender = 'male')as tab1 join empwork on tab1.empcode = empwork.empcode where role = 'data analysis') as tab2 join empjoin on tab2.empcode = empjoin.empcode)as tab3 join bond on tab3.empcode = bond.empcode ";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
});

var sob = "select tab3.* , bond.bond,bond.startofbond,bond.endofbond from(select tab2.*,empjoin.dateofjoin,empjoin.shift from (select tab1.*,empwork.role from (select * from mbsempdetails where gender = 'male')as tab1 join empwork on tab1.empcode = empwork.empcode) as tab2 join empjoin on tab2.empcode = empjoin.empcode)as tab3 join bond on tab3.empcode = bond.empcode ";


con.query(sob,function(err,result){
try {
    if (err) {
        console.log("error in your code  :"+err);
    } else {
        console.log(result);
    }
    
} catch (error) {
 console.log(error);   
}
})