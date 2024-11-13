import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProjectSchema = new Schema({
  author: ObjectId,
  url:String,
  Name:String,
  Description:String,
}, { collection: 'Projects' });

export const Project = mongoose.model('Project', ProjectSchema)