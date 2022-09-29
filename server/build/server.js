"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const server_router_1 = __importDefault(require("./server.router"));
const url_service_1 = require("./api/library/url-service/url-service");
const api_1 = require("./api/configs/api");
/** create an express application */
const app = (0, express_1.default)();
/**
 * The main server router. Handles all server routing All required
 *  router within the application are declared in this module
 * */
dotenv_1.default.config();
const port = process.env.PORT || 4001;
/** application host */
const host = process.env.HOST || "http://localhost";
const shortLinkLength = process.env.MAX_URL_LEN || 10;
app.use((0, cors_1.default)(api_1.corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * use specific route based on the provide `API version` and `apiPath`
 *  */
app.use("", server_router_1.default);
/**
 * Process default server error here
 */
app.get("*", (request, response, next) => {
    response.setHeader("status", "404");
});
app.listen(port, () => {
    console.log(`Server running on ${host}:${port}`);
});
/**
 * And finally, start the UrlService. This service runs in the background
 * and generate validated keys for our application usage
 *
 * @note In the right context, this service will run  as a separate `microservice`, but for the
 * sake of simplicity, I have added it as part of the server application
 */
const urlService = url_service_1.UrlService.getInstance();
urlService.start(parseInt(shortLinkLength.toString()));
