const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');


const mysql = require('mysql2');
const e = require('express');
app.use(express.ststic ('abc'));
app.use(bodyParser.jason ());
app.use(bodyParser.urlencoded({extended:true})}:
let abc={
    host:'localhpost',
    user:'',
    password:'',
    database:'',
    poet:3306
}
crete connection =mysql.createConnection(abc);
app.get("/getbookdetails",(req,resp)) =>{
    console.log("Inside getbooksfun");
    let bookid =req.query.bbookid;
    let output={ status: false,bookdetails:{bookid :0,bookname:"",price:0}}
    connection.query('select* from book where bookid = ? ',[bookid],
    (erroe,rows)=>{
        if (error)
        {
              console.log(error);

              
        }
        else{
            if(rows.length >0){
                console.log("Books Found");
                console.log(rows[0]);
                output.ststus=true;
                output.bookdetails=rows[0];

            }
            else{
                console.log("Books not Found");
            }
        }
      console.log(output);
      resp.send(output);
      

    })
}
