var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Sabareesh_3936"
});

con.connect(function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("connected sucessfully!")
    }
});

// con.query("create database if not exists day13",function(err){
//      if (err) {
//         console.log("error check code :"+err.message);
//      } else {
//         console.log("table sucessfully created");
//      }
// });


con.query("USE empdetails", function (err, result) {
    if (err){
        console.log(err.message);
    }else{
        console.log("used empdetails");
    }
    ;
});


con.query("select * from mbsempdetails",function(err,result){
    try {
        if(err){
            console.log(err.message);
        }else{
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
});
// compony products

                        // con.query("USE empdetails", function (err, result) {
                        //      if (err) throw err;

                        //             var sql = `CREATE TABLE IF NOT EXISTS companypro (
                        //                 empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        //                 laptop varchar(100),
                        //                 laptopcompany varchar(100),
                        //                 keyboard varchar(10),
                        //                 mouse varchar(10),
                        //                 bag varchar(10),
                        //                 empcode varchar(10) 
                        //             )`;

                        //             con.query(sql,function(err,result){
                        //                 try {
                        //                     if (err) {
                        //                         console.log("error code"+err.message);
                        //                     } else {
                        //                         console.log("table created sucessfully");
                        //                     }
                        //                 } catch (error) {
                        //                     console.log(error);
                        //                 }
                        //             });

                        // });

/* sql queries */

var lap = "yes";
var lapco = "dell";
var key = "yes";
var mou = "no";
var ba = "yes";
var em = "mbs-01";
var item_array = [{"po_id":12}, {}]
             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });

var lap = "no";
var lapco = "no";
var key = "no";
var mou = "no";
var ba = "yes";
var em = "mbs-02";

             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });                   


var lap = "yes";
var lapco = "hp";
var key = "yes";
var mou = "yes";
var ba = "yes";
var em = "mbs-03";

             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });

var lap = "yes";
var lapco = "asus";
var key = "yes";
var mou = "yes";
var ba = "yes";
var em = "mbs-04";

             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });

var lap = "yes";
var lapco = "dell";
var key = "no";
var mou = "no";
var ba = "yes";
var em = "mbs-05";

             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });

var lap = "no";
var lapco = "no";
var key = "no";
var mou = "no";
var ba = "no";
var em = "mbs-15";

             var sql=("select * from companypro where empcode = '"+em+"'");
                   con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error the code : "+err.message);
                        } else if (result.length>0){
                            console.log("already '"+em+"' exists");
                        } else{
                            var sql = ("insert into companypro (laptop,laptopcompany,keyboard,mouse,bag,empcode)values('"+lap+"','"+lapco+"','"+key+"','"+mou+"','"+ba+"','"+em+"');");
                                con.query(sql,function(err,result){
                                       if(err){
                                        console.log(err.message);
                                       }else {
                                        console.log(result);
                                       }
                                });
                        }   
                    } catch (error) {
                        console.log(error);
                    }
                   });


/* queries */

 var sql = ("select tab1.*, laptopcompany from (select * from mbsempdetails) as tab1 join companypro on tab1.empcode = companypro.empcode;");

                                    con.query(sql,function(err,result){
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


var sql = ("select tab2.*,role from(select tab1.*, laptopcompany from (select * from mbsempdetails) as tab1 join companypro on tab1.empcode = companypro.empcode)as tab2 join empwork on tab2.empcode = empwork.empcode;");

                                    con.query(sql,function(err,result){
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
                                    
                                    
var sql = ("select tab3.*,shift,dateofjoin from (select tab2.*,role from(select tab1.*, laptopcompany from (select * from mbsempdetails) as tab1 join companypro on tab1.empcode = companypro.empcode)as tab2 join empwork on tab2.empcode = empwork.empcode)as tab3 join empjoin on tab3.empcode = empjoin.empcode;");

                                    con.query(sql,function(err,result){
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
                                    

var sql = ("select tab4.*,bond from(select tab3.*,shift,dateofjoin from (select tab2.*,role from(select tab1.*, laptopcompany from (select * from mbsempdetails) as tab1 join companypro on tab1.empcode = companypro.empcode)as tab2 join empwork on tab2.empcode = empwork.empcode)as tab3 join empjoin on tab3.empcode = empjoin.empcode)as tab4 join bond on tab4.empcode = bond.empcode;");

                                    con.query(sql,function(err,result){
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





var sql = ("select tab4.*,bond from(select tab3.*,shift,dateofjoin from (select tab2.*,role from(select tab1.*, laptopcompany from (select * from mbsempdetails where Asalary < '200000') as tab1 join companypro on tab1.empcode = companypro.empcode)as tab2 join empwork on tab2.empcode = empwork.empcode)as tab3 join empjoin on tab3.empcode = empjoin.empcode)as tab4 join bond on tab4.empcode = bond.empcode;");

                                    con.query(sql,function(err,result){
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



 var sql = ("select tab4.*,bond from(select tab3.*,shift,dateofjoin from (select tab2.*,role from(select tab1.*, laptopcompany from (select * from mbsempdetails where Asalary > '200000') as tab1 join companypro on tab1.empcode = companypro.empcode)as tab2 join empwork on tab2.empcode = empwork.empcode)as tab3 join empjoin on tab3.empcode = empjoin.empcode)as tab4 join bond on tab4.empcode = bond.empcode;");

                                    con.query(sql,function(err,result){
                                        try {
                                            if (err) {
                                                console.log("error :"+err.message);
                                            } else {
                                                console.log("output is the : "+JSON.stringify(result));
                                            }
                                            
                                        } catch (error) {
                                            console.log(error);
                                        }

                                    });  

      //common table exception 
      
      

      var sql = `
WITH 
    tab1 AS (
        SELECT * 
        FROM mbsempdetails 
        WHERE Asalary > '200000'
    ),
    tab2 AS (
        SELECT tab1.*, companypro.laptopcompany
        FROM tab1
        JOIN companypro 
        ON tab1.empcode = companypro.empcode
    ),
    tab3 AS (
        SELECT tab2.*, empwork.role
        FROM tab2
        JOIN empwork 
        ON tab2.empcode = empwork.empcode
    ),
    tab4 AS (
        SELECT tab3.*, empjoin.shift , empjoin.dateofjoin
        FROM tab3
        JOIN empjoin 
        ON tab3.empcode = empjoin.empcode
    )
SELECT tab4.*, bond.bond
FROM tab4
JOIN bond 
ON tab4.empcode = bond.empcode;
`;

con.query(sql, function(err, result) {
    try {
        if (err) {
            console.log("error: " + err.message);
        } else {
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
});



    con.query("USE empdetails", function (err, result) {
                                if (err) throw err;

                var sql = `CREATE TABLE IF NOT EXISTS experiencedetails (
                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    companyname varchar(100),
                    year varchar(100),
                    role varchar(10),
                    empcode varchar(10) 
                    )`;

                                    con.query(sql,function(err,result){
                                        try {
                                            if (err) {
                                                console.log("error code"+err.message);
                                            } else {
                                                console.log("table created sucessfully");
                                            }
                                        } catch (error) {
                                            console.log(error);
                                        }
                                    });

    });


var com = "magiva";
var year = "3year";
var rol = "fullstach";
var em = "mbs-15";

     var sql = "select * from experiencedetails where empcode = '"+em+"';";
     con.query(sql,function(err,result){
          try {
            if (err) {
                console.log("error the code :"+err);
            } else if (result.length>0) {
                console.log("already '"+em+"' exixts")
            }else {
                var sql = ("insert into experiencedetails (companyname,year,role,empcode) values ('"+com+"','"+year+"','"+rol+"','"+em+"');");
                con.query(sql,function(err,result){
                      if (err) {
                        console.log(err.message);
                      } else {
                        console.log(result);
                      }
                });
            }
          } catch (error) {
            console.log(error);
          }
     });



 // queries
 
 

    var sq = ("select tab1.*,companyname from (select * from mbsempdetails)as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode ");
               con.query(sq,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });


var sq = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails)as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode) as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode ");
               con.query(sq,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });  
               
               
    
var sq = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary < 200000)as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode) as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode ");
               con.query(sq,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });  
               
               



var sqa = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary)as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode) as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode where role = 'frontend developer'; ");
               con.query(sqa,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });  


var a = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary < 200000)as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode) as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode where role = 'frontend developer'; ");
               con.query(a,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });  

var b = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary )as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode where bond = '2year') as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode; ");
               con.query(b,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });                 


var c = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary )as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode where bond = '3year') as tab4 join empjoin on  tab4.empcode = empjoin.empcode) as tab5 join empwork on tab5.empcode = empwork.empcode; ");
               con.query(c,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });      
                          

var d = ("select tab5.*,role from(select tab4.*,dateofjoin,shift from (select tab3.* ,bond.bond from (select tab2.*,companypro.laptop from(select tab1.*,companyname from (select * from mbsempdetails where asalary )as tab1 join experiencedetails on tab1.empcode = experiencedetails.empcode) as tab2 join companypro on tab2.empcode =  companypro.empcode) as tab3 join bond on tab3.empcode = bond.empcode) as tab4 join empjoin on  tab4.empcode = empjoin.empcode where shift ='night') as tab5 join empwork on tab5.empcode = empwork.empcode; ");
               con.query(d,function(err,result){
                try {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log(result);
                    }
                } catch (error) {
                    console.log(error);
                }
               });
               

/* emp personal */


 
 
 con.query("USE empdetails", function (err, result) {
         if (err) throw err;

                var sql = `CREATE TABLE IF NOT EXISTS emppersonal (
                    empid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    fathername varchar(100),
                    mothername varchar(100),
                    marriageorunmarriage varchar(10),
                    wifename varchar(10),
                    home_number bigint,
                    empcode varchar(10) 
                )`;

                con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log("error code"+err.message);
                        } else {
                            console.log("table created sucessfully");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });

    });

    var fn = "raj";
    var mn = "aishu";
    var mum = "marriage";
    var wn ="harishini";
    var home_number ="9095098302";
    var emc = "mbs-15";
    
                var sql =("select * from emppersonal where empcode = '"+emc+"';");
                  con.query(sql,function(err,result){
                    try {
                        if (err) {
                            console.log(err.message);
                        } else if (result.length>0) {
                            console.log("already '"+emc+"' exists");
                        } else{
                            var sql=("insert into emppersonal (fathername,mothername,marriageorunmarriage,wifename,home_number,empcode) values('"+fn+"','"+mn+"','"+mum+"','"+wn+"','"+home_number+"','"+emc+"');");
                             con.query(sql,function(err,result){
                                try {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(result);
                                    }
                                    
                                } catch (error) {
                                    console.log(error);
                                }
                             })
                        }
                        
                    } catch (error) {
                        console.log(error.message);
                    }
                  });
    

/* queries */


var sql=("select tab1.*,fathername,mothername,wifename from(select * from mbsempdetails) as tab1 join emppersonal on tab1.empcode = emppersonal.empcode; ");
          con.query(sql,function(err,result){
             try {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log(result);
                }
             } catch (error) {
                console.log(error);
             }
          });




var sql=("select tab6.*, empwork.role from(select tab5.*,dateofjoin,shift from (select tab4.*,bond,bond.startofbond,bond.endofbond from(select tab3.*,laptop,laptopcompany,bag,mouse,keyboard from(select tab2.*,companyname,role,year from (select tab1.*,fathername,mothername,wifename from(select * from mbsempdetails) as tab1 join emppersonal on tab1.empcode = emppersonal.empcode) as tab2 join  experiencedetails on tab2.empcode =  experiencedetails.empcode) as tab3 join companypro on tab3.empcode= companypro.empcode)as tab4 join bond on tab4.empcode = bond.empcode)as tab5 join empjoin on tab5.empcode = empjoin.empcode)as tab6 join empwork on tab6.empcode = empwork.empcode;");
          con.query(sql,function(err,result){
             try {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log(result);
                }
             } catch (error) {
                console.log(error);
             }
          });
              
