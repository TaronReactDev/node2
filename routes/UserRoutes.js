

const Router = require("express");
const {login, register, some} = require("../controlers/UserController");
const {auth} =require("../middelwear/auth")

const router = new Router()

router.post('/registration', register)
router.post('/login', login)
router.get(`/some`, auth, some)

module.exports = router;


