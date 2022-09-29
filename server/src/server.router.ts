
import express from "express";
import { NextFunction, Response } from "express";
import { Request } from "express";
import shortenerRouter from "./api/core/short/index";
import linkRouter from "./api/core/link/index";
/** 
 * create a `serverRouter` to handle app wide routing mechanism
 * This router will map each `API` request the corresponding  `API endpoint`.
 * @Note Any router not handled within this module will not be available 
 * */
const serverRouter = express.Router();
/**
 * Import all the available routers from each module locations.
 * @example To use the `shortener` router, we will import the routes like this:
 * 
 * ```ts
 * const shortenerRouter= require(".api/core/shortener/index")
 * ```
 */

/** The default api page is shown here */
// serverRouter.get("", (request: Request, response: Response, next: NextFunction) => {
//     response.end("API Working");
// })
/**
 * Each api endpoint will be mapped to their corresponding  router
 * 
 * @example
 * 
 * ```js
 * node-fetch("http://domain.com/ShortUrlXyZ") 
 * ```
 */
serverRouter.use("", linkRouter);
/**
 * Each api endpoint will be mapped to their corresponding  router
 * 
 * @example
 * 
 * ```js
 * node-fetch("http://domain.com/short") 
 * ```
 * To create a short link, we will make the following call:
 * 
 * ```js 
 *  node-fetch("http://domain.com/short/http://mylongurl.com") 
 * ```
 */
serverRouter.use("/short", shortenerRouter);
/** 
 * default API error management is defined here
 *  */
serverRouter.use("*", (request: Request, response: Response) => {
    response.setHeader("status", "404");
    response.end("NOT FOUND");
})

export default serverRouter;