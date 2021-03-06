
const express=require("express");
const db=require("./db");

const app=express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(5000,()=>{
    console.log("application start in port 5000.")
})


db.pool.query('CREATE TABLE lists (id INTEGER AUTO_INCREMENT,value TEXT,PRIMARY KEY (id))',
(err,results,field)=>{
        console.log(results)
    })


app.post('/api/values',function(req,res){
    var str=req.body.value+" Hello";
    db.pool.query('INSERT INTO lists (value) VALUES(?);',str,
    (err,results,fields)=>{
        if(err)
        return res.status(500).send(err);
        else
        return res.json({success: true, value: str})
    })

})