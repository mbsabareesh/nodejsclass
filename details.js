var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sabareesh_3936"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    
    con.query("CREATE DATABASE IF NOT EXISTS studentdetails", function (err, result) {
        if (err) throw err;
        console.log("Database created!");

        
        con.query("USE studentdetails", function (err, result) {
            if (err) throw err;

           
            var sql = `CREATE TABLE IF NOT EXISTS details (
                studentid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                studentname VARCHAR(100),
                gender VARCHAR(10),
                address VARCHAR(100),
                phonenumber BIGINT,
                matrix_or_cbse VARCHAR(100),
                mark_12 INT,
                mark_11 INT,
                mark_10 INT,
                fees INT,
                notesfees VARCHAR(10),
                hostel_dayscholar VARCHAR(50)
            )`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Table created!");
            });

            var alterSql = "ALTER TABLE details MODIFY fees VARCHAR(10)";
               con.query(alterSql, function (err, result) {
                   if (err) throw err;
               console.log("Column 'fees' altered successfully!");
            });


        //    var sql =  "insert into details (studentname,gender, address, phonenumber, matrix_or_cbse, mark_12, mark_11, mark_10, fees, notesfees, hostel_dayscholar) values ?";

        //    var values=[
        //     ["sabareesh","male","molasi","9087654321","matrix","450","400","360","paid","paid","hostel"],
        //     ["raja","male","erode","9012345678","cbse","560","570","478","paid","paid","hostel"],
        //     ["banu","male","erode","8907654321","matrix","421","410","399","paid","unpaid","dayscholar"],
        //     ["ooviya","female","selathapalayam","7890654321","cbse","592","598","497","paid","paid","dayscholar"],
        //     ["stalini","female","karukalpalayam","890765321","cbse","560","579","481","paid","unpaid","hostel"],
        //     ["priya","female","coimbatore","9988776655","cbse","568","560","479","paid","paid","hostel"],
        //     ["mathanraj","male","namakkal","8977665544","cbse","467","450","389","paid","paid","hostel"],
        //     ["hariharan","male","theni","7122334455","matrix","421","390","310","unpaid","paid","hostel"],
        //     ["sanjay","male","singanallur","9081234567","matrix","510","487","398","paid","paid","dayscholar"],
        //     ["sanjaykumar","male","vadavalli","9011111111","cbse","310","330","367","paid","paid","dayscholar"],
        //     ["gopikrishana","male","mettupalayam","9088887798","cbse","598","567","489","paid","paid","dayscholar"],
        //     ["hariprasath","male","erode","9012345678","matrix","489","399","349","paid","unpaid","hostel"],
        //     ["harshini","female","gobichettypalayam","801273645","cbse","467","498","351","paid","paid","hostel"],
        //     ["aishu","female","gobichettypalayam","8910298763","cbse","569","578","498","paid","unpaid","dayscholar"],
        //     ["gopika","female","unjalur","9980765017","matrix","510","498","399","paid","unpaid","hostel"],
        //     ["prabu","male","molasi","7123456789","cbse","567","510","487","paid","paid","dayscholar"],
        //     ["sanmathi","female","molasi","9108976543","matrix","390","376","289","paid","paid","dayscholar"],
        //     ["rithik","male","tirucnengode","9178098765","matrix","567","512","473","paid","paid","hostel"],
        //     ["bothi","male","namakkal","7908654789","matrix","567","456","329","paid","unpaid","dayscholor"],
        //     ["shankar","male","namakkal","9108909090","matrix","456","378","289","paid","unpaid","hostel"],
        //     ["saran","male","erode","8109890109","matrix","539","457","367","unpaid","unpaid","hostel"],
        //     ["rahul","male","molasi","8019980981","matrix","543","521","435","unpaid","paid","dayscholar"],
        //     ["ragul","male","coimbatore","9000987689","cbse","549","531","378","paid","paid","hostel"],
        //     ["main","male","salem","9679089080","cbse","456","410","393","paid","paid","dayscholar"],
        //     ["velu","male","erode","9870982635","cbse","456","390","310","unpaid","unpaid","hostel"]
        //    ];
        //    con.query(sql,[values],function(err,result){
        //         if(err)throw err;
        //         console.log(result);
        //    })


           con.query("select * from details",function(err,result,fields){
            console.log(result);
           })


           con.query("select * from details where fees = 'unpaid'",function(err,result,fields){
            console.log(result);
           })

           con.query("select * from details where notesfees = 'paid'",function(err,result,fields){
            console.log(result);
           })

           con.query("select * from details where studentid between 1 and 100 ",function(err,result,fields){
            console.log(result);
           })

        //    con.query("select * from details  where studentid between 101 and 125",function(err,result,fields){
        //     console.log(result);
        //    })

           con.query("select * from details where gender = 'male'",function(err,result,fields){  
                console.log(result);
           });

           con.query("select * from details where hostel_dayscholar = 'hostel'",function(err,result,fields){
               console.log(result);
           });

           con.query("select studentname,studentid from details where hostel_dayscholar = 'hostel'",function(err,result,fields){
            console.log(result);
          });

          con.query("select * from details order by studentname",function(err,result,fields){
            console.log(result);
          });

          con.query("select * from details where studentid between 1 and 10 ",function(err,result,fields){
            console.log(result);
           })
          
        
          con.query("select * from details order by studentname ",function(err,result,fields){
            try {
                if(err)throw err;
            console.log(result);
            } catch (error) {
              console.log(error.message);  
            }
          });

          con.query("select * from details where studentid = '10'",function(err,result,fields){
            console.log(result);
          });

         var ghy= "select * from details where studentid = '10'";
          con.query(ghy,function(err,result){
           try{
            console.log(JSON.stringify(result));
           }catch(error){
            console.log("error the code  : "+error);
           }
            
          });

        
        });
    });
});
