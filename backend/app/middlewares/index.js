const multer = require("multer");
const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send({ auth: false, message: "No token provided." });
        }

        jwt.verify(token, 'zer0', (err, decoded) => {
            if (err) {
                return res.status(500).send({ auth: false, message: "Failed to authenticate token." });
            }
            req.userId = decoded.id;
            next();
        });
    
}






module.exports = {
    Mlter: multer({
        storage: multer.memoryStorage()
    }),
    verifyToken: verifyToken
}

