import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FormSchema = new Schema({
  author: ObjectId,
  Name:String,
  Email:String,
  Contact:String,
  City:String
},{collection: 'Forms'});

export const Form = mongoose.model('Form', FormSchema)