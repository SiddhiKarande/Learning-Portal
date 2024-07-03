import { genSalt, hash } from "bcrypt"

export const encrypt = async (data: any) => {
    const salt = await genSalt(5);
    const encryptedData = await hash(data, salt)
    return encryptedData;
}