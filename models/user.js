import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        datedenaissance: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true,
            max: 100
        }
    },
        {
        timestamps:true
        }
);


export default model("User", userSchema);