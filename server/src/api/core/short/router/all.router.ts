import express from "express";
/** 
 * Import all application controllers
 */
import { getAllUrl, getUrlByShortLink } from "../controllers/get.controller";
import { deleteShortLink } from "../controllers/delete.controller";
import { addShortLink } from "../controllers/post.controller";
/**
 * This is the `lowest level` route manager. It manages individual `shortener` API `endpoint`
 * and call the appropriate `controller` for route `actions
 */
const router = express.Router();
/**
 *  Get method mapping
 * */
router.get("", getAllUrl);
router.get("/:shortLink", getUrlByShortLink);
/**
 * All post request defined here
 */
router.post("", addShortLink);
/**
 * Delete operations added here
 */
router.delete("/delete/:id", deleteShortLink);

export default router;