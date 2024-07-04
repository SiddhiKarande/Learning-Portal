import { ZUser } from "../users/user.types";

export const signupCresdentials = ZUser;

export type loginCredentials = {
    email: string;
    password: string;
};
export const loginCredentials = ZUser.pick({email: true, password:true})