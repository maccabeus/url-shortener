import express, { Express, RequestHandler, Request, NextFunction, Response } from "express";
import cors from "cors";

import dotEnv from "dotenv";
import serverRouter from "./server.router";
import { UrlService } from './api/library/url-service/url-service';
import { corsOptions } from "./api/configs/api";

/** create an express application */
const app: Express = express();
/** 
 * The main server router. Handles all server routing All required
 *  router within the application are declared in this module
 * */
dotEnv.config();
const port: number | string = process.env.PORT || 4000;
/** application host */
const host: string = process.env.HOST || "http://localhost";
const shortLinkLength: number | string = process.env.MAX_URL_LEN || 10;

app.use(cors(corsOptions));
app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);
/** 
 * use specific route based on the provide `API version` and `apiPath`
 *  */
app.use("", serverRouter);
/**
 * Process default server error here
 */
app.get("*", (request: Request, response: Response, next: NextFunction) => {
    response.setHeader("status", "404");
})

app.listen(port, () => {
    console.log(`Server running on ${host}:${port}`)
});
/**
 * And finally, start the UrlService. This service runs in the background
 * and generate validated keys for our application usage
 * 
 * @note In the right context, this service will run in a separate, but for the 
 * sake of simplicity, I have added it as part of the server application
 */
const urlService = UrlService.getInstance();
urlService.start(parseInt(shortLinkLength.toString()));
