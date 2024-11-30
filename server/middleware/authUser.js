const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function authUser(req, res, next){
    // console.log("req.headers.cookie:",req.headers.cookie);
    console.log(req);
    const token = "tatata";
    try{
        const decoded = await jwt.verify(token, "secretKey");
        console.log("decoded:", decoded);
    } catch(error){
        next(error);
    }
    next();
}

module.exports = { authUser };