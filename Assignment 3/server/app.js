const express = require('express');
const cors = require('cors');
const con = require('./connection/Connection');
const app = express();

app.use(express.json());
app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
));


app.post('/login',async (req,res) => {
    const {id,password,role} = req.body;
    await con.query(`select * from ${role} where ${role}_id=${id} and password="${password}"`,function(err,result){
        if(err||!result.length)res.json(null)
        else res.json(result);
    })
})

app.post('/readData',async (req,res) => {
    const {dbName} =req.body;
    await con.query(`select * from ${dbName}`,function (err,result){
        if(err)res.json(null)
        else res.json(result);
    })
})

app.post('/enroll',async (req,res) => {
    const {role,email,id,name,diffField,password} =req.body;
    await con.query(`insert into ${role} values(${id},"${name}",${diffField},"${email}","${password}")`,function(err,result){
        if(err) res.json(null)
        else res.json("success")
    })
})

app.post('/update',async (req,res) =>{
    const {role,email,id,name,diffField,password} =req.body;
    await con.query(`update ${role} set ${role}_name = "${name}",${role ==='Student'?"grade":"subject"}=${diffField},email = "${email}",password = "${password}" where ${role ==='Student'? "student":"teacher"}_id=${id} ` ,function(err,result){
        if(err) res.json(null)
        else res.json("success")
    })
})

app.post('/getInfo',async (req, res) => {
    const {role,id} =req.body;
    await con.query(`select * from ${role} where ${role ==='Student'?'student_id':"teacher_id"}=${id}`,function(err,result){
        if(err) res.json(null)
        else res.json(result)
    })
})

app.listen(4000)