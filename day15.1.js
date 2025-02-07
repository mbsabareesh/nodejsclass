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

// con.query("create database if not exists magivaproduct",function(err){
//      if (err) {
//         console.log("error check code :"+err.message);
//      } else {
//         console.log("table sucessfully created");
//      }
// });

con.query("USE magivaproduct", function (err, result) {
    if (err){
        console.log(err.message);
    }else{
        console.log("used ordertable");
    }
    ;
});

// customer table

// con.query("USE magivaproduct", function (err, result) {
//          if (err) throw err;

//                 var sql = `CREATE TABLE IF NOT EXISTS ordertable (
//                     orderid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                     cusid int not null,
//                     orderdate date,
//                     customer_name varchar(100),
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


// var orderitem_array = [{"cusid":1,"orderdate":"2024-01-01","customer_name":"sabareesh","order_emp_name":"raja","customer_address":"erode,tamilnadu","number":9087654321,"gst_taxt":9.00,"total_amount_with_tax":5450,"total_amount_without_tax":5000,"status":"placed"}]

// var insert_sql = "insert into ordertable (cusid,orderdate, customer_name, order_emp_name, customer_address, number, gst_taxt, total_amount_with_tax, total_amount_without_tax, status) values ?";
// var values = [];

// for (var i = 0; i < orderitem_array.length; i++) {
//     values.push([
//         orderitem_array[i].cusid,orderitem_array[i].orderdate,orderitem_array[i].customer_name,orderitem_array[i].order_emp_name,
// orderitem_array[i].customer_address,orderitem_array[i].number,orderitem_array[i].gst_taxt,orderitem_array[i].total_amount_with_tax,orderitem_array[i].total_amount_without_tax,orderitem_array[i].status]);
// }

// con.query(insert_sql, [values], function(err, result) {
//     if (err) {
//         console.log("Error: " + err);
//     } else {
//         console.log(JSON.stringify(result));
//     }
// });


//item table


// con.query("USE magivaproduct", function (err, result) {
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

// var item_array = [{"cusid":1,"product_name":"iphone","product_id":"md-01","amount_with_tax":118000,"amount_without_tax":100000,"gst":18,"gst_amount":18000,"CGST":9,"SGST":9,"IGST":null},{"cusid":1,"product_name":"vivophone","product_id":"md-23","amount_with_tax":47200,"amount_without_tax":40000,"gst":18,"gst_amount":7200,"CGST":9,"SGST":9,"IGST":null},{"cusid":1,"product_name":"imaxbook","product_id":"md-90","amount_with_tax":66080,"amount_without_tax":56000,"gst":18,"gst_amount":1080,"CGST":null,"SGST":null,"IGST":19}]

//  var insert_sql = "INSERT INTO item_table (cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";

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



// insert data update data delete data

// var item_array = [
// {"cusid":1,"product_name":"iphone","product_id":"md-01","amount_with_tax":118000,"amount_without_tax":100000,"gst":18,"gst_amount":18000,"CGST":9,"SGST":9,"IGST":null},
// {"cusid":1,"product_name":"vivophone","product_id":"md-23","amount_with_tax":47200,"amount_without_tax":40000,"gst":18,"gst_amount":7200,"CGST":9,"SGST":9,"IGST":null},
// {"cusid":2,"product_name":"delllaptop","product_id":"md-90","amount_with_tax":66080,"amount_without_tax":56000,"gst":18,"gst_amount":1080,"CGST":null,"SGST":null,"IGST":18}];

// var item_array = [
//     {"cusid":11,"product_name":"apple tv","product_id":"md-01","amount_with_tax":118000,"amount_without_tax":100000,"gst":18,"gst_amount":18000,"CGST":9,"SGST":9,"IGST":null},
//     {"cusid":3,"product_name":"smart watch","product_id":"md-23","amount_with_tax":47200,"amount_without_tax":40000,"gst":18,"gst_amount":7200,"CGST":9,"SGST":9,"IGST":null},
//     {"cusid":9,"product_name":"asuslaptop","product_id":"md-08","amount_with_tax":10000,"amount_without_tax":56000,"gst":18,"gst_amount":1080,"CGST":null,"SGST":null,"IGST":18}];

    var item_array = [
        {"cusid": 11, "product_name": "apple tv", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null},
        {"cusid": 3, "product_name": "smart watch", "product_id": "md-23", "amount_with_tax": 47200, "amount_without_tax": 40000, "gst": 18, "gst_amount": 7200, "CGST": 9, "SGST": 9, "IGST": null},
        {"cusid": 9, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 23, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 10, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18} 
    ];
    

var select_sql ="select * from item_table";

con.query(select_sql,function(err,result){
    if (err) {
        console.log(err);
    } else {
        var values = [];

        // insert update delete

        var insert_array = item_array.filter(entry1 => !result.some(entry2 =>(entry1.cusid == entry2.cusid)));
        var update_array = item_array.filter(entry1 => result.some(entry2 =>(entry1.cusid == entry2.cusid)));
        var delete_array = result.filter(entry1 => !item_array.some(entry2=>(entry1.cusid == entry2.cusid)));

        let final_sql = "";

        // condition insert 

        if(insert_array.length>0){
            insert_array.forEach(item =>{
                values.push([item.cusid,item.product_name,item.product_id,item.amount_with_tax,item.amount_without_tax,item.gst,item.gst_amount,item.CGST,item.SGST,item.IGST]);
            });
            var insert_sql = "INSERT INTO item_table (cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                        con.query(insert_sql, [values], function(err, result) {
                            if (err) console.log(err);
                            else console.log("Inserted records: " + result.affectedRows);
                        });

           final_sql += insert_sql + "; ";

        }
        // condition update

        if(update_array.length>0){
             update_array.forEach(item =>{
                var update_sql = `
                update item_table 
                set product_name = 'telephone', product_id = 'md-08', amount_with_tax = 10000, amount_without_tax = 10000,gst = 18, gst_amount = 1000, CGST = NULL, SGST = NULL, IGST = 18 WHERE cusid = 9`;

                    con.query(update_sql, [ item.cusid,item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST], function(err, result) {
                        if (err) console.log(err);
                        else console.log("Updated records: " + result.affectedRows);
            });

            final_sql += update_sql + "; ";

             });
        }

        // condition delete

        if (delete_array.length > 0) {
            delete_array.forEach(item => {
                var delete_sql = "DELETE FROM item_table WHERE cusid = ?";
                con.query(delete_sql, [item.cusid], function(err, result) {
                    if (err) console.log(err);
                    else console.log("Deleted records: " + result.affectedRows);
                });
    
                final_sql += delete_sql + "; ";
            });
        }
        console.log("Final SQL:", final_sql);
    }
});




 con.query("create database if not exists magivaproduct",function(err){
    //      if (err) {
    //         console.log("error check code :"+err.message);
    //      } else {
    //         console.log("table sucessfully created");
    //      }
    // });
    
    con.query("USE magivaproduct", function (err, result) {
        if (err){
            console.log(err.message);
        }else{
            console.log("used ordertable");
        }
        ;
    });
    
    // item tabel
    
    var item_array = [
        {
            "cusid": 11, "product_name": "apple tv", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null},
        {"cusid": 3, "product_name": "smart watch", "product_id": "md-23", "amount_with_tax": 47200, "amount_without_tax": 40000, "gst": 18, "gst_amount": 7200, "CGST": 9, "SGST": 9, "IGST": null},
        {"cusid": 3, "product_name": "tv", "product_id": "md-23", "amount_with_tax": 47200, "amount_without_tax": 40000, "gst": 18, "gst_amount": 7200, "CGST": 9, "SGST": 9, "IGST": null},
       /* {"cusid": 9, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},*/
        {"cusid": 23, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 10, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 12, "product_name": "pendrive", "product_id": "md-11", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18} ,
        {"cusid": 14, "product_name": "charge wire", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 15, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 16, "product_name": "notes", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 17, "product_name": "switch box", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
        {"cusid": 9, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18}
    ];
    
    
    var select_sql ="select * from item_table";
    
    con.query(select_sql,function(err,result){
    if (err) {
        console.log(err);
    } else {
        var values = [];
    
        // insert update delete
    
        var insert_array = item_array.filter(entry1 => !result.some(entry2 =>(entry1.cusid == entry2.cusid)));
        var update_array = item_array.filter(entry1 => result.some(entry2 =>(entry1.cusid == entry2.cusid)));
        var delete_array = result.filter(entry1 => !item_array.some(entry2=>(entry1.cusid == entry2.cusid)));
    
        let final_sql = "";
    
        // condition insert 
    
        if(insert_array.length>0){
            insert_array.forEach(item =>{
                values.push([item.cusid,item.product_name,item.product_id,item.amount_with_tax,item.amount_without_tax,item.gst,item.gst_amount,item.CGST,item.SGST,item.IGST]);
            });
            var insert_sql = "INSERT INTO item_table (cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                        con.query(insert_sql, [values], function(err, result) {
                            if (err) console.log(err);
                            else console.log("Inserted records: " + result.affectedRows);
                        });
    
           final_sql += insert_sql + "; ";
    
        }
        // condition update
    
        if(update_array.length>0){
             update_array.forEach(item =>{
                var update_sql = `
                update item_table 
                set product_name = 'telephone', product_id = 'md-08', amount_with_tax = 10000, amount_without_tax = 10000,gst = 18, gst_amount = 1000, CGST = 9, SGST = 9, IGST = NULL WHERE cusid = 17`;
    
                    con.query(update_sql, [ item.cusid,item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST], function(err, result) {
                        if (err) console.log(err);
                        else console.log("Updated records: " + result.affectedRows);
            });
    
            final_sql += update_sql + "; ";
    
             });
        }
    
        // condition delete
    
        if (delete_array.length > 0) {
            delete_array.forEach(item => {
                var delete_sql = "DELETE FROM item_table WHERE cusid = ?";
                con.query(delete_sql, [item.cusid], function(err, result) {
                    if (err) console.log(err);
                    else console.log("Deleted records: " + result.affectedRows);
                });
    
                final_sql += delete_sql + "; ";
            });
        }
        console.log("Final SQL:", final_sql);
    }
    });

});