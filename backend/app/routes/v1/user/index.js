const { createUser, login } = require("../../../controllers")
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const { userModel } = require("../../../models");
const uploadfiles = require("../../../firebase");
const { Mlter } = require("../../../middlewares");
const router = require("express").Router()

const client = new OAuth2Client("1052282063202-6oco7vc7vm6lp7gvomp7bvpedtl612v1.apps.googleusercontent.com")

router.post("/register", async (req, res) => {

    let data = await createUser(req.body)
    console.log(data);
    res.status(201).json(data)
})

// update user




router.post("/updateUser", Mlter.fields([{ name: 'file', maxCount: 1 }, { name: 'id', maxCount: 8 }, { name: 'fname', maxCount: 8 }, { name: 'lname', maxCount: 8 }]), uploadfiles, async (req, res) => {
    const { id, fname, lname } = req.body
    var decodedClaims = jwt.verify(id, 'zer0');
    let image = req.files.file[0].firebaseUrl
    let data = await userModel.findByIdAndUpdate(decodedClaims?.id, { fname, lname, image })
    res.status(200).json(data)
})


router.post("/loginWithGoogle", async (req, res) => {
    const { idToken } = req.body
    const clientId = "1052282063202-6oco7vc7vm6lp7gvomp7bvpedtl612v1.apps.googleusercontent.com"
    const data = await client.verifyIdToken({ idToken, audience: clientId })
    const { email, given_name, family_name } = data?.payload


    const isUser = await userModel.findOne({ email })

    if (isUser == null) {
        try {
            let user = new UserModel({ email, fname: given_name, lname: family_name });
            user = await user.save();
            let token = jwt.sign({ id: user._id }, 'zer0', { expiresIn: '3h' })

            res.status(201).json({ user, token })

        } catch (error) {
            throw error
        }

    }
    let token = jwt.sign({ id: isUser.id }, 'zer0', { expiresIn: '3h' })
    res.status(201).json({ user: isUser, token })


})


router.post("/login", async (req, res) => {

    console.log(req.body);
    let data = await login(req.body)




    res.status(201).json(data)
})


// router.get("/chambres", async (req,res)=>{
//     let data = await getAllChambres()
//     res.status(200).json(data)
// })



// router.get("/deleteChambre/:id", async (req,res)=>{
//     let {id} = req.params
//     await deleteChambre(id)
//     res.status(204).json({
//         message: "Deleted successfully"
//     })
// })


// router.post("/updateChambre", async (req,res) => {
//     let {data} = req.body
//     await updateChambre(data)

//     res.status(204).json({
//         message: "updated successfully"
//     })

// })


module.exports = {
    UserRouter: router
}