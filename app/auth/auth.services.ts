import { compare } from "bcrypt";
import userServices from "../users/user.services";
import { IUser } from "../users/user.types";
import { encrypt } from "../utility/encrypt";
import { authReponses } from "./auth.responses";
import { sign } from "jsonwebtoken";

//signup service
const signup = async(userData: IUser) => {
    try {
        const userExists = await userServices.findOneUser({email: userData.email});
        if(userExists){
            throw authReponses.USER_ALREADY_SIGNEDUP;
        }

        userData.password = await encrypt(userData.password);
        return userServices.createUser(userData);

    } catch (error: any) {
        if (error.statusCode) throw error;
		throw authReponses.USER_REGISTRATION_FAILED;
        
    }
};

const login = async(userData :IUser) => {
    try {
        const user = await userServices.findOneUser({email: userData.email});
        if(!user) {throw authReponses.WRONG_CREDENTIALS};

        const matchPassword = await compare(userData.password, user.password);
        if(!matchPassword) {throw authReponses.PASSWORD_DOESNT_MATCH;}

       
        const accessToken = sign({email:user.email,role:user.role}, process.env.JWT_SECRET);
        return {accessToken, role:user.role}
    } catch (error: any) {
        if (error.statusCode) throw error;
		throw authReponses.USER_LOGIN_FAILED;
    }
}

export default{
    signup,
    login,
}


