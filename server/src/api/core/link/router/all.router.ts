import express from "express";
/** 
 * Import all application controllers
 */
import { redirectToShortLink } from "../controllers/get.controller";
/**
 * This is the `lowest level` route manager for link.
 */
const router = express.Router();

router.get("/:shortLink", redirectToShortLink);

export default router;