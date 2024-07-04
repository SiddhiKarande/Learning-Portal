import { body } from "../utility/validator";
import { loginCredentials, signupCresdentials } from "./auth.types";

export const signupValidation = [
    body(signupCresdentials)
]

export const loginValidatin = [
    body(loginCredentials)
]