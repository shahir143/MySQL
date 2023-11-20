const db=reuire('mysql2');
const pool=mysql.createpool({
    host:'localhost',
    user:'root',
    database:'node-connected'
})
module.exports=pool.promise();