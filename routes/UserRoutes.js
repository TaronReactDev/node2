const Router = require("express");
const {login, register} = require("../controlers/UserController");

const router = new Router()

router.post('/registration', register)
router.post('/login', login)

module.exports = router;
