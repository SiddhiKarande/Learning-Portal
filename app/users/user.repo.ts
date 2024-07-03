import { query } from "express";
import { userModel } from "./user.schema";
import { IUser } from "./user.types";


const findOne = (query: Partial<IUser>) => userModel.findOne(query);

const insertOne = (query: Partial<IUser>) => userModel.create(query);
export default{
    findOne,insertOne
}