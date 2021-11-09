const UserValidationService = require('../servises/UserValidationService')


exports.login = (req, res) =>{
    console.log(req.body);
    const validate = UserValidationService(req.body, 'login')
    if(!validate.isValid) {
        return res.json({error: true, data: validate, message: 'Validation error'}).end();
    }

    res.json(validate).end();
}

exports.register = (req, res) =>{
    res.status(200).send({messeg:"ok"})
}
