import mongoose from "mongoose";
const { Schema, model } = mongoose;

const budgetSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true, 
  },
  montant: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: "users" 
  },

});

export default model("budget", budgetSchema);