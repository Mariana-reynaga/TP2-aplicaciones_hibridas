const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
require('dotenv').config();
const secretKey = process.env.SECRETKEY; 

const validateToken = ( req, res, next )=>{
    const auth = req.headers.authorization;

    console.log('auuuth ', { auth });

    if (!auth) {
        res.status(401).json({msg: "El token no puede faltar."});
        return
    }

    token = auth.split(' ')[1];

    jwt.verify(token, secretKey, (error, decoded)=>{
        if (error) {
            return res.status(403).json({msg: 'Token invalido.'})
        }
        
        next();
    });
    
}

module.exports = validateToken;