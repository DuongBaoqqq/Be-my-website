import { handleLogin } from '../services/loginService'




const loginCtrl = {
    handleLogin : async (req, res) => {
        const data = await handleLogin(req.body.email, req.body.password)
        res.status(200).json(data)
        // console.log(req.body);
    }
}

module.exports = loginCtrl;
