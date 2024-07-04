import { Router } from "express"
import authServices from "./auth.services";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/route.types";
import { loginValidatin, signupValidation } from "./auth.validations";

const router = Router();
router.post("/signup",...signupValidation, async(req, res, next) => {
    try{
        const signup = await authServices.signup(req.body);
        res.send(new ResponseHandler(signup));
    }catch(e){
        next(e);
    }
});

router.post("/login",...loginValidatin, async(req,res, next) =>{
    try {
        const login = await authServices.login(req.body);
        res.send(new ResponseHandler(login));
    } catch (e) {
        next(e);
    }
})

export default new Route("/api/auth", router);
