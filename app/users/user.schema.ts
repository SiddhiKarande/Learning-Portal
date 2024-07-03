import { string } from "zod";
import { BaseSchema } from "../utility/base-schema";
import { model } from "mongoose";
import { UserDocument } from "./user.types";

const userSchema = new BaseSchema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, min:5},
    role:{type:String, enum:["creator", "learner"], default:"learner"}
})

export const userModel = model<UserDocument>("users", userSchema);