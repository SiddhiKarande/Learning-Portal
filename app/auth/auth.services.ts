import userServices from "../users/user.services";
import { IUser } from "../users/user.types";
import { encrypt } from "../utility/encrypt";
import { authReponses } from "./auth.responses";

//signup service
const signup = async(userData: IUser) => {
    try {
        const userExists = await userServices.findOneUser(userData);
        if(userExists){
            throw authReponses.USER_ALREADY_SIGNEDUP;
        }

        userData.password = await encrypt(userData.password);
        return userServices.createUser(userData);

    } catch (e) {
        throw authReponses.USER_REGISTRATION_FAILED;
    }
};

export default{
    signup,
}


