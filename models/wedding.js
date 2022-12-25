import mongoose from "mongoose";
const { Schema, model } = mongoose;

const weddingSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  partner_fullname: {
    type: String,
    required: true, 
  },

  genre: {
    type: String,
    required: true,
  },

  partner_sexe: {
    type: String,
    required: true,
  },
  partner_email: {
    type: String,
    required: true,
  },
  wedding_name: {
    type: String,
    required: true,
  },
  date_ceremonie: {
    type: Date,
    required: true,
  },
  heure_ceremonie: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default model("Wedding", weddingSchema);