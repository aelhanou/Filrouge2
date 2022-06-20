const { userModel } = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');




const createUser = async (data) => {
    let { password } = data
    // now we set user password to hashed password
    data.password = await bcrypt.hash(password, 10)
    let user = await userModel.create(data)
    let token = jwt.sign({ id: user._id }, 'zer0', { expiresIn: '3h' })
    user.password = undefined
    return {
        user,
        token
    }
}

const updateUser = async (data) => {
    let { id } = data
    let user = await userModel.findByIdAndUpdate(id, data)
    user.password = undefined
    return user
}


const login = async (data) => {
    let { email, password } = data
    let user = await userModel.findOne({ email })
    if (!user) {
        return "User not found"
    }
    let isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        return "Invalid password"
    }

    let token = jwt.sign({ id: user._id }, 'zer0', { expiresIn: '3h' })
    user.password = undefined

    return {
        user,
        token
    }
}




module.exports = {
    createUser,
    login,
    updateUser
}