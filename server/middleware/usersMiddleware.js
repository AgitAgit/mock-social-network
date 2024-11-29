import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// export const validateLogin = async function (req, res, next) {
//   try {
//     const user = req.body.user;
//     if(!user.password) return res.json({ message: "password is required..."});
//     const storedUser = await User.findOne({ username: user.username });
//     const isValid = bcrypt.compareSync(user.password, storedUser.password);

//     const token = jwt.sign(
//       { userId: storedUser._id, role:storedUser.role },//this is the payload
//       secretKey,
//       { expiresIn: '1h' }
//     );

//     if(isValid){
//       return res.json({ isValid, token });
//     }
//     else return res.json({ message:"could not generate token..." });

//   } catch (error) {
//     next(error);
//   }
// };

// export const verifyToken = async function(req, res, next){
//   try{
//     const token = req.headers["authorization"];
//     if(!token) return res.status(403).send("token is required...");
//     jwt.verify(token, secretKey, (err, decoded) => {
//       if(err) return res.status(403).send("Invalid token");
//       req.userId = decoded.userId;
//       req.userRole = decoded.role;
//       console.log("from usersController.verifyToken:\nThe users id is:",req.userId,"The user's role is:",req.userRole);
//       console.log(decoded);
//       next();
//     })
//   } catch(error){
//     next(error);
//   }
// }


//In progress...
export async function signIn(req, res, next){
    try{
        const { username, password } = req.body;
        if(!password) return res.json({ message: "password is required..."});
        const storedUser = await User.findOne({ username: username });
        const isValid = bcrypt.compareSync(password, storedUser.password);
        if(isValid){
            const token = jwt.sign(
                { userId: storedUser._id, role:storedUser.role },//this is the payload
                secretKey,
                { expiresIn: '1h' }
            );
        }
        res.cookie("jwt", req.token, {
            httpOnly: false,
            secure: true, // Ensure the cookie is sent over HTTPS.(Do I need it to be true? I think we're sending http requests...)
            sameSite: "strict", // Prevent cross-site requests.(Probably depends on the CORS middleware to define the allowed origin)
            maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
        })
    } catch(error){
        next(error);
    }
}