import { Router } from "express";
import { home, dog, cat, fish} from "../controllers/page-controllers";

export const router = Router();

router.get("/", home);
router.get("/dog", dog);
router.get("/cat", cat);
router.get("/fish", fish);
