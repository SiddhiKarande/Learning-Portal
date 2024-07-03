import { query } from "express";
import { IUser } from "./user.types";
import userRepo from "./user.repo";


const findOneUser = (query: Partial<IUser>) => userRepo.findOne(query);

const createUser = (query: Partial<IUser>) => userRepo.insertOne(query);

export default{
    findOneUser,
    createUser,
}
