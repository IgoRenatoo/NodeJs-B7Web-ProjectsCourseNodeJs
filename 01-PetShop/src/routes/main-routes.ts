import { Router } from "express";
import { home, dog, cat, fish, search} from "../controllers/index";

export const router = Router();

router.get("/", home);
router.get("/dog", dog);
router.get("/cat", cat);
router.get("/fish", fish);
router.get("/search", search);
