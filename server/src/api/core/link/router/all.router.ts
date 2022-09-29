import express, { NextFunction, Response, Request } from "express";
/** 
 * Import all application controllers
 */
import { redirectToShortLink } from "../controllers/get.controller";
/**
 * This is the `lowest level` route manager for link.
 */
const router = express.Router();

router.get("", (request: Request, response: Response, next: NextFunction) => {
    response.end("API working");
});
router.get("/:shortLink", redirectToShortLink);

export default router;