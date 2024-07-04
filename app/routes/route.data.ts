import { match } from "path-to-regexp";
import authRoutes from "../auth/auth.routes";
import { ExcludedRoutes, Route } from "./route.types";


export const routes: Route[] = [
	authRoutes
];

export const excludedRoutes: ExcludedRoutes = [
    { path: match("/api/auth/signup"), method: "POST" },
	{ path: match("/api/auth/login"), method: "POST" },
	
	
];