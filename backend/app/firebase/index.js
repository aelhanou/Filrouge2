
var admin = require("firebase-admin");
require("dotenv").config()

var serviceAccount = require("./firebase.json");

console.log(process.env.BACKEND_STORAGE_BUCKET);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BACKEND_STORAGE_BUCKET
});

const bucket = admin.storage().bucket()

const uploadfiles = (req, res, next) => {
    if(!req.files.file[0]) return next();

    const image = req.files.file[0]
    const img = Date.now() + "." + image.originalname.split('.').pop() 

    const file = bucket.file(img)
    const stream = file.createWriteStream({
        metadata: {
            contentType: image.mimetype 
        }
    })


    stream.on("error",(e)=>{
        console.error(e)
    })

    stream.on("finish",async ()=>{
        await file.makePublic()
        req.files.file[0].firebaseUrl = `https://storage.googleapis.com/${bucket.name}/${img}`
        next()
    })

    stream.end(image.buffer)
}

module.exports = uploadfiles