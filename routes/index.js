const Router = require("express");
const UserRouter = require('./UserRoutes')

const router = new Router()

router.use('/user', UserRouter)

module.exports = router;


