const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function authUser(req, res, next){
    // console.log("req.headers.cookie:",req.headers.cookie);
    console.log("headers: ",req.headers);
    console.log("cookie: ",req.headers.cookie);
    console.log("cookie.jwt:", req.headers.cookie.jwt);
    console.log("req.headers.jwtauth: ",req.headers.jwtauth.split(' ')[1]);
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