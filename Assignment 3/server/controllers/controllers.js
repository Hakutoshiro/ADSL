const con = require('../Connection');

const handleLogin = async (req,res) => {
    const {id,password,role} = req.body;
    await con.query(`select * from ${role} where ${role}_id=${id} and password="${password}"`,function(err,result){
        if(err||!result.length)res.json(null)
        else res.json(result);
    })
}

const handleReadData = async (req,res) => {
    const {dbName} =req.params;
    await con.query(`select * from ${dbName}`,function (err,result){
        if(err)res.json(null)
        else res.json(result);
    })
}

const handleEnrollData =async (req,res) => {
    const {role,email,id,name,diffField,password} =req.body;
    await con.query(`insert into ${role} values(${id},"${name}",${diffField},"${email}","${password}")`,function(err,result){
        if(err) res.json(null)
        else res.json("success")
    })
}

const handleUpdateData =async (req,res) =>{
    const {role,email,id,name,diffField,password} =req.body;
    await con.query(`update ${role} set ${role}_name = "${name}",${role ==='Student'?"grade":"subject"}=${diffField},email = "${email}",password = "${password}" where ${role ==='Student'? "student":"teacher"}_id=${id} ` ,function(err,result){
        if(err) res.json(null)
        else res.json("success")
    })
}

module.exports ={handleLogin,handleReadData,handleEnrollData,handleUpdateData}