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

    con.query("CREATE DATABASE IF NOT EXISTS withrecursiveexample", function (err, result) {
        if (err) {
            console.error("Query Error: " + err.message);
        } else {
            console.log("Database created!");
        }        
    });
});


                            con.query("USE withrecursiveexample ", function (err, result) {
                                if (err) throw err;

                                var sql = `CREATE TABLE IF NOT EXISTS mbsempdetails (
                                    empid int,
                                    empname varchar(100),
                                    managerid int
                                )`;

                                con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    console.log("Table created!");
                                });
                            });


// var emp = "1";
// var ena = "sabareesh";
// var mi = "3";

//                var sql = "select * from mbsempdetails where managerid = '"+mi+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "2";
// var ena = "raja";
// var mi = "3";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });


// var emp = "3";
// var ena = "ooviya";
// var mi = "1";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "4";
// var ena = "stalini";
// var mi = "1";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "5";
// var ena = "banu";
// var mi = "2";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "6";
// var ena = "rajabagadesh";
// var mi = "3";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "7";
// var ena = "kumar";
// var mi = "5";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "8";
// var ena = "sanjay";
// var mi = "4";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });

// var emp = "9";
// var ena = "madhu";
// var mi = "8";

//                var sql = "select * from mbsempdetails where empid = '"+emp+"'";
//                con.query(sql,function(err,result){
//                 try {
//                     if (err) {
//                         console.log("error your code :"+err);
//                     } else if (result.length>0){
//                         console.log("alreadr  '"+mi+"' existx");
//                     }else {
//                         var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
//                         con.query(sql,function(err,result){
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(result);
//                             }
//                         });
//                     }
                    
//                 } catch (error) {
//                   console.log(error.message);  
//                 }
//                });





//with in common table execution.


                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '1') select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });

                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '8') select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });

                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '9') select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });

                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '5') select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });



// with recursive in common table execution 

                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '5' union all select e.empid,e.empname,e.managerid from mbsempdetails as e join mbsempdetails as em on em.managerid = em.empid) select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });


                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '7' union all select e.empid,e.empname,e.managerid from mbsempdetails as e join mbsempdetails as em on em.managerid = em.empid) select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });


                            var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid = '4' union all select e.empid,e.empname,e.managerid from mbsempdetails as e join mbsempdetails as em on em.managerid = em.empid) select *from empde";
                            con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log("error  :"+err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });


var emp = "16";
var ena = "bothi";
var mi = "10";

               var sql = "select * from mbsempdetails where empid = '"+emp+"'";
               con.query(sql,function(err,result){
                try {
                    if (err) {
                        console.log("error your code :"+err);
                    } else if (result.length>0){
                        console.log("alreadr  '"+mi+"' existx");
                    }else {
                        var sql = "insert into mbsempdetails (empid,empname,managerid)values ('"+emp+"','"+ena+"','"+mi+"');";
                        con.query(sql,function(err,result){
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(result);
                            }
                        });
                    }
                    
                } catch (error) {
                  console.log(error.message);  
                }
               });

         
               
               var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid union all select e.empid,e.empname,e.managerid from mbsempdetails as e join mbsempdetails as em on em.managerid = em.empid) select *from empde";
               con.query(sql,function(err,result){
                   try {
                       if (err) {
                           console.log("error  :"+err);
                       } else {
                           console.log(result);
                       }
                       
                   } catch (error) {
                       console.log(error.message);
                   }
               });               


                
               var sql = "with empde as( select empid,empname,managerid from mbsempdetails where managerid ='9' union all select e.empid,e.empname,e.managerid from mbsempdetails as e join mbsempdetails as em on em.managerid = em.empid) select *from empde";
               con.query(sql,function(err,result){
                   try {
                       if (err) {
                           console.log("error  :"+err);
                       } else {
                           console.log(result);
                       }
                       
                   } catch (error) {
                       console.log(error.message);
                   }
               });               