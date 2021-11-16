const mySql = require("mysql");

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "password",
    database: 'my_db'
})

connection.connect(err => {
    if (err) {
        console.error(err)
    } else {
        console.log("Connected")
    }
})


exports.queryMethod = (sql, val)=> {
    return new Promise((res, rej)=>{

        connection.query(sql, val, (err, result) => {
            if (err) {
                rej(err) ;
            } else {
                res(result);
            }
        })
    })

}