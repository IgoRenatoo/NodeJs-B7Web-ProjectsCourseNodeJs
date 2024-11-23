import { Router } from "express";
import * as PageControllers from "../controllers/page-controllers";

export const router = Router();

router.get("/", PageControllers.home);
router.get("/dog", PageControllers.dog);
router.get("/cat", PageControllers.cat);
router.get("/fish", PageControllers.fish);
