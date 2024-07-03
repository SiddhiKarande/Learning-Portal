"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("./user.repo"));
const findOneUser = (query) => user_repo_1.default.findOne(query);
const createUser = (query) => user_repo_1.default.insertOne(query);
exports.default = {
    findOneUser,
    createUser,
};
