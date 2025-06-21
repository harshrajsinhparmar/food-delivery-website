const Crypt =require('cryptr');
const cryptr= new Crypt("premjatol@email.com");
const secretKey="premjatol@email.com"
const jwt= require('jsonwebtoken');

const encryptPassword=(password)=>{
    return cryptr.encrypt(password);
}

const decryptPassword=(password)=>{
    return cryptr.decrypt(password);
}

const createToken =(user_email)=>{
    return jwt.sign(user_email,secretKey,{expiresIn:"1h"});
}

function verifyToken(token){
try{
    return jwt.verify(token,secretKey)
}catch(err){
    return false;
}

} 

module.exports ={
    encryptPassword,decryptPassword,createToken,verifyToken}
