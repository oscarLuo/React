import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    title: {type:String, require: true},
    authors: {type:String, require: true},
    cover: {type:String, require: true},
    goodreadsId: {type:String},
    pages: {type:Number, require: true},
    userId: {type:mongoose.Schema.Types.ObjectId, require: true}
})


export default mongoose.model('Book', schema);