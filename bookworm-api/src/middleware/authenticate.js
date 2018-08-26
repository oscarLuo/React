 import jwt from 'jsonwebtoken';
 import User from '../models/User';
 const authenticate = (req, res, next) => {
    const header = req.headers.authorization;
    let token;
    if (header) token = header.split(' ')[1];

    if (token) {
        jwt.verify(token, 'secretKey', (err, decode)=> {
            if (err) {
                res.status(401).json({
                    errors: {
                        globals: 'Invalid Token'
                    }
                })
            } else {
                User.findOne({email: decode.email}).then(user => {
                    req.currentUser = user;
                    next();
                });
            }
        })
    } else {
        res.status(401).json({
            errors: {
                globals: 'No Token'
            }
        })
    }
}
export default authenticate;