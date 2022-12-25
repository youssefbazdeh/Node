import mongoose from "mongoose";
const { Schema, model } = mongoose;

const checklistSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true, 
  },
  note: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: "users" 
  },

});

export default model("Checklist", checklistSchema);