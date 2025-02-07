// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host : "localhost",
//     port : 3306,
//     user : "root",
//     password : "Sabareesh_3936"
// });

// con.connect(function(err){
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log("connected sucessfully!")
//     }
// });


// con.query("create database if not exists ordertable",function(err){
//      if (err) {
//         console.log("error check code :"+err.message);
//      } else {
//         console.log("table sucessfully created");
//      }
// });

// con.query("USE ordertable", function (err, result) {
//     if (err){
//         console.log(err.message);
//     }else{
//         console.log("used ordertable");
//     }
//     ;
// });

// // order table


// con.query("USE ordertable", function (err, result) {
//          if (err) throw err;

//                 var sql = `CREATE TABLE IF NOT EXISTS order_table (
//                     orderid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                     cusid int not null,
//                     orderdate date,
//                     orderpersonname varchar(100),
//                     order_emp_name varchar(100),
//                     customer_address varchar(100),
//                     number bigint,
//                     gst_taxt decimal(10,2) not null, 
//                     total_amount_with_tax decimal(10,2) not null,
//                     total_amount_without_tax decimal(10,2) not null,
//                     status varchar(20) 
//                 )`;

//                 con.query(sql,function(err,result){
//                     try {
//                         if (err) {
//                             console.log("error code"+err.message);
//                         } else {
//                             console.log("table created sucessfully");
//                         }
//                     } catch (error) {
//                         console.log(error);
//                     }
//                 });
//             });



// queries

// var orderitem_array = [{"cusid":1,"orderdate":"2024-01-01","orderpersonname":"sabareesh","order_emp_name":"raja","customer_address":"erode,tamilnadu","number":9087654321,"gst_taxt":9.00,"total_amount_with_tax":5450,"total_amount_without_tax":5000,"status":"placed"}]

// var insert_sql = "insert into order_table (cusid,orderdate, orderpersonname, order_emp_name, customer_address, number, gst_taxt, total_amount_with_tax, total_amount_without_tax, status) values ?";
// var values = [];

// for (var i = 0; i < orderitem_array.length; i++) {
//     values.push([
//         orderitem_array[i].cusid,orderitem_array[i].orderdate,orderitem_array[i].orderpersonname,orderitem_array[i].order_emp_name,
// orderitem_array[i].customer_address,orderitem_array[i].number,orderitem_array[i].gst_taxt,orderitem_array[i].total_amount_with_tax,orderitem_array[i].total_amount_without_tax,orderitem_array[i].status]);
// }

// con.query(insert_sql, [values], function(err, result) {
//     if (err) {
//         console.log("Error: " + err);
//     } else {
//         console.log(JSON.stringify(result));
//     }
// });




// item table


// con.query("USE ordertable", function (err, result) {
//              if (err) throw err;
    
//                     var sql = `CREATE TABLE IF NOT EXISTS item_table (
//                         orderid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                         cusid int not null,
//                         product_name varchar(50),
//                         product_id varchar(10),
//                         amount_with_tax decimal(10,2),
//                         amount_without_tax decimal(10,2),
//                         gst decimal(10,2),
//                         gst_amount decimal(10,2),
//                         CGST decimal(10,2),
//                         SGST decimal(10,2),
//                         IGST decimal(10,2)
//                     )`;
    
//                     con.query(sql,function(err,result){
//                         try {
//                             if (err) {
//                                 console.log("error code"+err.message);
//                             } else {
//                                 console.log("table created sucessfully");
//                             }
//                         } catch (error) {
//                             console.log(error);
//                         }
//                     });
//                 });

// var item_array = [{"cusid":1,"itemid":1,"product_name":"iphone","product_id":"md-01","amount_with_tax":118000,"amount_without_tax":100000,"gst":18,"gst_amount":18000,"CGST":9,"SGST":9,"IGST":null},{"cusid":1,"itemid":2,"product_name":"vivophone","product_id":"md-23","amount_with_tax":47200,"amount_without_tax":40000,"gst":18,"gst_amount":7200,"CGST":9,"SGST":9,"IGST":null},{"cusid":1,"itemid":"","product_name":"imaxbook","product_id":"md-90","amount_with_tax":66080,"amount_without_tax":56000,"gst":18,"gst_amount":1080,"CGST":null,"SGST":null,"IGST":19}]

 

// var item_array = [
//     { "cusid": 1, "itemid": 1, "product_name": "iphone", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null },
//     { "cusid": 1, "itemid": 2, "product_name": "vivophone", "product_id": "md-23", "amount_with_tax": 47200, "amount_without_tax": 40000, "gst": 18, "gst_amount": 7200, "CGST": 9, "SGST": 9, "IGST": null },
//     { "cusid": 1, "itemid": "", "product_name": "imaxbook", "product_id": "md-90", "amount_with_tax": 66080, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 19 }
// ];

// var insert_sql = "INSERT INTO item_table (cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";

// var values = [];

// for (let i = 0; i < item_array.length; i++) {
//     values.push([
//         item_array[i].cusid,
//         item_array[i].product_name,
//         item_array[i].product_id,
//         item_array[i].amount_with_tax,
//         item_array[i].amount_without_tax,
//         item_array[i].gst,
//         item_array[i].gst_amount,
//         item_array[i].CGST,
//         item_array[i].SGST ,
//         item_array[i].IGST
//     ]);
// }

// con.query(insert_sql, [values], function (err, result) {
//     if (err) {
//         console.log("Error: " + err);
//     } else {
//         console.log(JSON.stringify(result));
//     }
// });



    

// var select_sql = "select * from item_table";
// // var insert_sql = "insert into item_table (product_name,product_id,amount_with_tax,amount_without_tax,gst,gst_amount,CGST,SGST,IGST) values ? ";
// // var update_sql =  "UPDATE item_table SET product_name = ?, product_id = ?, amount_with_tax = ?, amount_without_tax = ?, gst = ?, gst_amount = ?, CGST = ?, SGST = ?, IGST = ? WHERE cus_id = ?";
// // var delete_sql = "delete from item_table where cus_id =?"


// // final_sql = insert_sql + update_sql + delete_sql;
// con.query(select_sql,function(err,result){
//     try {
//         if (err) {
//             console.log("error code :"+err);
//         } else {
//             var values = [];
//             var insert_array = item_array.filter(entry1 => ! result.some(entry2 => (entry1.cus_id == entry2.cus_id)));

//             var delete_array = result.filter(entry1 => ! item_array.some(entry2 => (entry1.cus_id == entry2.cus_id)));

//             var update_array = item_array.filter(entry1 => result.some(entry2 => (entry1.cus_id == entry2.cus_id)));

        
   
//     if(insert_array.length > 0)
//     {
        
       
//        for (i = 0; i < item_array.length; i++){
//            values.push([
//             insert_array[i].product_name,insert_array[i].product_id,insert_array[i].amount_with_tax,insert_array[i].amount_without_tax,insert_array[i].gst,insert_array[i].gst_amount,insert_array[i].CGST,insert_array[i].SGST,insert_array[i].IGST]);}

//             var insert_sql = "insert into item_table (product_name,product_id,amount_with_tax,amount_without_tax,gst,gst_amount,CGST,SGST,IGST) values ? ";
        
//     }
//     if(update_array.length > 0)
//     {
//         var update_sql = ";";
//        for (i = 0; i < item_array.length; i++){
        
//         update_sql = update_sql + "UPDATE item_table SET product_name = '"+update_array[i].product_name+"', product_id = '"+update_array[i].product_id+"', amount_with_tax = '"+update_array[i].amount_with_tax+"', amount_without_tax = '"+update_array[i].amount_without_tax+"', gst = '"+update_array[i].gst+"', gst_amount = '"+update_array[i].gst_amount+"', CGST = '"+update_array[i].CGST+"', SGST = '"+update_array[i].SGST+"', IGST = '"+update_array[i].IGST+"' WHERE cus_id = ?;";

//         //    values.push([
//         //     update_array[i].product_name,update_array[i].product_id,update_array[i].amount_with_tax,update_array[i].amount_without_tax,update_array[i].gst,update_array[i].gst_amount,update_array[i].CGST,update_array[i].SGST,update_array[i].IGST]);}
        
            
//             // var update_sql =  "UPDATE item_table SET product_name = , product_id = ?, amount_with_tax = ?, amount_without_tax = ?, gst = ?, gst_amount = ?, CGST = ?, SGST = ?, IGST = ? WHERE cus_id = ?";

//             console.log(update_sql);

//     }
//     if (delete_array.length > 0) {
//        delete_array.forEach(item => {
//            values.push([item.cus_id]);
//        });
//        var delete_sql = "delete from item_table where cus_id = ?"
//    }

//     var final_sql = insert_sql + ";"+ update_sql + ";" + delete_sql + ";";
//         }
//         con.query(final_sql,function(err,result){
//             try {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(result);
//                 }
//             } catch (error) {
//               console.log(error);  
//             }

//     });
// }
//     } catch (error) {
//         console.log(error);
//     }

// });




// product table 

// con.query("USE ordertable", function (err, result) {
//                  if (err) throw err;
        
//                         var sql = `CREATE TABLE IF NOT EXISTS product_table (
//                             productid varchar(100),
//                             product_name varchar(50),
//                             gst decimal(10,2),
//                             price decimal (10,2)
//                         )`;
        
//                         con.query(sql,function(err,result){
//                             try {
//                                 if (err) {
//                                     console.log("error code"+err.message);
//                                 } else {
//                                     console.log("table created sucessfully");
//                                 }
//                             } catch (error) {
//                                 console.log(error);
//                             }
//                         });
//                     });
    
// var product_array =[{"productid":"md-01","product_name":"iphone","gst":18,"price":100000},{"productid":"md-23","product_name":"vivophone","gst":18,"price":40000},{"productid":"md-90","product_name":"laptop","gst":18,"price":56000}]   

// var insert_sql = "insert into product_table (productid,product_name,gst,price) values ?";

// var values = [];
// for(i=0; i<product_array.length;i++){
//    values.push([product_array[i].productid,product_array[i].product_name,product_array[i].gst,product_array[i].price]);
// }
// con.query(insert_sql,[values],function(err,result){
//     try {
//         if (err) {
//             console.log("error code :"+err);
//         } else {
//             console.log(result);
//         }
//     } catch (error) {
//         console.log(errro);
//     }
// });





// day 15 code copy and paste

var item_array = [
    {"cusid": 1, "product_name":"iphone","product_id":"md-01","amount_with_tax":118000,"amount_without_tax":100000,"gst":18,"gst_amount":18000,"CGST":9,"SGST":9,"IGST":null},
    {"cusid": 2, "product_name":"oppophone","product_id":"md-23","amount_with_tax":47200,"amount_without_tax":40000,"gst":18,"gst_amount":7200,"CGST":9,"SGST":9,"IGST":null},
    {"cusid": 3, "product_name":"dell laptop","product_id":"md-90","amount_with_tax":66080,"amount_without_tax":56000,"gst":18,"gst_amount":1080,"CGST":null,"SGST":null,"IGST":18}
];

var select_sql = "SELECT * FROM item_table";

con.query(select_sql, function(err, result){
    if (err) {
        console.log("Error Code: " + err);
        return;
    }

    var values = [];

    var insert_array = item_array.filter(entry1 => !result.some(entry2 => (entry1.cusid == entry2.cusid)));
    var delete_array = result.filter(entry1 => !item_array.some(entry2 => (entry1.cusid == entry2.cusid)));
     var update_array = item_array.filter(entry1 => result.some(entry2 => (entry1.cusid == entry2.cusid)));

    let final_sql = "";

    if (insert_array.length > 0) {
        insert_array.forEach(item => {
            values.push([item.cusid, item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST]);
        });

        var insert_sql = "INSERT INTO item_table (cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
        con.query(insert_sql, [values], function(err, result) {
            if (err) console.log(err);
            else console.log("Inserted records: " + result.affectedRows);
        });

        final_sql += insert_sql + "; ";
    }

    if (update_array.length > 0) {
        update_array.forEach(item => {
            var update_sql = `UPDATE item_table 
                SET product_name = ?, product_id = ?, amount_with_tax = ?, amount_without_tax = ?, gst = ?, gst_amount = ?, CGST = ?, SGST = ?, IGST = ? 
                WHERE cusid = ?`;

            con.query(update_sql, [ item.cusid,item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST], function(err, result) {
                if (err) console.log(err);
                else console.log("Updated records: " + result.affectedRows);
            });

            final_sql += update_sql + "; ";
        });
    }

    if (delete_array.length > 0) {
        delete_array.forEach(item => {
            var delete_sql = "DELETE FROM item_table WHERE cusid = 5";
            con.query(delete_sql, [item.cusid], function(err, result) {
                if (err) console.log(err);
                else console.log("Deleted records: " + result.affectedRows);
            });

            final_sql += delete_sql + "; ";
        });
    }

    console.log("Final SQL:", final_sql);
});
