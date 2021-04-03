import { Router } from "express";

const router = Router();

import {
    signup
} from "../controllers/auth.controller";

router.post("/login", signup);

export default router;