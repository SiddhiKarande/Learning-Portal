"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const findOne = (query) => user_schema_1.userModel.findOne(query);
const insertOne = (query) => user_schema_1.userModel.create(query);
exports.default = {
    findOne, insertOne
};
