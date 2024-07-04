"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReponses = void 0;
exports.authReponses = {
    USER_ALREADY_SIGNEDUP: {
        statusCode: 400,
        message: "USER IS ALREADY SIGNED UP WITH THIS EMAIL ID"
    },
    USER_REGISTRATION_FAILED: {
        statusCode: 400,
        message: "USER REGISTRATION FAILED"
    },
    PASSWORD_DOESNT_MATCH: {
        statusCode: 403,
        message: "PASSWORD DOESNT MATCH"
    },
    USER_LOGIN_FAILED: {
        statusCode: 400,
        message: "USER LOGIN FAILED"
    },
    WRONG_CREDENTIALS: {
        statusCode: 400,
        message: "USER WITH THIS EMAIL ID DOES NOT FOUND"
    },
};
