import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NewsSchema = new Schema({
  author: ObjectId,
  Email: String,
}, { collection: 'NewsLatters' });

export const News = mongoose.model('News', NewsSchema)