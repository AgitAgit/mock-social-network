const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function parseCookie(cookie) {
  let result = {};
  // console.log("cookie: ", cookie);
  const cookies = cookie.split("; ");
  // console.log("cookies",cookies);
  cookies.forEach((cookie) => {
    const pair = cookie.split("=");
    result[`${pair[0]}`] = pair[1];
  });
  // console.log("cookie parser result:",result);
  return result;
}

async function authUser(req, res, next) {
  const cookieObject = parseCookie(req.headers.cookie);
  const token = cookieObject.jwt;
  try {
    const decoded = await jwt.verify(token, "secretKey");
    console.log("decoded:", decoded);
    req.user = { ...decoded };
  } catch (error) {
    next(error);
  }

  next();
}

module.exports = { authUser };
