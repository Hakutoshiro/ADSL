var mysql = require('mysql')
const cors=require('cors'); 
const express = require('express')
const con= require('./models/User.js')
const app = express()


app.use(express.json());
app.use(cors({
  credentials:true,
  origin:'http://localhost:5173',
}));

app.get('/test',  function(req, res){
    res.send("hello")
})

app.post('/addUser', async function(req, res){
  var {Name,PRN}=req.body;
  PRN = Number(PRN)
  await con.query(`INSERT INTO user (Name,PRN) VALUES ("${Name}",${PRN})`,function(err, result) {
    if (err) throw err;
    console.log("Row added"); 
  });
  res.json({Name,PRN});
})

app.post('/updateUser',async function(req, res){
  var{PRN,Name}=req.body;
  PRN=Number(PRN);
    await con.query(`UPDATE user set Name='${Name}' WHERE PRN=${PRN}`,function(err, result){
    if (err) throw err;
    console.log("Updated");
    });
    res.json({Name,PRN});
})

app.post('/deleteUser',async function(req, res){
  var{PRN}=req.body;
  PRN=Number(PRN);
    await con.query(`Delete from user WHERE PRN=${PRN}`,function(err, result){
    if (err) throw err;
    console.log("Deleted");
    });
    res.json({PRN});
})

app.get('/readdata',async function(req, res){
  await con.query("SELECT * FROM user ",async function(err, result,fields){
    if (err) throw err;
    await res.json(result);
  })
});
app.listen(4001)