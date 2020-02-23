import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  company:String,
  prenom:String,
  nom:String,
  type:String
});