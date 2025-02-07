var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936",
    database: "day171_product"
});

con.connect(function (err) {
    if (err) {
        console.log("Connection Error: " + err.message);
    } else {
        console.log("Connected successfully!");
    }
});


var order_item_sql = `
select 
    o.orderid,
    o.orderdate, 
    o.customer_name, 
    o.order_emp_name, 
    o.customer_address, 
    o.number, 
    o.gst_tax, 
    o.total_amount_with_tax, 
    o.total_amount_without_tax, 
    o.status,
    concat(
        
            'Item ID: i.itemid, 
             Product Name:  i.product_name, 
             Product ID:  i.product_id, 
             Amount with Tax:  i.amount_with_tax, 
             Amount without Tax:  i.amount_without_tax, 
             GST:  i.gst, 
             GST Amount:  i.gst_amount, 
             CGST:  i.CGST, 
             SGST:  i.SGST, 
             IGST:  i.IGST
        
    )
from order_table o
join item_table i on o.orderid = i.orderid
group by o.orderid;
`;

con.query(order_item_sql, function (err, result) {
    if (err) {
        console.log("Error fetching order and item details: " + err);
    } else {
        console.log(result);
    }
});


var view_sql = "select * from order_item_view";
con.query(view_sql, function (err, result) {
    if (err) {
        console.log("Error view data: " + err);
    } else {
        console.log(result); 
    }
});

