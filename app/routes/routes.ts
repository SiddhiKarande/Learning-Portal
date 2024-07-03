import { Application, json, Request, Response, NextFunction, urlencoded } from "express";
import { routes } from "./route.data";
import { ResponseHandler } from "../utility/response-handler";


export const registerMiddlewares = (app: Application) => {
	const corsOptions = {
		origin: "*",
	};
	
	app.use(json());

	for (let route of routes) {
		app.use(route.path, route.router);
	}

	app.use((err: any, req: Request, res: Response, next: NextFunction) => {
		res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
	});
};
