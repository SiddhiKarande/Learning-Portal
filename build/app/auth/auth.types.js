"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCredentials = exports.signupCresdentials = void 0;
const user_types_1 = require("../users/user.types");
exports.signupCresdentials = user_types_1.ZUser;
exports.loginCredentials = user_types_1.ZUser.pick({ email: true, password: true });
