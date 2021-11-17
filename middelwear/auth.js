const jwt = require("jsonwebtoken")


exports.auth = (req, res, next)=>{
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader.split(" ")[1];

    const user = jwt.verify(token, "secret")



    if(user.res[0].id){
        req.user = user;
        next();
    }else {
        throw new Error()
    }

}