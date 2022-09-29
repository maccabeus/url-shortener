"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/core/short/index"));
const index_2 = __importDefault(require("./api/core/link/index"));
/**
 * create a `serverRouter` to handle app wide routing mechanism
 * This router will map each `API` request the corresponding  `API endpoint`.
 * @Note Any router not handled within this module will not be available
 * */
const serverRouter = express_1.default.Router();
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
serverRouter.use("", index_2.default);
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
serverRouter.use("/short", index_1.default);
/**
 * default API error management is defined here
 *  */
serverRouter.use("*", (request, response) => {
    response.setHeader("status", "404");
    response.end("NOT FOUND");
});
exports.default = serverRouter;
