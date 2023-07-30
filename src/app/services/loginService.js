
import { where } from 'sequelize'
import  jwt  from 'jsonwebtoken'
import db from '../../models/index.js'




const screctKey = 'imrabbit'

const handleLogin = async (email, password) => {
    const account = await db.User.findOne({
        where: { email: email },
        include: [{
            model: db.Role,
            attributes: ['role']
        }]
    })
    if (!account) {
        return 'email khong ton tai'
    }
    else {
        if (account.passWord === password) {
            const user = {
                id: account.id,
                email: account.email,
                role: account.Role.role,
                firstName : account.firstName,
                lastName: account.lastName
            }
            const payLoad = user
            const token = jwt.sign(payLoad, screctKey)
            return token
        }
        else {
            return 'sai mat khau'
        }
    }
    // return account
}

    

module.exports = {
    handleLogin : handleLogin
}