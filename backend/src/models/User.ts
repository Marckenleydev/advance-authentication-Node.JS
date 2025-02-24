import mongoose from "mongoose";
import bcrypt from "bcryptjs"


export type UserType = {
    _id: string;
    name: string;
    email: string;
    password: string;
    lastLogin: Date;
    isVerified: boolean;
    resetPasswordToken: string | null;
    resetPasswordExpiresAt: Date | null;
    verificationToken: string | null;
    verificationTokenExpiresAt: Date | null;
    
  };

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date
},{timestamps:true})



export default mongoose.model<UserType>("User", userSchema)