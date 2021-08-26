const mysql=require("mysql");
const pool=mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
})

pool.query('DROP TABLE IF EXISTS lists;',
(err,results,field)=>{
        console.log(results)
    })

exports.pool=pool;