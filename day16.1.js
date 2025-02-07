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

// con.query("create database if not exists magiva_product",function(err){
//          if (err) {
//             console.log("error check code :"+err.message);
//          } else {
//             console.log("table sucessfully created");
//          }
//     });
    
    con.query("USE magiva_product", function (err, result) {
        if (err){
            console.log(err.message);
        }else{
            console.log("used ordertable");
        }
        ;
    });


var orderid = "5";
var cusid = "7";
var orderdate = "2024-10-09";
var customer_name = "mani";
var order_emp_name = "banu";
var customer_address = "namakkal,tamilnadu";
var number = "9012345678";
var gst_tax = "19";
var total_amount_with_tax = "800000";
var total_amount_without_tax = "190000";
var status = "placed";


var sql = "update order_table set cusid = '" + cusid + "', orderdate = '" + orderdate + "', customer_name = '" + customer_name + "', order_emp_name = '" + order_emp_name + "', customer_address = '" + customer_address + "', number = '" + number + "', gst_tax = '" + gst_tax + "', total_amount_with_tax = '" + total_amount_with_tax + "', total_amount_without_tax = '" + total_amount_without_tax + "', status = '" + status + "' where orderid = '"+orderid+"';";


var item_array = [
    {"itemid":" ","orderid":orderid,"cusid": 1, "product_name": "apple tv", "product_id": "md-01", "amount_with_tax": 118000, "amount_without_tax": 100000, "gst": 18, "gst_amount": 18000, "CGST": 9, "SGST": 9, "IGST": null},
    {"itemid":" ","orderid":orderid,"cusid": 2, "product_name": "smart watch", "product_id": "md-23", "amount_with_tax": 47200, "amount_without_tax": 40000, "gst": 18, "gst_amount": 7200, "CGST": 9, "SGST": 9, "IGST": null},
    {"itemid":" ","orderid":orderid,"cusid": 3, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18},
    {"itemid":" ","orderid":orderid,"cusid": 4, "product_name": "mouse", "product_id": "md-08", "amount_with_tax": 10000, "amount_without_tax": 56000, "gst": 18, "gst_amount": 1080, "CGST": null, "SGST": null, "IGST": 18}];

      
            con.query(sql,function(err,result)
            {
                try {
                        if (err) 
                        { 
                            console.log("error check the code : "+ err);
                        }
                        else if (result.length>0)
                        {
                            console.log("already '"+orderid+"' exists");
                        }
                        else
                        {
                        con.query(sql,function(err,result){
                            if(err)
                            {   throw(err);
                            }
                            else
                            {
                                var select_sql ="select * from item_table";
                                con.query(select_sql,function(err,result){
                                    if(err)
                                    {throw(err);
                                    }
                                    else
                                    {                          
                                    //orderid = result.rows[0].orderid;
                                    var values = [];                      
                                        var insert_array = item_array.filter(entry1 => !result.some(entry2 =>(entry1.orderid == entry2.orderid)));
                                        var update_array = item_array.filter(entry1 => result.some(entry2 =>(entry1.orderid == entry2.orderid)));
                                        var delete_array = result.filter(entry1 => !item_array.some(entry2=>(entry1.orderid == entry2.orderid)));

                                        let final_sql = "";

                     

                    if(insert_array.length>0){
                        insert_array.forEach(item =>{
                            values.push([orderid,item.cusid,item.product_name,item.product_id,item.amount_with_tax,item.amount_without_tax,item.gst,item.gst_amount,item.CGST,item.SGST,item.IGST]);
                        });
                        var insert_sql = "INSERT INTO item_table (orderid,cusid, product_name, product_id, amount_with_tax, amount_without_tax, gst, gst_amount, CGST, SGST, IGST) VALUES ?";
                                    con.query(insert_sql, [values], function(err, result) {
                                        if (err) console.log(err);
                                        else console.log("Inserted records: " + result.affectedRows);
                                    });

                    final_sql += insert_sql + "; ";

                    }
                   

                    if(update_array.length>0){
                        update_array.forEach(item =>{
                            var update_sql = `
                            update item_table 
                            set product_name = 'telephone', product_id = 'md-08', amount_with_tax = 10000, amount_without_tax = 10000,gst = 18, gst_amount = 1000, CGST = NULL, SGST = NULL, IGST = 18 WHERE cusid = 9`;

                                con.query(update_sql, [orderid,item.cusid,item.product_name, item.product_id, item.amount_with_tax, item.amount_without_tax, item.gst, item.gst_amount, item.CGST, item.SGST, item.IGST], function(err, result) {
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
                            con.query(delete_sql, [item.itemid], function(err, result) {
                                if (err) console.log(err);
                                else console.log("Deleted records: " + result.affectedRows);
                            });

                            final_sql += delete_sql + "; ";
                        });
                    }
                               console.log("Final SQL:", final_sql);
                                                    }
                                                    
                                                });
                                            }
                                        });    
                                    }    
                                } catch (error) {
                                    console.log(error.message)
                                }
             }); 

                            
                            
  
                            
    