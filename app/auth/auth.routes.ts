import { Router } from "express"
import authServices from "./auth.services";
import { ResponseHandler } from "../utility/response-handler";
import { Route } from "../routes/route.types";

const router = Router();
router.post("/signup", async(req, res, next) => {
    try{
        const signup = await authServices.signup(req.body);
        res.send(new ResponseHandler(signup));
    }catch(e){
        next(e);
    }
});

export default new Route("/api/auth", router);
