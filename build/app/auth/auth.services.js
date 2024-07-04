"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const user_services_1 = __importDefault(require("../users/user.services"));
const encrypt_1 = require("../utility/encrypt");
const auth_responses_1 = require("./auth.responses");
const jsonwebtoken_1 = require("jsonwebtoken");
//signup service
const signup = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExists = yield user_services_1.default.findOneUser({ email: userData.email });
        if (userExists) {
            throw auth_responses_1.authReponses.USER_ALREADY_SIGNEDUP;
        }
        userData.password = yield (0, encrypt_1.encrypt)(userData.password);
        return user_services_1.default.createUser(userData);
    }
    catch (e) {
        throw auth_responses_1.authReponses.USER_REGISTRATION_FAILED;
    }
});
const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_services_1.default.findOneUser({ email: userData.email });
        if (!user) {
            throw auth_responses_1.authReponses.WRONG_CREDENTIALS;
        }
        ;
        const matchPassword = yield (0, bcrypt_1.compare)(userData.password, user.password);
        if (!matchPassword) {
            throw auth_responses_1.authReponses.PASSWORD_DOESNT_MATCH;
        }
        const accessToken = (0, jsonwebtoken_1.sign)({ email: user.email, role: user.role }, process.env.JWT_SECRET);
        console.log({ accessToken, role: user.role });
        return { accessToken, role: user.role };
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    signup,
    login,
};
