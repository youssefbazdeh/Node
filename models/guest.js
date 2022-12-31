import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const guestSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        sexe: {
            type: String,
            required: true
        },
        groupe: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        adresse: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: true
        },
        user_id: { 
            type: Schema.Types.ObjectId, 
            ref: "users" 
          },
    }
);


export default model("guest", guestSchema);