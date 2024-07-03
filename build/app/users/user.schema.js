"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const base_schema_1 = require("../utility/base-schema");
const mongoose_1 = require("mongoose");
const userSchema = new base_schema_1.BaseSchema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 5 },
    role: { type: String, enum: ["creator", "learner"], default: "learner" }
});
exports.userModel = (0, mongoose_1.model)("users", userSchema);
