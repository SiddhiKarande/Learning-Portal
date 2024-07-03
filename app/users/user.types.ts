import { z } from "zod";
import { ZBase } from "../utility/base-schema";

export const ZUser = ZBase.extend({
    firstName: z.string().trim(),
    lastNmae: z.string().trim(),
    email: z.string().email().trim(),
    password:z.string().min(5,{message:"minimum 5 characters"}).trim(),
    role:z.string()
});

export interface IUser extends z.infer<typeof ZUser>{};
export type UserDocument = Document & IUser;