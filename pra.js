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

    con.query("USE studentdetails", function (err, result) {
       try {
        if (err) throw err;
       } catch (error) {
          console.log("check use statement : "+error);
        }

//*************************************************************************//





    var ghy= "select * from details where studentid = '11'";
    con.query(ghy,function(err,result){
     try{
      console.log(JSON.stringify(result));
     }catch(error){
      console.log("error the code  : "+error);
     }
      
    });


   var abc = "select * from details where studentid between 10 and 12";
   con.query(abc,function(err,result){
    console.log(result);
   })


  var qwe = "delete from details where studentid = '25'";
  con.query(qwe,function(err,result){
    try {
        if(err) throw err
        console.log(result);  
    } catch (error) {
        console.log("chech the queries  :"+error)
    }
    
  });

  var qwes = "select * from details where studentid = '24'";
  con.query(qwes,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log("chech the queries  : "+error);
    }
  });

 




  // *********************************************************************************************//


               // studentparent details //

//   var sql = `CREATE TABLE IF NOT EXISTS parentdetails (
//          Number INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//          Fathername varchar(100),
//          Mothername varchar(100),
//          Studentid int
    
//      )`;
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created!");
//     });
    
    
    
    // var sql =  "insert into parentdetails (Fathername,Mothername,Studentid) values ?";
    
    //   var values=[
    //        ["raja","priya","1"],
    //        ["banu","stalini","2"],
    //        ["sabareesh","ooviya","3"],
    //        ["mathan","rashvathini","4"],
    //        ["hariharan","vishnupriya","5"],
    //        ["prasth","shagana","6"],
    //        ["mohan","ushapriya","7"],
    //        ["ramesh","geetha","8"],
    //        ["rahul","sheebha","9"],
    //        ["ravi","madhu","10"],
    //        ["ram","harini","11"],
    //        ["vishnu","priya","12"],
    //        ["karthirvan","rekha","13"],
    //        ["sanjay","uthra","14"],
    //        ["vimal","varshine","15"],
    //        ["gowtham","dhivya","16"],
    //        ["prakash","kavitha","17"],
    //        ["kaviyarasu","vimala","18"],
    //        ["varun","priyadharshini","19"],
    //        ["dharun","keerthana","20"],
    //        ["bothi","krithika","21"],
    //        ["gopi","krithana","22"],
    //        ["madhanraja","rani","23"],
    //        ["vishal","vishu","24"]
    //   ];
    //   con.query(sql,[values],function(err,result){
    //            try {
    //             if(err)throw err;
    //             console.log(result);
    //            } catch (error) {
    //             console.log(error);
    //            }
    //        });


  
        // queries 

        var qqq = "select * from parentdetails";
        con.query(qqq,function(err,result){
              try {
                  if(err) throw err
                  console.log(result);
              } catch (error) {
                console.log(error);
              }
        });
        
//*******************************************************************************************************************//

 //college per//



//  var sql = `CREATE TABLE IF NOT EXISTS collegepercentage (
//          Number INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//          Percentage Decimal(5,5) ,
//          Studentid int
    
//      )`;
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created!");
//     });


//     var sql = `ALTER TABLE collegepercentage
//            MODIFY COLUMN Percentage DECIMAL(5, 2);`;

// con.query(sql, function (err, result) {
//     if (err) {
//         console.log("Error modifying column: " + err);
//     } else {
//         console.log("Column modified successfully!");
//     }
// });

    // var sql =  "insert into collegepercentage (Percentage,Studentid) values ?";
    
    //  var values=[
    //     ["72","1"],
    //     ["65","2"],
    //     ["90","3"],
    //     ["45","4"],
    //     ["76","5"],
    //     ["89","6"],
    //     ["99","7"],
    //     ["61","8"],
    //     ["91","9"],
    //     ["87","10"],
    //     ["76","11"],
    //     ["93","12"],
    //     ["90","13"],
    //     ["72","14"],
    //     ["94","15"],
    //     ["74","16"],
    //     ["98","17"],
    //     ["84","18"],
    //     ["72","19"],
    //     ["97","20"],
    //     ["78","21"],
    //     ["93","22"],
    //     ["74","23"],
    //     ["56","24"]
    //  ];

    //             con.query(sql,[values],function(err,result){
    //                try {
    //                 if(err)throw err;
    //                 console.log(result);
    //                } catch (error) {
    //                 console.log(error);
    //                }
    //            });

// queries

var sa = "select * from collegepercentage where Number = '10'";
con.query(sa,function(err,result){
try {
    if(err)throw err;
    console.log(result);
} catch (error) {
    console.log(error);
}
});

var sab = "select * from collegepercentage where Number between 10 and 20";
con.query(sab,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});


var qwer = "select * from collegepercentage where Number = '2'";
con.query(qwer,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


//inner join between details and collegepercentage

var join = "select details.studentid,details.studentname,details.address from details inner join collegepercentage on details.studentid = collegepercentage.studentid";
con.query(join,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


//inner join between details and parent details

var par = "select details.studentname,details.address from details inner join parentdetails on details.studentid=parentdetails.studentid ";
con.query(par,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

// inner join between three table

var three = "select details.studentname,details.address,parentdetails.Fathername from details inner join parentdetails on details.studentid = parentdetails.studentid inner join collegepercentage on details.studentid = collegepercentage.studentid";
con.query(three,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


// left join 

var left = "select details.studentname,details.address,collegepercentage.Percentage from details left join collegepercentage ON details.studentid = collegepercentage.studentid";
con.query(left,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

//right join 

var right = "select details.studentname,details.address,parentdetails.Mothername from details right join parentdetails on details.studentid = parentdetails.studentid";
con.query(right,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


// aggregate queries 

//

var agg = "SELECT details.gender, AVG(collegepercentage.Percentage) AS avg_percentage FROM details INNER JOIN collegepercentage ON details.studentid = collegepercentage.studentid GROUP BY details.gender";
con.query(agg, function (err, result) {
    try {
        if (err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});


// join with where clauses

var where = "select details.studentname,details.gender,details.address,collegepercentage.percentage from details inner join collegepercentage on details.studentid = collegepercentage.studentid where details.gender = 'male'";
con.query(where,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


// student details sabareesh

// var sab ="select details.studentid,details.studentname,details.mark_12,details.mark_10,collegepercentage.percentage,parentdetails.Fathername,parentdetails.Mothername from details inner join parentdetails on details.studentid = parentdetails.studentid inner join collegepercentage on details.studentid = collegepercentage.studentid where details.studentname = 'sabareesh'";



// implicite join in sub queries

var sab = "select tab2.*, Parentdetails.Fathername,Parentdetails.Mothername from (select tab1.*,collegepercentage.percentage from (select details.studentid,details.studentname,details.mark_10,details.mark_12 from details where details.studentname = 'sabareesh')as tab1 , collegepercentage where tab1.studentid = collegepercentage.studentid)as tab2, parentdetails where tab2.studentid = Parentdetails.studentid" ;
con.query(sab,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})


// sub queries implicite join

var sub = "select tab.*,collegepercentage.percentage from(select details.studentid,details.studentname,details.address from details where studentid = '1') as tab,collegepercentage where tab.studentid = collegepercentage.studentid";
con.query(sub,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})



var sq = "select ta1.*,Parentdetails.Fathername,Parentdetails.Mothername from(select details.studentid,details.studentname,details.address,details.mark_11 from details where details.studentid = '10') as ta1 ,Parentdetails where ta1.studentid = Parentdetails.studentid ";
con.query(sq,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})


var asd = "select tab2.*,parentdetails.Fathername from (select tab1.*,collegepercentage.percentage from(select details.studentid,details.studentname,details.address,details.mark_10,details.mark_11,details.mark_12 from details where details.mark_10 > 400) as tab1,collegepercentage where tab1.studentid = collegepercentage.studentid)as tab2,parentdetails where tab2.studentid = parentdetails.studentid ";
con.query(asd,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})



var sal = "insert into details(studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar) values ('velu','male','erode','9870982635','cbse','456','390','310','unpaid','unpaid','hostel')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});


var sal = "insert into collegepercentage (Percentage,Studentid) values ('98','25')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
});

var sal = "insert into parentdetails (Fathername,Mothername,Studentid) values('','madhu','25')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})


var sal = "insert into details(studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar) values ('sanju','male','erode','9070982635','cbse','459','398','311','paid','unpaid','hostel')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

var sal = "insert into collegepercentage (Percentage,Studentid) values ('99','26')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
});


var sal = "insert into parentdetails (Mothername,Studentid) values('nithiya','26')";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})

var sal = "update details set studentid ='25' where studentid='126'";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})

var sal = "update details set studentid ='26' where studentid='127'";
con.query(sal,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})

var asdf= "select tab2.*,parentdetails.Fathername from (select tab1.*,collegepercentage.percentage from(select details.studentid,details.studentname,details.address,details.mark_10,details.mark_11,details.mark_12 from details where details.studentid in ('24','25','26')) as tab1,collegepercentage where tab1.studentid = collegepercentage.studentid)as tab2,parentdetails where tab2.studentid = parentdetails.studentid ";
con.query(asdf,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
});


var qwe = "alter table details add column studentcode varchar(10)";
con.query(qwe,function(err,result){
    try {
        if(err) throw err;
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
})

var qwer = "update details set studentcode = 's101' where studentid = '1'";
con.query(qwer,function(err,result){
        try {
            if(err) throw err;
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }
    })

var qwer = "update details set studentcode = 's126' where studentid = '26'";
con.query(qwer,function(err,result){
        try {
            if(err) throw err;
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }
    });


var sql = "insert into details values (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values ('john','male','palayam','9012341289','cbse','450','411','345','paid','paid','hostel','s127')";
        con.query(sql,function(err,result){
            try {
                if(err){
                    console.log(err.message);
                }else{
                    console.log(result);
                };
            } catch (error) {
                console.log(error.message);
            }
        });


var sql = "select * from details";
        con.query(sql,function(err,result){
            try {
                if(err){
                    console.log("erroe correction : "+err);
                }else{
                    console.log("result is correct : "+result);
                };
            } catch (error) {
                console.log("erroe correction : "+error);
            }
        });








    //     var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values ('john','male','palayam','9012341289','cbse','450','411','345','paid','paid','hostel','s127')";
    //     con.query(sql,function(err,result){
    //     try {
    //         if(err){
    //             console.log("erroe correction : "+err);
    //         }else{
    //             console.log("result is correct : "+result);
    //         };
    //     } catch (error) {
    //         console.log("erroe correction : "+error);
    //     }
    // });



     
    // var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values('"+stname+"','"+gen+"','"+add+"','"+pn+"','"+maxcb+"','"+mar12+"','"+mar11+"','"+mar10+"','"+fee+"','"+notfes+"','"+hosday+"','"+stcod+"');";
    // con.query(sql,function(err,result){
    //     try {
    //         if (err) {
    //             console.log("error record   :  "+err);
    //         } else {
    //             console.log("insert record  :  "+result);
    //         }
    //     } catch (error) {
    //         console.log("error   :"+error);
    //     }
    // });



  // student exixt or not exits

  var stname = 'pooja';
  var gen = 'female';
  var add = 'coimbatore';
  var pn = '9743907000';
  var maxcb = 'matrix';
  var mar12 = '489';
  var mar11 = '390';
  var mar10 = '360';
  var fee = 'paid';
  var notfes = 'unpaid';
  var hosday = 'hostel';
  var stcod = 's128';

 

  var sql_1 = "select * from  details where studentcode = '"+stcod+"';";
    con.query(sql_1,function(err,result){
          try {
              if (err) {
                  console.log("error record   :  "+err);
              }else if(result.length>0){

                  console.log(" student code '"+stcod+"' is already exists ")
              }
              
              else {
                  var sql = "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar,studentcode) values('"+stname+"','"+gen+"','"+add+"','"+pn+"','"+maxcb+"','"+mar12+"','"+mar11+"','"+mar10+"','"+fee+"','"+notfes+"','"+hosday+"','"+stcod+"');";
                  
                  con.query(sql,function(err,result){
                      try {
                          if (err) {
                              console.log("error record   :  "+err);
                          } else {
                              console.log("inserted sucessfully ");
                              console.log("insert record  :  "+JSON.stringify(result));
                          }
                      } catch (error) {
                          console.log("error   :"+error);
                      }
                  });
                  
              }
            } catch (error) {
              console.log("error   :"+error);
            }
    });



    




















//**********************************************************************//

   });
});