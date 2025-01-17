import express from "express";

import { connectToDB } from "./connections/mongo.connection";
import { registerMiddlewares } from "./routes/routes";

export const startServer = async () => {
	try {
		const app = express();
		await connectToDB();

		registerMiddlewares(app);

		const { PORT } = process.env;
		app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
	} catch (e) {
		console.log(e);
		process.exit(1);
	}
};
