import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';
//TODO: add uniqueness and email validations to email field
const schema = new mongoose.Schema({
    email: {type: String, required: true, index: true, unique: true},
    passwordHash: {type: String, required:true}  ,
    comfirmed: {type:Boolean, default:false},
    comfirmatinToken: {type:String, default:''}
},{timestamps: true});




schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password);
}
schema.methods.setComfirmatinToken = function setPassword() {
    this.comfirmatinToken = this.generateJWT();
}
// schema.methods.isValidPassword = function isValidPassword(password) {
//     return bcrypt.compareSync(password, this.passwordHash);
// }
schema.methods.generateConfirmationUrl = function generateConfirmationUrl() {
    return `localhost:3000/confrimation/${this.comfirmatinToken}`;
}
schema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        email: this.email
    },"secretKey")
}

schema.methods.toAuthJSON =  function toAuthJSON() {
    return {
        email: this.email,
        comfirmed: this.comfirmed,
        token: this.generateJWT()
    }
}

schema.plugin(uniqueValidator, {message: 'This email is already taken'});
export default mongoose.model('User', schema)