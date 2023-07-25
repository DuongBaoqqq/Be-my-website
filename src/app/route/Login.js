import express  from "express";
import loginCtrl from "../controller/loginController.js"


let router = express.Router();

const loginRouter = (app) => {
    router.post("/account", loginCtrl.handleLogin)

    return app.use('/',router)
}


module.exports = loginRouter
