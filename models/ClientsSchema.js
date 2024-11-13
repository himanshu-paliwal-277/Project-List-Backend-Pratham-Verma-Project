import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
  author: ObjectId,
  url:String,
  Name:String,
  Description:String,
  Designation:String
},{collection: 'Clients'});

export const Client = mongoose.model('Client', ClientSchema)