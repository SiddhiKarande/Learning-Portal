"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateENV = void 0;
const zod_1 = require("zod");
const dotenv_1 = require("dotenv");
const envObject = zod_1.z.object({
    PORT: zod_1.z.coerce.number(),
    // JWT_SECRET: z.string(),
    MONGO_URI: zod_1.z.string(),
    // GOOGLE_AUTH_CLIENT_ID: z.string(),
    // GOOGLE_AUTH_CLIENT_SECRET: z.string(),
    // SMTP_HOST: z.string(),
    // SMTP_PORT: z.coerce.number(),
    // SMTP_USERNAME: z.string(),
    // SMTP_PASSWORD: z.string(),
    // SMTP_SENDER: z.string()
});
const validateENV = () => {
    try {
        (0, dotenv_1.config)();
        envObject.parse(process.env);
    }
    catch (e) {
        throw { msg: "CONFIG ENV PROPERLY", error: e };
    }
};
exports.validateENV = validateENV;
