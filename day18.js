var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936",
});

con.connect(function (err) {
    if (err) {
        console.log("Connection Error: " + err.message);
    } else {
        console.log("Connected successfully!");
    }
});

con.query("create database if not exists day18_product",function(err){
    if (err) {
       console.log("error check code :"+err.message);
    } else {
       console.log("table sucessfully created");
    }
});
con.query("USE day18_product", function (err, result) {
   if (err){
       console.log(err.message);
   }else{
       console.log("used ordertable");
   }
   ;
}); 

// order table

// con.query("USE day18_product", function (err, result) 
// {
//     if (err) throw err;

//         var sql = `CREATE TABLE IF NOT EXISTS order_table 
//                 (
//                     orderid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                     orderdate date,
//                     customer_name varchar(100),
//                     customerid varchar(50),
//                     order_emp_name varchar(100),
//                     customer_address varchar(100),
//                     number bigint,
//                     gst_tax decimal(10,2) not null, 
//                     total_amount_with_tax decimal(10,2) not null,
//                     total_amount_without_tax decimal(10,2) not null,
//                     status varchar(20) 
//                 )`;

//                 con.query(sql,function(err,result){
//                     try {
//                         if (err) {
//                             console.log("error code"+err.message);
//                         } else {
//                             console.log("table created record sucessfully");
//                         }
//                     } catch (error) {
//                         console.log(error);
//                     }
//     });
// });   

// //item table

// con.query("USE day18_product", function (err, result) 
// {
//              if (err) throw err;
    
//                     var sql = `CREATE TABLE IF NOT EXISTS item_table (
//                         itemid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//                         orderid int not null,
//                         customerid varchar(50),
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
    
//                     con.query(sql,function(err,result)
//                     {
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
// });

// queries


var orderid = "" ;
var orderdate = "2024-10-09";
var customer_name = "ooviya";
var customerid = "mag-04";
var order_emp_name = "banu";
var customer_address = "namakkal,tamilnadu";
var number = "9012345678";
var gst_tax = "19";
var total_amount_with_tax = "800000";
var total_amount_without_tax = "190000";
var status = "placed";

var sql = "INSERT INTO order_table (orderdate,customerid,customer_name, order_emp_name, customer_address, number, gst_tax, total_amount_with_tax, total_amount_without_tax, status) VALUES ('" + orderdate + "', '" + customer_name + "','"+customerid+"','" + order_emp_name + "', '" + customer_address + "', '" + number + "', " + gst_tax + ", " + total_amount_with_tax + ", " + total_amount_without_tax + ", '" + status + "')";

var item_array = [
    { "itemid":"",customerid,"product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
    // { "itemid":"",customerid,"product_name": "milkmistcurd", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
    // { "itemid":"",customerid,"product_name": "laptop", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
    // { "itemid":"",customerid,"product_name": "iphone", "product_id": "md-09", "amount_with_tax": 10000,
    //  "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
    { "itemid":"",customerid,"product_name": "keyboard", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": 9, "SGST": 9, "IGST":null}];


con.query(sql,function(err,result){
  try 
  {
    if (err) 
    {
     console.log("error 1 query :"+err);   
    } else 
    {
        orderid = result.insertId;
        var select_sql = "SELECT * FROM item_table"; 
        con.query(select_sql,function(err,result)
        {
            try 
            {
                if (err)
                {
                   console.log("error in query 2 :"+err); 
                } else 
                {
                    var values = [];
                        if (item_array.length > 0) 
                        {
                            item_array.forEach(item => 
                            {
                                values.push([orderid,customerid, item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST]);
                            });
                            var insert_sql = "INSERT INTO item_table (orderid,customerid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                            con.query(insert_sql, [values], function(err, result) 
                            {
                                if (err) console.log(err);
                                else console.log("Inserted records: " + result.affectedRows);
                            });
                            
                        }
                }
              
            } catch (error) 
            {
                console.log(error);
            }

        }); 
    }
    
  } catch (error) 
  {
     console.log(error);  
  }
});

