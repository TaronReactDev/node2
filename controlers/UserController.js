const UserValidationService = require('../servises/UserValidationService')
const jwt = require(`jsonwebtoken`)

const {queryMethod} = require("../modules/mysqlModule")

exports.login = async (req, res) => {
    const validate = UserValidationService(req.body, 'login')

    if (!validate.isValid) {
        return res.status(400).json({error: true, data: validate, message: 'Validation error'}).end();
    }

    try {
        let sql = 'SELECT * FROM `users` WHERE `Email` = ?';

        const result = await queryMethod(sql, [req.body.email])

        if(result[0].Password  === req.body.password){

            jwt.sign({res:result},"secret", (err, token)=>{
                res.send(token)
            })
          //  res.status(200).send(result)
        }

    } catch (e) {
        console.error(e)
    }

}


exports.register = async (req, res) => {

    const validate = UserValidationService(req.body, 'register')

    if (!validate.isValid) {
        return res.json({error: true, data: validate, message: 'Validation error'}).end();
    }

    try{
        let sql = 'SELECT * FROM `users` WHERE `Email` = ?';
        let sql2 = 'SELECT * FROM `users` WHERE `userName` = ?';
        const result = await queryMethod(sql, [req.body.email])
        const result2 = await queryMethod(sql2, [req.body.userName])

         if(result[0]?.Email === req.body.email || result2[0]?.userName === req.body.userName){
            res.send({message:"email or username  already in use"})
         }
              else {

           let sql3 = 'INSERT INTO `users` (userName, Email, Password) VALUE (?, ?, ?)';
           const result3 = await queryMethod(sql3, [req.body.userName, req.body.email, req.body.password])
             res.send({message:"successfully registered"})
        }

    } catch (e) {
        console.error(e)
    }


   // res.json(validate).end();
}


exports.some = async (req, res)=>{
    res.status(200).send(req.user)
}



