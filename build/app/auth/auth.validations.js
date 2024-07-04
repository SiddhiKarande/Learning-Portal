"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidatin = exports.signupValidation = void 0;
const validator_1 = require("../utility/validator");
const auth_types_1 = require("./auth.types");
exports.signupValidation = [
    (0, validator_1.body)(auth_types_1.signupCresdentials)
];
exports.loginValidatin = [
    (0, validator_1.body)(auth_types_1.loginCredentials)
];
