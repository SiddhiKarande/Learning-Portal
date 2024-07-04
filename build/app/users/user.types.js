"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZUser = void 0;
const zod_1 = require("zod");
const base_schema_1 = require("../utility/base-schema");
exports.ZUser = base_schema_1.ZBase.extend({
    firstName: zod_1.z.string().min(5, { message: "minimum 5 characters" }).trim(),
    lastName: zod_1.z.string().min(5, { message: "minimum 5 characters" }).trim(),
    email: zod_1.z.string().email().trim(),
    password: zod_1.z.string().min(5, { message: "minimum 5 characters" }).trim(),
    role: zod_1.z.string()
});
;
